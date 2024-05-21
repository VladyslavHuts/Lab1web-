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
    const emailInput = document.querySelector('input[type="email"]');
    const phoneInput = document.querySelector('input[type="tel"]');

    phoneInput.addEventListener('input', function(event) {
        event.target.value = event.target.value.replace(/\D/g, '');
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const loginValue = loginForm.querySelector('input[type="text"]').value.trim();
        const passwordValue = loginForm.querySelector('input[type="password"]').value.trim();
        const emailValue = emailInput.value.trim();
        const phoneValue = phoneInput.value.trim();

        if (loginValue === '') {
            alert('Будь ласка, введіть свій логін.');
            return;
        }
        if (passwordValue === '') {
            alert('Будь ласка, введіть свій пароль.');
            return;
        }
        if (emailValue === '') {
            alert('Будь ласка, введіть свою електронну адресу.');
            return;
        }
        if (phoneValue === '') {
            alert('Будь ласка, введіть свій номер телефону.');
            return;
        }

        if (!isValidEmail(emailValue)) {
            alert('Будь ласка, введіть дійсну адресу електронної пошти.');
            return;
        }

        alert('Форма успішно надіслана!');

        loginForm.reset();
    });

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
});



