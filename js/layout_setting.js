// bootstrap attribute
function addBootstrapClass() {
	$('img').addClass('img-responsive');
}

// Function to set font size based on screen width
function setFontSize() {
  var screenWidth = window.innerWidth;

  // Adjust the font size for different screen widths
  if (screenWidth < 756) { // Small screens
    document.querySelectorAll('h3, .bio_li_r span').forEach(function (element) {
      element.style.fontSize = '10px'; // Adjust the font size for small screens
    });

    document.querySelectorAll('p, li').forEach(function (element) {
      element.style.fontSize = '6px'; // Adjust the font size for small screens
    });
    document.querySelectorAll('a').forEach(function (element) {
      element.style.fontSize = '8px'; // Adjust the font size for small screens
    });
    document.querySelectorAll('button').forEach(function (element) {
      element.style.fontSize = '6px'; // Adjust the font size for small screens
    });
    document.querySelectorAll('.footer_t_l p, .footer_t_r li, .footer_b p').forEach(function (element) {
      element.style.fontSize = '4px'; // Adjust the font size for small screens
    });
	document.querySelectorAll('.bio_li_r p').forEach(function (element) {
      element.style.fontSize = '6px'; // Adjust the font size for small screens
    });
	document.querySelectorAll('.shop_center p').forEach(function (element) {
      element.style.fontSize = '6px'; // Adjust the font size for small screens
    });
	// Page button -- smaller font size
	document.querySelectorAll('.fy li').forEach(function (element) {
      element.style.fontSize = '6px'; // Adjust the font size for small screens
    });
  } else if (screenWidth < 992) { // Medium screens
    document.querySelectorAll('h3, .bio_li_r span').forEach(function (element) {
      element.style.fontSize = '18px'; // Adjust the font size for medium screens
    });

    document.querySelectorAll('p, li').forEach(function (element) {
      element.style.fontSize = '14px'; // Adjust the font size for medium screens
    });
    document.querySelectorAll('a').forEach(function (element) {
      element.style.fontSize = '16px'; // Adjust the font size for small screens
    });
    document.querySelectorAll('button').forEach(function (element) {
      element.style.fontSize = '12px'; // Adjust the font size for small screens
    });
    document.querySelectorAll('.footer_t_l p, .footer_t_r li, .footer_b p').forEach(function (element) {
      element.style.fontSize = '10px'; // Adjust the font size for small screens
    });
	document.querySelectorAll('.bio_li_r p').forEach(function (element) {
      element.style.fontSize = '12px'; // Adjust the font size for small screens
    });
	document.querySelectorAll('.shop_center p').forEach(function (element) {
      element.style.fontSize = '12px'; // Adjust the font size for small screens
    });
	// Page button -- smaller font size
	document.querySelectorAll('.fy li').forEach(function (element) {
      element.style.fontSize = '10px'; // Adjust the font size for small screens
    });
  } else { // Large screens
    document.querySelectorAll('h3, .bio_li_r span').forEach(function (element) {
      element.style.fontSize = '28px'; // Adjust the font size for large screens
    });

    document.querySelectorAll('p, li').forEach(function (element) {
      element.style.fontSize = '24px'; // Adjust the font size for large screens
    });
    document.querySelectorAll('a, button').forEach(function (element) {
      element.style.fontSize = '18px'; // Adjust the font size for small screens
    });
    document.querySelectorAll('.footer_t_l p, .footer_t_r li, .footer_b p').forEach(function (element) {
      element.style.fontSize = '18px'; // Adjust the font size for small screens
    });
	document.querySelectorAll('.bio_li_r p').forEach(function (element) {
      element.style.fontSize = '18px'; // Adjust the font size for small screens
    });
	document.querySelectorAll('.shop_center p').forEach(function (element) {
      element.style.fontSize = '18px'; // Adjust the font size for small screens
    });
	// Page button -- smaller font size
	document.querySelectorAll('.fy li').forEach(function (element) {
      element.style.fontSize = '18px'; // Adjust the font size for small screens
    });
  }
}

window.addEventListener("load", function () {
  setFontSize();
  addBootstrapClass();
});

window.addEventListener("resize", function () {
  setFontSize();
  addBootstrapClass();
});
