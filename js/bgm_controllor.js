function toggleAudio() {
  var audio = document.getElementById('BGM');
  var playPauseButton = document.querySelector('#BGM-left img');
  // 当音频播放状态改变时触发
  audio.addEventListener('play', function () {
    playPauseButton.classList.add('rotate'); // 添加旋转类
  });
  if (audio.paused) {
    audio.play();
    playPauseButton.classList.add('rotate'); // 添加旋转类
  } else {
    audio.pause();
    playPauseButton.classList.remove('rotate'); // 移除旋转类
  }
}

// 点击收起/展开按钮时触发
function toggleBGMBlank() {
  // 获取 BGM-container 元素
  var containerDiv = document.querySelector('.BGM-container');
  // 获取 BGM-left 元素
  var leftDiv = document.getElementById('BGM-left');
  if (leftDiv.style.height === '0px' || leftDiv.style.height === '') {
    // 展开时，设置高度为初始高度
    leftDiv.style.height = 'auto';
    // 设置 BGM-container 宽度为 20%
    containerDiv.style.width = '20%';
  } else {
    // 收回时，设置高度为 0
    leftDiv.style.height = '0';
    // 设置 BGM-container 宽度为 4%
    containerDiv.style.width = '4%';
  }
}
// 元素加载完后立刻执行
document.addEventListener("DOMContentLoaded", function () {
  // 获取img元素
  var playPauseButton = document.querySelector('#BGM-left img');
  var hideButton = document.querySelector('#BGM-right img');
  // toggleBGMBlank();
  // 为img元素添加点击事件
  playPauseButton.addEventListener('click', toggleAudio);
  hideButton.addEventListener('click', toggleBGMBlank);
});

// 页面刷新时的事件监听
window.addEventListener("load", function () {
  toggleBGMBlank();
});

window.addEventListener("rersize", function () {
  toggleBGMBlank();
});
