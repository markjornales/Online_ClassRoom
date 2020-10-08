const buttonToggled = document.querySelector('.button-nav');
buttonToggled.addEventListener('click',()=>{
    document.querySelector('.content-menu').classList.toggle('btnOpen');
    document.querySelector('body').classList.toggle('removeScroll');
});