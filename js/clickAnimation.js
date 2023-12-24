(function () {
  var a_idx = 0;
  window.onclick = function (event) {
    var content = ["❤JJ❤", "❤梦为努力浇了水 爱在背后往前推❤", "❤宇宙一丝一毫 伟大并非凑巧❤",
      "❤不言退不流泪不狼狈不认命迎合❤", "❤可当初的你和现在的我假如重来过❤",
      "❤我要和你拥抱牵你的手一起去奔跑❤", "❤乌云也不再多我们也不为谁掉眼泪❤",
      "❤这最美的秘密是我们都在制造巧遇❤", "❤就算用尽所有真心却到不了你的心里❤",
      "❤这剧本开始一个人我认真写成了我们❤", "❤笑着说爱让人疯狂哭着说爱让人紧张❤",
      "❤如果有一天回到从前回到最原始的我❤", "❤我不太确定爱最好的方式是动词或名❤",
      "❤往前跑的人需要摆脱遗憾的药❤", "❤不要害怕生命中不完美的角落❤",
      "❤内心疏远足够渺小外表多浓烈❤", "❤有一种踏实是你心中有我名字❤",
      "❤既然可以拥抱就不要轻易放掉❤", "❤路不该是疑问句要比谁都清晰❤",
      "❤那些你很冒险的梦我陪你去疯❤", "❤等到黑夜翻面之后会是新的白昼❤",
      "❤等到海啸退去之后只是潮起潮落❤", "❤你存在的这一秒会不会是我依靠❤"
    ];

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
