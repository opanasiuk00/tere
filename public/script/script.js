window.addEventListener('DOMContentLoaded', function () {
    //humburger menu
    const buttonOpenMenu = document.querySelector('.header__button-open'),
        buttonCloseMenu = document.querySelector('.header__button-close'),
        headerMenu = document.querySelector('.header__menu');

    buttonOpenMenu.addEventListener('click', function () {
        headerMenu.classList.add('header__menu--active');
    });
    buttonCloseMenu.addEventListener('click', function () {
        headerMenu.classList.remove('header__menu--active');
    });

    //slider

    const onClickShowSlides = document.querySelectorAll('.how__item'),
        slides = document.querySelectorAll('.how__slide'),
        dotsParent = document.querySelector('.how__dots'),
        dots = [];

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('div');
        dot.classList.add('how__dot');
        dotsParent.append(dot);
        dots.push(dot);
    }

    dots[0].classList.add('how__dot--active')
    slides[0].classList.add('how__slide--active')

    onClickShowSlides.forEach((elem, i) => elem.addEventListener('click', function () {
        changeSlide();
        slides[i].classList.add('how__slide--active');
        dots[i].classList.add('how__dot--active');
    }));
    dots.forEach((elem, i) => elem.addEventListener('click', function () {
        changeSlide();
        slides[i].classList.add('how__slide--active');
        dots[i].classList.add('how__dot--active');
    }));

    function changeSlide() {
        slides.forEach(elem => {
            elem.classList.remove('how__slide--active');
        })
        dots.forEach(elem => {
            elem.classList.remove('how__dot--active');
        })
    }
});