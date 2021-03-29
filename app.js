const menu =document.querySelector("#mobile-menu");
const nav__links = document.querySelector(".nav__links--container");
const body = document.querySelector('body')

menu.addEventListener("click", function(){
  nav__links.classList.toggle('active');
  menu.classList.toggle('is-active');



});

nav__links.addEventListener("click", function(){


	nav__links.classList.toggle('active');
	  menu.classList.toggle('is-active');
});

