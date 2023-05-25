const btnMobile = document.querySelector('.menu-mobile-icon');
const menu = document.querySelector('.menu-mobile');
const scrollBar = document.getElementById('cabecalho');

function toggleMenu(){
    btnMobile.classList.toggle('active');
    menu.classList.toggle('active');
}
btnMobile.addEventListener('click', toggleMenu);

document.querySelectorAll('.link').forEach(n => n.addEventListener("click", () =>{
    btnMobile.classList.remove('active');
    menu.classList.remove('active');
 }))

function edgesScroll(){
    scrollBar.classList.toggle('ativo', scrollY > 0);
}
window.addEventListener('scroll', edgesScroll);
