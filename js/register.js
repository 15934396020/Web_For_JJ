async function getUserLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          var latitude = position.coords.latitude;
          var longitude = position.coords.longitude;

          console.log("User's Location:");
          console.log("Latitude: " + latitude);
          console.log("Longitude: " + longitude);

          resolve([latitude, longitude]);
        },
        function (error) {
          console.error("Error getting user location:", error.message);
          reject(error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      reject(new Error("Geolocation is not supported"));
    }
  });
}

// 使用 async/await 处理异步操作
async function fetchUserLocation() {
  try {
    const position = await getUserLocation();
    const apiUrl = `https://nominatim.openstreetmap.org/reverse?lat=${position[0]}&lon=${position[1]}&format=json`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    const countryCode = data.address.country_code.toUpperCase();
    const phoneCode = getPhoneCodeByCountryCode(countryCode);

    // Test
    console.log(`Country Code: ${countryCode}`);
    console.log(`Phone Code: ${phoneCode}`);
    // 根据 IP 地理信息设置默认区号
    var phoneCode_span = document.getElementById("selectedPhoneCode");
    phoneCode_span.textContent = countryCode + " " + phoneCode;
  } catch (error) {
    console.error('Error:', error);
    // 默认 CN +86
    var phoneCode_span = document.getElementById("selectedPhoneCode");
    phoneCode_span.textContent = "CN +86";
  }
}

const phoneCodes = {
  'AO': '+244',
  'AF': '+93',
  'AL': '+355',
  'DZ': '+213',
  'AD': '+376',
  'AI': '+1264',
  'AG': '+1268',
  'AR': '+54',
  'AM': '+374',
  'AC': '+247',
  'AU': '+61',
  'AT': '+43',
  'AZ': '+994',
  'BS': '+1242',
  'BH': '+973',
  'BD': '+880',
  'BB': '+1246',
  'BY': '+375',
  'BE': '+32',
  'BZ': '+501',
  'BJ': '+229',
  'BM': '+1441',
  'BO': '+591',
  'BW': '+267',
  'BR': '+55',
  'BN': '+673',
  'BG': '+359',
  'BF': '+226',
  'MM': '+95',
  'BI': '+257',
  'CM': '+237',
  'CA': '+1',
  'KY': '+1345',
  'CF': '+236',
  'TD': '+235',
  'CL': '+56',
  'CN': '+86',
  'CO': '+57',
  'CG': '+242',
  'CK': '+682',
  'CR': '+506',
  'CU': '+53',
  'CY': '+357',
  'CZ': '+420',
  'DK': '+45',
  'DJ': '+253',
  'DO': '+1890',
  'EC': '+593',
  'EG': '+20',
  'SV': '+503',
  'EE': '+372',
  'ET': '+251',
  'FJ': '+679',
  'FI': '+358',
  'FR': '+33',
  'GF': '+594',
  'GA': '+241',
  'GM': '+220',
  'GE': '+995',
  'DE': '+49',
  'GH': '+233',
  'GI': '+350',
  'GR': '+30',
  'GD': '+1809',
  'GU': '+1671',
  'GT': '+502',
  'GN': '+224',
  'GY': '+592',
  'HT': '+509',
  'HN': '+504',
  'HK': '+852',
  'HU': '+36',
  'IS': '+354',
  'IN': '+91',
  'ID': '+62',
  'IR': '+98',
  'IQ': '+964',
  'IE': '+353',
  'IL': '+972',
  'IT': '+39',
  'KT': '+225',
  'JM': '+1876',
  'JP': '+81',
  'JO': '+962',
  'KH': '+855',
  'KZ': '+327',
  'KE': '+254',
  'KR': '+82',
  'KW': '+965',
  'KG': '+331',
  'LA': '+856',
  'LV': '+371',
  'LB': '+961',
  'LS': '+266',
  'LR': '+231',
  'LY': '+218',
  'LI': '+423',
  'LT': '+370',
  'LU': '+352',
  'MO': '+853',
  'MG': '+261',
  'MW': '+265',
  'MY': '+60',
  'MV': '+960',
  'ML': '+223',
  'MT': '+356',
  'MI.': '+1670',
  'MQ': '+596',
  'MU': '+230',
  'MX': '+52',
  'MD': '+373',
  'MC': '+377',
  'MN': '+976',
  'MS': '+1664',
  'MA': '+212',
  'MZ': '+258',
  'NA': '+264',
  'NR': '+674',
  'NP': '+977',
  'AN': '+599',
  'NL': '+31',
  'NZ': '+64',
  'NI': '+505',
  'NE': '+227',
  'NG': '+234',
  'KP': '+850',
  'NO': '+47',
  'OM': '+968',
  'PK': '+92',
  'PA': '+507',
  'PG': '+675',
  'PY': '+595',
  'PE': '+51',
  'PH': '+63',
  'PL': '+48',
  'PF': '+689',
  'PT': '+351',
  'PR': '+1787',
  'QA': '+974',
  'RE': '+262',
  'RO': '+40',
  'RU': '+7',
  'LC': '+1758',
  'VC': '+1784',
  'AS': '+684',
  'WS': '+685',
  'SM': '+378',
  'ST': '+239',
  'SA': '+966',
  'SN': '+221',
  'SC': '+248',
  'SL': '+232',
  'SG': '+65',
  'SK': '+421',
  'SI': '+386',
  'SB': '+677',
  'SO': '+252',
  'ZA': '+27',
  'ES': '+34',
  'LK': '+94',
  'LC': '+1758',
  'VC': '+1784',
  'SD': '+249',
  'SS': '+211',
  'SR': '+597',
  'SZ': '+268',
  'SE': '+46',
  'CH': '+41',
  'SY': '+963',
  'TW': '+886',
  'TJ': '+992',
  'TZ': '+255',
  'TH': '+66',
  'TG': '+228',
  'TO': '+676',
  'TT': '+1809',
  'TN': '+216',
  'TR': '+90',
  'TM': '+993',
  'UG': '+256',
  'UA': '+380',
  'AE': '+971',
  'GB': '+44',
  'US': '+1',
  'UY': '+598',
  'UZ': '+233',
  'VE': '+58',
  'VN': '+84',
  'YE': '+967',
  'YU': '+381',
  'ZW': '+263',
  'CD': '+243',
  'ZM': '+260',
};

