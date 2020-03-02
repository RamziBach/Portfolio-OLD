const hamburger = document.querySelectorAll('.hamburger');
const mobileNav = document.querySelector('.hamburger-container');
const clear = document.querySelector('.clear');
const containerSticky = document.querySelector('.sticky-header');
const closeNav = document.querySelectorAll('.hamburger-li');

hamburger[0].addEventListener('click', () => mobileNav.style.display = 'block');
hamburger[1].addEventListener('click', () => mobileNav.style.display = 'block');
clear.addEventListener('click', () => mobileNav.style.display = 'none');
closeNav[0].addEventListener('click', () => mobileNav.style.display = 'none');
closeNav[1].addEventListener('click', () => mobileNav.style.display = 'none');
closeNav[2].addEventListener('click', () => mobileNav.style.display = 'none');

const scrollFunction = () => {
 	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		containerSticky.style.display = "block";
  	} else {
		containerSticky.style.display = "none";
  	}
};

window.onscroll = () => scrollFunction();