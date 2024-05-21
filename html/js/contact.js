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
    const form = document.querySelector('.contact__form');
    const nameInput = document.querySelector('.form__input[type="text"]');
    const emailInput = document.querySelector('.form__input[type="email"]');
    const messageTextarea = document.querySelector('.form__textarea');
    const submitBtn = document.querySelector('.form__btn');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (nameInput.value.trim() === '') {
            alert('Please enter your name.');
            return;
        }

        if (emailInput.value.trim() === '') {
            alert('Please enter your email.');
            return;
        } else if (!isValidEmail(emailInput.value.trim())) {
            alert('Please enter a valid email address.');
            return;
        }

        if (messageTextarea.value.trim() === '') {
            alert('Please enter your message.');
            return;
        }

        alert('Form submitted successfully!');

        form.reset();
    });

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
});

