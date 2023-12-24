(function () {
  var a_idx = 0;
  window.onclick = function (event) {
    var content = ["❤JJ❤", "❤ 圣所❤", "❤114514❤"];

    var heart = document.createElement("b"); // 创建b元素
    heart.onselectstart = function () {
      return false;
    }; // 防止拖动

    document.body.appendChild(heart).innerHTML = content[a_idx]; // 将b元素添加到页面上
    a_idx = (a_idx + 1) % content.length;
    heart.style.cssText = "position: fixed;left:-100%;"; // 给b元素设置样式

    var screenWidth = window.innerWidth;
    var f = 16;
    if (screenWidth < 756) {
      f = 6; // 字体大小
    } else if (screenWidth < 992) {
      f = 12; // 字体大小
    } else {
      f = 16; // 字体大小
    }

    var x = event.clientX - f / 2; // 横坐标
    var y = event.clientY - f; // 纵坐标
    var c = randomColor(); // 随机颜色
    var a = 1; // 透明度
    var s = 1.2; // 放大缩小

    var timer = setInterval(function () { // 添加定时器
      if (a <= 0) {
        document.body.removeChild(heart);
        clearInterval(timer);
      } else {
        heart.style.cssText = "font-size:" + f + "px;cursor: default;position: fixed;color:"
          + c + ";left:" + x + "px;top:" + y + "px;opacity:" + a + ";transform:scale("
          + s + ");";

        y--;
        a -= 0.016;
        s += 0.002;
      }
    }, 15);
  };

  // 随机颜色
  function randomColor() {
    return "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ","
      + Math.floor(Math.random() * 256) + ")";
  }
}());
