let show = true

const menuSection = document.querySelector('.menu')
const menuCelular = menuSection.querySelector('.menuCelular')

menuCelular.addEventListener('click', () => {
  menuSection.classList.toggle("on", show)
  show = !show
});

/* let showFooter = true

const menuzin = document.querySelector('.menu')
const footer = menuzin.querySelector('.footer-container')

footer.addEventListener('click', () => {
  menuzin.style.display('none', showFooter)
  showFooter = !showFooter
}); */


/* function hideFooter() {
    var clickfooter = document.querySelector(".menu")
    var footer = clickfooter.querySelector(".footer-container")
    clickfooter.addEventListener("click", footer)
    footer.style.display('none', footer)

}
console.log(hideFooter) */