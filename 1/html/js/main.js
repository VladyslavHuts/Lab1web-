const meniBtn = document.querySelector('.menu__btn')
const meniClose = document.querySelector('.menu__close')
const meniList = document.querySelector('.menu__list')

meniBtn.addEventListener('click', ()=>{
    meniList.classList.add('menu__list-open');
})

meniClose.addEventListener('click', ()=>{
    meniList.classList.remove('menu__list-open');
})
