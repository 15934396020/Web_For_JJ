function image_paly() {
	// 获取包含所有 li 元素的 ul 元素
	var ulElement = document.getElementById('bio_ul');

	// 获取所有的 li 元素
	var liElements = ulElement.querySelectorAll('li');

	// 遍历每个 li 元素
	liElements.forEach(function(liElement) {
    // 获取当前 li 元素中的图片和音频元素
    var imgElement = liElement.querySelector('img');
    var audioElement = liElement.querySelector('audio');

    // 为图片添加点击事件监听器
    imgElement.addEventListener('click', function() {
        // 如果音频正在播放，暂停音频；如果音频暂停或者尚未开始，播放音频
        if (audioElement.paused) {
            audioElement.play();
        } else {
            audioElement.pause();
        }
    });
});
}

// 元素加载完后立刻执行
document.addEventListener("DOMContentLoaded", function () {
	image_paly();
});
