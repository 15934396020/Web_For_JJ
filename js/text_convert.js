var st_dict = {};
var ts_dict = {};

function loadFile(filePath, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", filePath, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState == 4) {
      if (rawFile.status == 200 || rawFile.status == 0) {
        callback(rawFile.responseText);
      }
    }
  }
  rawFile.send(null);
}

function parseAndBuildDictionary(fileContent, callback) {
  // 假设文件内容每行是 "简体字:繁体字"
  var lines = fileContent.split('\n');

  lines.forEach(function (line) {
    var pair = line.split(':');
    if (pair.length == 2) {
      var simplified = pair[0].trim();
      var traditional = pair[1].trim();
      st_dict[simplified] = traditional;
      ts_dict[traditional] = simplified;
    } else {
      alert("读入错误：" + line);
    }
  });

  // 在解析完成后调用回调函数
  callback();
}

function deal(text, type) {
  if (type == 0 || type == 1) {
    var result = "";

    for (var i = 0; i < text.length; i++) {
      var char = text.charAt(i);

      if (type == 0) {
        // 简体字转繁体字
        var charTranslation = st_dict[char];
        result += charTranslation != undefined ? charTranslation : char;
      } else if (type == 1) {
        // 繁体字转简体字
        charTranslation = ts_dict[char];
        result += charTranslation != undefined ? charTranslation : char;
      }
    }

    return result;
  } else {
    // 未知的 type 类型，直接返回原始文本
    return text;
  }
}

// 获取页面中所有的文本节点并处理
function processTextNodes(element, type) {
  if (element.nodeType == 3) {
    // 文本节点
    if (element.nodeValue.trim() != "") {
      // console.log("处理前：" + element.nodeValue.trim());
      // console.log("处理后：" + deal(element.nodeValue.trim(), type));
      element.nodeValue = deal(element.nodeValue.trim(), type);
    }
  } else if (element.nodeType == 1) {
    // 元素节点，递归处理子节点
    for (var i = 0; i < element.childNodes.length; i++) {
      processTextNodes(element.childNodes[i], type);
    }
  }
}

// 繁体转简体
function t_to_s(element) {
  // console.log("繁体 -> 简体");
  processTextNodes(element, 1);
}

// 简体转繁体
function s_to_t(element) {
  // console.log("简体 -> 繁体");
  processTextNodes(element, 0);
}

// 元素加载完后立刻执行
document.addEventListener("DOMContentLoaded", function () {
  // 读入简体繁体对照表
  loadFile('st_table.txt', function (fileContent) {
    parseAndBuildDictionary(fileContent, function () {
      // console.log(Object.keys(st_dict).length);
      // 解析完成后再执行转换函数
      s_to_t(document.body);

      // 获取三个 li 元素
      var traditionalLi = document.getElementById('traditional');
      var simplifiedLi = document.getElementById('simplified');

      // 点击事件处理函数
      function swapText() {
        // 交换文本值
        var temp = traditionalLi.textContent;
        traditionalLi.textContent = simplifiedLi.textContent;
        simplifiedLi.textContent = temp;
        // 相应内容转换
        if (traditionalLi.textContent == '繁') {
          // 转换为繁体字
          s_to_t(document.body);
        } else {
          // 转换为简体字
          t_to_s(document.body);
        }
      }

      // 为第一个和第三个 li 元素添加点击事件监听器
      traditionalLi.addEventListener('click', function () {
        swapText();
      });

      simplifiedLi.addEventListener('click', function () {
        swapText();
      });
    });
  });
});
