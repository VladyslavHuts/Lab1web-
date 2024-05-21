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

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login__form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const loginValue = loginForm.querySelector('input[type="text"]').value.trim();
        const passwordValue = loginForm.querySelector('input[type="password"]').value.trim();

        if (loginValue === '') {
            alert('Будь ласка, введіть свій логін.');
            return;
        }
        if (passwordValue === '') {
            alert('Будь ласка, введіть свій пароль.');
            return;
        }

        alert('Форма успішно надіслана!');

        loginForm.reset();
    });
});

