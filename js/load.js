document.addEventListener("DOMContentLoaded", function () {
  var loaderContainer = document.getElementById("loader-container");
  // 获取 slideshow-container 类的 div
  var slideshowContainer = document.querySelector(".slideshow-container");
  // 获取 slideshow-container 类的 div 下的 audio 元素
  var audioElement = slideshowContainer.querySelector("audio");

  // 如果找到了 audio 元素，则播放音频
  if (audioElement) {
    // audioElement.play();
  }

  window.addEventListener("load", function () {
    var load_timer = setInterval(function () {
      loaderContainer.style.display = 'none';
	  var BGMPlayer = document.querySelector(".BGM-container");
	  BGMPlayer.style.display = 'flex';
    }, 2000);
  });
});
