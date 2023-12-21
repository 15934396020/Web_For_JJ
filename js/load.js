document.addEventListener("DOMContentLoaded", function() {
  const progressBar = document.getElementById("progress-bar");
  const loaderContainer = document.getElementById("loader-container");

  function updateProgressBar() {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.clientHeight;

    // 计算进度百分比
    const progress = (scrollPosition / (bodyHeight - windowHeight)) * 100;

    // 设置进度条宽度
    // progressBar.style.width = `${progress}%`;
  }

  window.addEventListener("scroll", updateProgressBar);
  window.addEventListener("resize", updateProgressBar);

  window.addEventListener("load", function() {
    var load_timer = setInterval(function() {
      loaderContainer.style.display = 'none';
    }, 2000);
  });
});