// 示例：根据国家码获取手机区号的函数（实际中需要查询数据源）
function getPhoneCodeByCountryCode(countryCode) {
  return phoneCodes[countryCode] || '+86';
}

var selectedPhoneCodeElement;
var phoneCodeOptionsElement;

// 点击按钮时切换选项的可见性
function toggleOptions() {
  console.log("Clicked!");
  if (phoneCodeOptionsElement) {
    phoneCodeOptionsElement.classList.toggle('visible');
  }
}

function updatePhoneCodeOptions(phoneCodeOptionsElement) {
  // 清空已有的选项
  phoneCodeOptionsElement.innerHTML = '';

  // 遍历 phoneCodes 中的每个键值对
  for (var countryCode in phoneCodes) {
    if (phoneCodes.hasOwnProperty(countryCode)) {
      // 创建 span 元素作为选项
      var optionElement = document.createElement('span');

      // 设置 span 元素的值和文本内容
      optionElement.textContent = countryCode + " " + phoneCodes[countryCode];

      // 点击选项时更新选择的区号并隐藏选项
      optionElement.onclick = function () {
        selectedPhoneCodeElement.textContent = this.textContent;
        toggleOptions();
      };

      // 将 span 元素添加到选项容器中
      phoneCodeOptionsElement.appendChild(optionElement);
    }
  }
}

