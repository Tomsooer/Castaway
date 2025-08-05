const menuIcon = document.querySelector('.menu-icon');
const header = document.querySelector('header');
const body = document.querySelector('body');

console.log("menuIcon: ", menuIcon);
console.log("header: ", header);
console.log("body: ", body);

menuIcon.addEventListener('click', () => {
	menuIcon.classList.toggle('menu-icon--active');
	header.classList.toggle('header--mobile');
	body.classList.toggle('no-scroll');
});