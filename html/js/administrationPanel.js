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

document.addEventListener("DOMContentLoaded", function() {
    var productsBtn = document.querySelector(".administration__list .administration__item:nth-child(1) .administration__btn");
    var usersBtn = document.querySelector(".administration__list .administration__item:nth-child(2) .administration__btn");
    var supportBtn = document.querySelector(".administration__list .administration__item:nth-child(3) .administration__btn");

    var productsSection = document.querySelector(".administration__products");
    var usersSection = document.querySelector(".administration__users");
    var supportSection = document.querySelector(".administration__support");

    productsBtn.addEventListener("click", function() {
        productsSection.style.display = "block";
        usersSection.style.display = "none";
        supportSection.style.display = "none";
    });

    usersBtn.addEventListener("click", function() {
        productsSection.style.display = "none";
        usersSection.style.display = "block";
        supportSection.style.display = "none";
    });

    supportBtn.addEventListener("click", function() {
        productsSection.style.display = "none";
        usersSection.style.display = "none";
        supportSection.style.display = "block";
    });
});

function toggleContent(index) {

    var contents = document.querySelectorAll('.administration__product');
    contents.forEach(function(content) {
        content.style.display = 'none';
    });

    var targetContent = document.getElementById('productContent' + index);
    if (targetContent) {
        targetContent.style.display = 'block';
    }
}


var modal = document.getElementById("myModal");
var editButtons = document.querySelectorAll(".species__btn-edit");

editButtons.forEach(function(button) {
    button.onclick = function() {
        modal.style.display = "block";
    }
});

window.onload = function() {
    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        modal.style.display = "none";
    }

    modal.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
};


var modalEdit = document.getElementById("myModalEdit");
var btnsEdit = document.querySelectorAll(".administration__users-btn");
var spanEdit = document.querySelector(".close1");

btnsEdit.forEach(function(btn) {
    btn.onclick = function() {
        modalEdit.style.display = "block";
    }
});

spanEdit.onclick = function() {
    modalEdit.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modalEdit) {
        modalEdit.style.display = "none";
    }
}


