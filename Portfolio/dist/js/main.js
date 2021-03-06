// Select DOM items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuBranding = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");

isMenuOpened = false;

menuBtn.addEventListener("click", ToggleMenu);

function ToggleMenu(){

    if (isMenuOpened){
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuBranding.classList.remove('show');
        menuNav.classList.remove('show');

        navItems.forEach(element => {
            element.classList.remove('show');
        });
        isMenuOpened = false;
    }
    else{

        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuBranding.classList.add('show');
        menuNav.classList.add('show');

        navItems.forEach(element => {
            element.classList.add('show');
        });
        isMenuOpened = true;
    }
}


