const menuCelular = document.getElementsByClassName('menu');

function menuzin() {
    const nav = document.getElementsByClassName('menu');
    nav.classList.toggle('on')
}


menuCelular.addEventListener('click', menuzin);