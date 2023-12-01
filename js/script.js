function openNav() {
  document.getElementById("myNav").classList.toggle("menu_width")
  document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style")
}

$(document).ready(function () {

  // Aos Js
  AOS.init({
    offset: 120,
    duration: 1000,
  });

});
