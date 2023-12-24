// 登录状态检测
function account_check() {
  var activeAccountData = JSON.parse(sessionStorage.getItem('ActiveAccount'));
  var localActiveAccountData = JSON.parse(localStorage.getItem('localActiveAccountData'));
  if (activeAccountData || localActiveAccountData) {
    // New Active Account
    if (activeAccountData) {
      // Save to local
      localStorage.setItem('localActiveAccountData', JSON.stringify(activeAccountData));
    }
    // Get the elements
    var loginLi = document.getElementById('loginLi');
    var registerA = document.querySelector('#registerLi a');

    // Replace the content of the loginLi with an image
    loginLi.classList.add("loginLi");
    loginLi.innerHTML = '<div class="info-container"><img src="./images/account.png" class="account" alt="Account Image" id="accountImage"><div class="account_info" id="accountInfo"><p></p></div>';

    // Update the href and add a class for red background to the registerA
    registerA.href = 'javascript:;';
    registerA.innerHTML = '<button type="button" class="btn btn-sm zc">退出</button>';

    var outBtn = document.querySelector('#registerLi a button');
    outBtn.style.backgroundColor = 'red';
  }
}

// 退出登录
function logOut() {
  // 清空本地登录数据
  localStorage.removeItem('localActiveAccountData');

  // Get the elements
  var loginLi = document.getElementById('loginLi');
  var registerA = document.querySelector('#registerLi a');

  // Replace the content of the loginLi with an image
  loginLi.innerHTML = '<a href="./login.html"><button type="button" class="btn btn-sm">登入</button></a>';

  // Update the href and add a class for red background to the registerA
  registerA.href = './register.html';

  // Add a click event listener to registerA to prevent default behavior
  registerA.addEventListener('click', function (event) {
    event.preventDefault();
    // Do any additional actions you need without navigating to the link
  });

  var outBtn = document.querySelector('#registerLi a button');
  outBtn.textContent = "注册";
  outBtn.style.backgroundColor = '#9e56ff';
}

// 用户名处理
function usernameDeal(name) {
  if (name.length > 8) {
    // 截取前三个和最后一个字符
    var truncatedName = name.substring(0, 5) + '...' + name.slice(-1);
    return truncatedName;
  } else {
    return name;
  }
}

// 元素加载完后立刻执行
document.addEventListener("DOMContentLoaded", function () {
  account_check();
  var outBtn = document.querySelector('#registerLi a button');
  // 绑定退出函数
  outBtn.addEventListener('click', function () {
    logOut();
	setFontSize();
  });
  // 获取图片和信息框元素
  var accountImage = document.getElementById('accountImage');
  var accountInfo = document.getElementById('accountInfo');

  if (accountImage) {
    // 用户信息设置
    var accountInfoP = document.querySelector('#accountInfo p');
    var localActiveAccountData = JSON.parse(localStorage.getItem('localActiveAccountData'));
    // 获取对象的所有键
    var keys = Object.keys(localActiveAccountData);
    // 获取最后一个键
    var lastKey = keys[keys.length - 1];
	var lastValue = localActiveAccountData[lastKey];
    // 获取用户名
    // 使用 split 分割字符串
    var splitResult = lastKey.split(' ');
    // 获取第一个英文空格后的内容
    var userName = splitResult.slice(1).join(' ');
    accountInfoP.innerHTML = "欢迎您！<br>用户: " + usernameDeal(userName) + "<br>IP属地: "+lastValue.country+" "+lastValue.city;
    // 添加点击事件监听器
    accountImage.addEventListener('click', function () {
      // 获取实际的 display 属性值
      var displayStyle = window.getComputedStyle(accountInfo).getPropertyValue('display');

      // 切换信息框的显示状态
      if (displayStyle === 'none') {
        accountInfo.style.display = 'block';
        accountInfo.style.zIndex = 99999;
      } else {
        accountInfo.style.display = 'none';
      }
    });
  }
});
