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

function openTab(tabName) {
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";

    // Встановлення активної кнопки
    tabLinks = document.getElementsByClassName("tabs__btn");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }
    document.getElementById(tabName + "Btn").classList.add("active");
}

