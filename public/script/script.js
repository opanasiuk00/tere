window.addEventListener('DOMContentLoaded', function () {
    const buttonOpenMenu = document.querySelector('.header__button-open'),
        buttonCloseMenu = document.querySelector('.header__button-close'),
        headerMenu = document.querySelector('.header__menu');

    buttonOpenMenu.addEventListener('click', function () {
        headerMenu.classList.add('header__menu--active');
    });
    buttonCloseMenu.addEventListener('click', function () {
        headerMenu.classList.remove('header__menu--active');
    });
});