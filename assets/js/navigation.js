const toggleMenu = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

toggleMenu.addEventListener('click', function(){
  nav.classList.toggle('slide');
});