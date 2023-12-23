document.addEventListener("DOMContentLoaded", function() {
  var loaderContainer = document.getElementById("loader-container");

  window.addEventListener("load", function() {
    var load_timer = setInterval(function() {
      loaderContainer.style.display = 'none';
	// 获取 slideshow-container 类的 div
      var slideshowContainer = document.querySelector(".slideshow-container");

      // 获取 slideshow-container 类的 div 下的 audio 元素
      var audioElement = slideshowContainer.querySelector("audio");

      // 如果找到了 audio 元素，则播放音频
      if (audioElement) {
        audioElement.play();
      }
    }, 2000);
  });
});
