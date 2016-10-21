var menuBtn = document.getElementById('menu');

var navSelector = document.querySelector("nav");




menuBtn.addEventListener('click', function() {
  navSelector.classList.toggle("show");
  menuBtn.classList.toggle("fade");

});
