// Subpage nav title
for (let span of document.querySelectorAll('.gs24-subpage-nav-title span')) {
	let spanTemp = '';
	if (span.classList.contains('gs24-subpage-nav-title-white')) {
		for (let letter of span.innerText) {
			spanTemp += `<span style="background-color: rgba(0,0,0,${(Math.random()*.1).toFixed(2)})">${letter}</span>`;
		}
	} else {
		for (let letter of span.innerText) {
			spanTemp += `<span style="background-color: rgba(255,255,255,${(Math.random()*.1).toFixed(2)})">${letter}</span>`;
		}
	}
	span.innerHTML = spanTemp;
}
function animateTitle() {
	for (let span of document.querySelectorAll('.gs24-subpage-nav-title span span')) {
		if (span.parentElement.classList.contains('gs24-subpage-nav-title-white')) {
			span.style.backgroundColor = `rgba(0,0,0,${(Math.random()*.1).toFixed(2)})`;
		} else {
			span.style.backgroundColor = `rgba(255,255,255,${(Math.random()*.1).toFixed(2)})`;
		}
		span.style.fontVariationSettings = `"wght" ${Math.round(Math.random()*800+100)}, "SRFF" 0`;
	}
}
setInterval(animateTitle, 1000);

// Nav toggles
let activeNav = '';
function toggleMenu(menuName) {
	const menus = document.querySelector('.gs24-subpage-menus');
	for (let toggle of document.querySelectorAll('.gs24-subpage-nav-link')) {
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
	const menus = document.querySelector('.gs24-subpage-menus');
	menus.dataset.menu = "none";
	activeNav = 'none';
	for (let toggle of document.querySelectorAll('.gs24-subpage-nav-link')) {
		toggle.dataset.active = 0;
	}
}

// Fetch JSON and pick random images
let creditsJSON;
fetch('../credits.json')
	.then((response) => response.json())
	.then((json) => {
		creditsJSON = json;
		populateStudents();
	})

// Populate student link animations
function populateStudents() {
	for (let studentLink of document.querySelectorAll('.gs24-subpage-student-genart')) {
		let images = [];
		for (let i=0; i<4; i++) {
			// 2023 photos
			let keys = Object.keys(creditsJSON);
			let randomImage = creditsJSON[Math.floor(Math.random()*keys.length)]['img'];
			images.push(randomImage);
		}
	
		let studentTemp = "";
		let cols = Math.round(Math.random()*4+2);
		const randomImage = images[Math.floor(Math.random()*images.length)];
		for (let i=0; i<cols; i++) {
			studentTemp += `<div class="gs24-subpage-student-genart-slice" style="background-image:url('../2023-images/${randomImage}'); animation: background-shift 600s -${Math.random()*10}s infinite linear;"></div>`;
		}
		studentLink.innerHTML = studentTemp;
	}
}
function animateStudentLinks() {
	for (let studentLink of document.querySelectorAll('.gs24-subpage-student-genart')) {
		let slices = studentLink.querySelectorAll('.gs24-subpage-student-genart-slice');
		for (let slice of slices) {
			slice.dataset.active = 0;
		}
		let randomSlice = slices[Math.floor(Math.random()*slices.length)];
		randomSlice.dataset.active = 1;
	}
	setTimeout(animateStudentLinks, 4000);
}
setTimeout(animateStudentLinks, 1000);