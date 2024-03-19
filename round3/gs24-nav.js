// Nav title
function animateNavTitle() {
	let temp = '';
	let title = document.querySelector('.gs24-nav-title h1');
	for (let letter of title.innerText) {
		temp += `<span style="transition: font-variation-settings ${(Math.random()*1+.2).toFixed(2)}s">${letter}</span>`;
	}
	title.innerHTML = temp;
}
animateNavTitle();

// Nav toggles
let activeNav = '';
function toggleMenu(menuName) {
	const menus = document.querySelector('.gs24-menus');
	for (let toggle of document.querySelectorAll('.gs24-nav-link')) {
		toggle.dataset.active = 0;
	}
	if (activeNav == menuName) {
		menus.dataset.menu = "none";
		activeNav = 'none';
	} else {
		activeNav = menuName;
		const toggle = document.querySelector(`#gs24-toggle-${menuName}`);
		toggle.dataset.active = 1;
		menus.dataset.menu = menuName;
	}
}
function closeMenu() {
	const menus = document.querySelector('.gs24-menus');
	menus.dataset.menu = "none";
	activeNav = 'none';
	for (let toggle of document.querySelectorAll('.gs24-nav-link')) {
		toggle.dataset.active = 0;
	}
}