// IP 地址信息获取
function getIpAndAddressSohu() {
  // 定义API接口的URL
  const apiUrl = 'http://pv.sohu.com/cityjson?ie=utf-8';
  const config = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    }
  }
  // 发起Fetch请求
  fetch(apiUrl, config)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // 解析返回的JSON数据
    })
    .then(data => {
      // 处理返回的数据
      console.log(data);
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
}

// 阅读按钮选中/未选
function toggleCheckBackground() {
  var checkDiv = document.getElementById('check');

  // 获取当前背景颜色
  var currentColor = window.getComputedStyle(checkDiv).getPropertyValue('background-color');

  // 切换背景颜色
  checkDiv.style.backgroundColor = (currentColor === 'rgba(0, 0, 0, 0)' || currentColor === 'transparent') ? '#9e56ff' : 'transparent';
}

// 元素加载完后立刻执行
document.addEventListener("DOMContentLoaded", function () {
  selectedPhoneCodeElement = document.getElementById('selectedPhoneCode');
  phoneCodeOptionsElement = document.getElementById('phoneCodeOptions');

  document.querySelector('.icon').addEventListener('click', toggleOptions);

  var checkAgree = document.getElementById('check');

  // 添加点击事件监听器
  checkAgree.addEventListener('click', function () {
    toggleCheckBackground();
  });

  // 获取元素
  var phoneInput = document.getElementById('phone_input');
  var codeInput = document.getElementById('verify_code');
  var verifyGet = document.getElementById('verify_get');
  var registerBtn = document.getElementById('register_btn');
  var registerBtnAnchor = registerBtn.querySelector('a');

  // 使能验证码获取按钮
  function toggleVerifyGetBackground() {
    // 判断输入框是否有内容
    if (phoneInput.value.trim() !== '') {
      verifyGet.classList.add('active'); // 有内容时添加类名
    } else {
      verifyGet.classList.remove('active'); // 没有内容时移除类名
    }
  }

  // 使能注册按钮
  function toggleRegisterBackground() {
    var phoneNumber = document.getElementById('phone_input').value.trim();
    var enteredCode = document.getElementById('verify_code').value.trim();
	var password = document.getElementById('password').value.trim();
	var password_check = document.getElementById('password-check').value.trim();
    var checkBackgroundColor = window.getComputedStyle(document.getElementById('check')).getPropertyValue('background-color');

    if (phoneNumber != '' && enteredCode != '' && password != '' && password_check != '' && checkBackgroundColor != 'rgba(0, 0, 0, 0)') {
      registerBtnAnchor.classList.add('active'); // 有内容时添加类名
    } else {
      registerBtnAnchor.classList.remove('active'); // 没有内容时移除类名
    }
  }

  // 添加输入事件监听器
  phoneInput.addEventListener('input', function () {
    toggleVerifyGetBackground();
    toggleRegisterBackground();
  });
  codeInput.addEventListener('input', function () {
    toggleVerifyGetBackground();
    toggleRegisterBackground();
  });
  // 添加悬停事件监听器
  registerBtn.addEventListener('mouseover', function () {
    toggleRegisterBackground();
  });

  function generateOrRetrieveCode() {
    // 获取输入框内容
    var phoneNumber = phoneInput.value.trim();
    // 获取区号信息
    // 获取元素
    var selectedPhoneCodeSpan = document.getElementById('selectedPhoneCode');

    // 获取文字内容
    var mobile_countrry_code = selectedPhoneCodeSpan.textContent || selectedPhoneCodeSpan.innerText;

    if (phoneNumber != '') {
      // 生成或检索验证码
      var storedData = JSON.parse(localStorage.getItem('verificationCodes')) || {};
      var storedCodeData = storedData[mobile_countrry_code + phoneNumber];

      if (storedCodeData && withinTimeLimit(storedCodeData.timestamp, 60)) {
        // 使用之前生成的验证码
        alert('您的验证码为：' + storedCodeData.code + "。该验证码一分钟内有效。");
      } else {
        // 生成新的验证码
        var newCode = generateRandomCode();
        var timestamp = Date.now();

        // 存储新的验证码及时间戳
        storedData[mobile_countrry_code + phoneNumber] = {
          code: newCode,
          timestamp: timestamp
        };
        localStorage.setItem('verificationCodes', JSON.stringify(storedData));

        // 弹窗显示新的验证码
        alert('您的验证码为：' + newCode + "。该验证码一分钟内有效。");
      }
    } else {
      alert('请输入手机号');
    }
  }

  function withinTimeLimit(previousTimestamp, limitSeconds) {
    // 判断时间是否在限制范围内
    return (Date.now() - previousTimestamp) / 1000 <= limitSeconds;
  }

  // 验证码获取
  function generateRandomCode() {
    // 生成6位随机数
    return Math.floor(100000 + Math.random() * 900000);
  }

  // 添加点击事件监听器
  verifyGet.addEventListener('click', function (event) {
    console.log("验证码获取");
    event.preventDefault(); // 阻止默认的链接点击行为
    generateOrRetrieveCode();
  });
  // 在函数外部初始化 accountData
  var accountData = JSON.parse(localStorage.getItem('Accounts')) || {};
	
  // 验证码校验的函数
  function verifyCode() {
    var storedData = JSON.parse(localStorage.getItem('verificationCodes')) || {};
    // 获取输入框内容
    var phoneNumber = phoneInput.value.trim();
    // 获取区号信息
    // 获取元素
    var selectedPhoneCodeSpan = document.getElementById('selectedPhoneCode');
    // 获取文字内容
    var mobile_countrry_code = selectedPhoneCodeSpan.textContent || selectedPhoneCodeSpan.innerText;
    var enteredCode = document.getElementById('verify_code').value.trim();
    var checkBackgroundColor = window.getComputedStyle(document.getElementById('check')).getPropertyValue('background-color');
	var password = document.getElementById('password').value.trim();
	var password_check = document.getElementById('password-check').value.trim();
    var registerBtn = document.getElementById('register_btn');

    if (phoneNumber != '' && enteredCode != '' && password != '' && password_check != '' && checkBackgroundColor != 'rgba(0, 0, 0, 0)') {
      var storedCodeData = storedData[mobile_countrry_code + phoneNumber];
	  // 账号重复检验
	  var accountKey = String(mobile_countrry_code + phoneNumber);
	  if(accountKey in accountData){
		  alert('账号已存在，请勿重复注册！');
		  return;
	  }
		
      if (storedCodeData) {
        if (storedCodeData.code == enteredCode && withinTimeLimit(storedCodeData.timestamp, 60)) {
          // 密码检验
		  if (password==password_check){
			accountData[mobile_countrry_code+phoneNumber] = {
				password:password
			}
			alert('恭喜你注册成功！');
		  }
		  else{
		    alert('两次密码输入不一致');
		  }
        } else if (!withinTimeLimit(storedCodeData.timestamp, 60)) {
          alert('验证码超时已过期');
        } else {
          alert('验证码错误');
        }
      } else {
        alert('请先获取验证码');
      }
    } else {
      alert('请确保手机号、验证码和同意条款均填写正确');
    }
  }

  // 添加点击事件监听器
  registerBtnAnchor.addEventListener('click', function () {
    console.log("验证码验证");
    verifyCode();
  });

  // 初始化选项
  updatePhoneCodeOptions(phoneCodeOptionsElement);

  // 调用获取用户位置并执行后续操作的函数
  fetchUserLocation();

  // IP 地址获取
  // getIpAndAddressSohu();

});
