var menu = document.getElementById('menu');
var allSectionsSelector = document.querySelectorAll("section");
var navSelector = document.querySelector("nav");
menu.addEventListener('mouseover', function() {
    for (var i = 0; i < allSectionsSelector.length; i++) {
        allSectionsSelector[i].classList.toggle('show');
    }

});


menu.addEventListener('mouseout', function() {
    for (var i = 0; i < allSectionsSelector.length; i++) {
        allSectionsSelector[i].classList.toggle('show');
    }
});
