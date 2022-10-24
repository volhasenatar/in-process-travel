/*burger menu*/
const btnMenu = document.querySelector('.menu-btn')
const popup = document.querySelector('.popup')
const menu = document.querySelector('#menu').cloneNode(1);
const body = document.body

btnMenu.addEventListener('click', nambHundler)

function  nambHundler(e){
    e.preventDefault()
    btnMenu.classList.toggle('menu-btn_active')
    popup.classList.toggle('open')
    body.classList.toggle('noscroll')
    renderPopup()
}

function renderPopup() {
    popup.appendChild(menu)
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
    popup.classList.remove('open');
    btnMenu.classList.remove('menu-btn_active');
    body.classList.remove('noscroll');
}