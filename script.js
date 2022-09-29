let show = true

const menuSection = document.querySelector('.menu')
const menuCelular = menuSection.querySelector('.menuCelular')

menuCelular.addEventListener('click', () => {
  menuSection.classList.toggle("on", show)
  show = !show
});