// JavaScript pour le menu hamburger
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector('.menu-toggle').addEventListener('click', function() {
      document.querySelector('.nav-links').classList.toggle('show-menu');
  });
});
