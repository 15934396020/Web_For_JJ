// The contents in NEWS Page
// Formated in [image-src, image-alt, contents, tag, date, time]
var contents_news = [["https://s11.ax1x.com/2023/12/23/pi7t94H.jpg", "JJ彩排照片", "JJ20咸陽站彩排回顧!JJ20 Xianyang Rehearsals!#roadtoJJ20 #JJ20WorldTour #throwback", "社群", "2023 - 10 - 30", "12:01"],
					 ["https://s11.ax1x.com/2023/12/23/pi7ti8A.jpg", "JJ与其他音乐人合作", "Proud of you my brother @troylaureta! Happy to be featuring my very first song in Filipino, “Hanggang” in the album, Dalamhati , launching……", "社群", "2023 - 10 - 30", "12:01"],
					 ["https://s11.ax1x.com/2023/12/23/pi7tFgI.jpg", "JJ生活照", "Thank you LA.", "社群", "2023 - 10 - 30", "12:01"],
					 ["https://s11.ax1x.com/2023/12/23/pi7tEKP.jpg", "JJ在录音室", "Vibin'", "社群", "2023 - 10 - 30", "12:01"],
					 ["https://s11.ax1x.com/2023/12/23/pi7tVDf.jpg", "JJMV花絮", "帶你一探此次 MV 拍攝的過程林俊傑 JJ Lin 《一時的選擇》 MV 幕後花絮與你分享! First we make choices, then the choices make us.Go behind the scen.", "社群", "2023 - 10 - 30", "12:01"],
					 ["https://s11.ax1x.com/2023/12/23/pi7tZb8.jpg", "JJ演出照", "林俊傑害羞掀衣「結實六塊肌全都露」！　大咖來賓韓紅嗨到搭肩親下去", "新闻", "2023 - 09 - 25", "01:18"],
					 ["https://s11.ax1x.com/2023/12/23/pi7tmVS.jpg", "JJ金曲奖", "金曲獎／林俊傑自彈自唱3金曲致敬恩師！唱到最後1首…林秋離愛妻台下淚崩", "新闻", "2023 - 07 - 01", "08:33"]]

// 当前页码
let current_page = 0;
// 总页码数
let tot_pages = Math.ceil(contents_news.length / 5);

// Paging bar refreshing
function refreshPagination(currentPage, totalPages) {
    var paginationElement = document.getElementById('paging');
    paginationElement.innerHTML = ''; // 清空现有内容

    var leftPageBtn = document.createElement('li');
    leftPageBtn.textContent = '‹';
    leftPageBtn.id = 'left_page_btn';
    paginationElement.appendChild(leftPageBtn);

    var maxVisiblePages = 6; // 定义最大可见页数
    var numPagesToShow = Math.min(totalPages, maxVisiblePages);

    var startPage = 1;
    var endPage = numPagesToShow;

    if (totalPages > maxVisiblePages && currentPage > Math.floor(maxVisiblePages / 2)) {
        startPage = currentPage - Math.floor(maxVisiblePages / 2);
        endPage = currentPage + Math.floor(maxVisiblePages / 2);

        if (endPage > totalPages) {
            startPage -= endPage - totalPages;
            endPage = totalPages;
        }
    }

    for (var i = startPage; i <= endPage; i++) {
        var pageElement = document.createElement('li');
        pageElement.textContent = i;
		
		// 点击事件
		pageElement.addEventListener('click', function(event) {
            var clickedPage = parseInt(event.target.textContent, 10);
            current_page = clickedPage - 1;  // 更新当前页码
            refreshPagination(current_page + 1, tot_pages);
            contents_generate_news(current_page);
            updatePageStyles(current_page);
        });
		
        paginationElement.appendChild(pageElement);
    }

    if (totalPages > maxVisiblePages && endPage < totalPages) {
        var ellipsisElement = document.createElement('li');
        ellipsisElement.textContent = '···';
        paginationElement.appendChild(ellipsisElement);

        var lastPageElement = document.createElement('li');
        lastPageElement.textContent = totalPages;
        paginationElement.appendChild(lastPageElement);
    }

    var rightPageBtn = document.createElement('li');
    rightPageBtn.textContent = '›';
    rightPageBtn.id = 'right_page_btn';
    paginationElement.appendChild(rightPageBtn);
	
	// 获取左右翻页按钮
	var leftPageBtn = document.getElementById('left_page_btn');
	var rightPageBtn = document.getElementById('right_page_btn');

	// 添加左右翻页按钮点击事件
	leftPageBtn.addEventListener('click', function () {
    	current_page--;
    	if (current_page < 0) {
        	current_page = tot_pages-1;
    	}
    	refreshPagination(current_page+1, tot_pages);
    	contents_generate_news(current_page);
    	updatePageStyles(current_page);
	});

	rightPageBtn.addEventListener('click', function () {
    	current_page++;
    	if (current_page+1 > tot_pages) {
        	current_page = 0;
    	}
    	refreshPagination(current_page+1, tot_pages);
    	contents_generate_news(current_page);
    	updatePageStyles(current_page);
	});
}


function contents_generate_news(page_index){

    // 获取目标ul元素
    var ulElement = document.getElementById("news_contents");
	ulElement.innerHTML = ''; // 清空现有内容
	
	// 获取本页文章数量
	var current_contents = Math.min(contents_news.length-page_index*5, 5);
	
    // 遍历数据数组，生成li元素并添加到ul中
    for (var i=0; i<current_contents; i++){
		// 获取当前文章信息
		var content = contents_news[page_index*5+i]
		
      // 创建li元素
      var liElement = document.createElement("li");

      // 创建包含图片的div
      var imgDiv = document.createElement("div");
      imgDiv.className = "img";
      var imgElement = document.createElement("img");
      imgElement.src = content[0];
      imgElement.className = "img-responsive";
      imgElement.alt = content[1];
      imgDiv.appendChild(imgElement);

      // 创建包含标题和日期的div
      var textDiv = document.createElement("div");
      textDiv.className = "center_r";
      var h3Element = document.createElement("h3");
      h3Element.textContent = content[2];
      var pElement = document.createElement("p");
      pElement.innerHTML = `<span>${content[3]}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>${content[4]}&nbsp;&nbsp;&nbsp;&nbsp;${content[5]}`;

      // 将元素添加到li中
      textDiv.appendChild(h3Element);
      textDiv.appendChild(pElement);
      liElement.appendChild(imgDiv);
      liElement.appendChild(textDiv);

      // 将li添加到ul中
      ulElement.appendChild(liElement);
    }
	
}

// 更新页码样式
function updatePageStyles(current_page) {
    var paginationElements = document.getElementById('paging').children;
    for (var i = 0; i < paginationElements.length; i++) {
        var pageElement = paginationElements[i];
        if (pageElement.textContent == current_page+1 || (pageElement.textContent == '...' && current_page >= 6 && current_page+1 < tot_pages)) {
            pageElement.style.backgroundColor = '#9e56ff'; // 当前页码样式
        } else {
            pageElement.style.backgroundColor = '#31313a'; // 未选中页码样式
        }
    }
	setFontSize();
}

/* 重载页面时刷新默认内容 */
window.addEventListener("load", function () {
	refreshPagination(1, tot_pages);
	contents_generate_news(current_page);
	updatePageStyles(0);
});
window.addEventListener("resize", function () {
	refreshPagination(1, tot_pages);
	contents_generate_news(current_page);
	updatePageStyles(0);
});
