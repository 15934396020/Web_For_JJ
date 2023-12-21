document.addEventListener("DOMContentLoaded", function() {
  var loaderContainer = document.getElementById("loader-container");

  window.addEventListener("load", function() {
    var load_timer = setInterval(function() {
      loaderContainer.style.display = 'none';
    }, 2000);
  });
});
