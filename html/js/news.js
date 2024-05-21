document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu__btn');
    const menuClose = document.querySelector('.menu__close');
    const menuList = document.querySelector('.menu__list');

    menuList.classList.remove('menu__list-open');

    menuBtn.addEventListener('click', function() {
        menuList.classList.toggle('menu__list-open');
    });

    menuClose.addEventListener('click', function() {
        menuList.classList.remove('menu__list-open');
    });
});
