const buttonMobileMenu = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');

buttonMobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});