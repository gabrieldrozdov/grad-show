// Fetch JSON and pick random images
let creditsJSON;
fetch('credits.json')
	.then((response) => response.json())
	.then((json) => {
		creditsJSON = json;
		generateImages();
		populateDepartments();
	})

function generateImages() {
	let images = [];
	for (let i=0; i<4; i++) {

		// 2023 photos
		let keys = Object.keys(creditsJSON);
		let randomImage = creditsJSON[Math.floor(Math.random()*keys.length)]['img'];
		images.push(randomImage);

		// Totally random images
		// images.push(`img${Math.floor(Math.random()*146)}.jpg`);
	}
	
	const headerGenart = document.querySelector('.gs24-header-genart');
	let headerGenartTemp = '';
	let totalDivisions = Math.round(Math.random()*8+2);
	for (let col=0; col<totalDivisions; col++) {
		// Set random number of rows for col
		let rows = Math.round(Math.random()*8+2);
		headerGenartTemp += `<div class="gs24-header-genart-col">`;
	
		// Generate rows in column
		for (let row=0; row<rows; row++) {
	
			// Generate slices in rowumn
			let slices = Math.round(Math.random()*8+2);
			let slicesTemp = '';
			const randomImage = images[Math.floor(Math.random()*images.length)];
			for (let slice=0; slice<slices; slice++) {
				// Totally random images
				// slicesTemp += `<div class="gs24-header-genart-slice" style="background-image:url('random-images/${randomImage}'); animation: background-shift 600s -${Math.random()*10}s infinite linear;"></div>`;

				// 2023 photos
				slicesTemp += `<div class="gs24-header-genart-slice" style="background-image:url('2023-images/${randomImage}'); animation: background-shift 600s -${Math.random()*10}s infinite linear;"></div>`;
			}
	
			// Scale in animation
			let animation = `title-in-x 1s ${Math.random()*.5}s forwards cubic-bezier(0.16, 1, 0.3, 1)`;
			if (Math.random() < .5) {
				animation = `title-in-y 1s ${Math.random()*.5}s forwards cubic-bezier(0.16, 1, 0.3, 1)`;
			}
			let animationOrigin = '';
			let randomSeed = Math.random();
			if (randomSeed < .25) {
				animationOrigin = `top left`;
			} else if (randomSeed < .5) {
				animationOrigin = `top right`;
			} else if (randomSeed < .75) {
				animationOrigin = `bottom left`;
			} else {
				animationOrigin = `bottom right`;
			}

			headerGenartTemp += `
				<div class="gs24-header-genart-row" style="animation: ${animation}; transform-origin: ${animationOrigin}">
					<div class="gs24-header-genart-slices">
						${slicesTemp}
					</div>
				</div>
			`;
		}
		headerGenartTemp += `</div>`;
	}
	headerGenart.innerHTML += headerGenartTemp;
}

// Select a random header image to feature
let activeHeaderImage;
let headerLoop;
function headerFeature() {
	const headerImages = document.querySelectorAll('.gs24-header-genart-slice');
	const headerCredit = document.querySelector('.gs24-header-credit');
	activeHeaderImage = headerImages[Math.floor(Math.random()*headerImages.length)];
	activeHeaderImage.dataset.active = 1;
	activeHeaderImage.parentElement.parentElement.dataset.active = 1;
	activeHeaderImage.parentElement.parentElement.parentElement.dataset.active = 1;
	const prevImage = activeHeaderImage;
	headerCredit.style.transform = "translateX(0%)";
	setTimeout(() => {
		prevImage.dataset.active = 0;
		prevImage.parentElement.parentElement.dataset.active = 0;
		prevImage.parentElement.parentElement.parentElement.dataset.active = 0;
		headerCredit.style.transform = "translateX(100%)";
	}, 4500)
	headerLoop = setTimeout(headerFeature, 5500);
}
headerLoop = setTimeout(headerFeature, 2000);

// Initialize title style settings
let titleColumnLetters = ["", "", "", ""];
let index = 0;
for (let titleColumn of document.querySelectorAll('.gs24-title-column')) {
	const letters = titleColumn.querySelectorAll('div');
	titleColumnLetters[index] = letters[Math.floor(Math.random()*letters.length)];
	index++;
}
for (let div of document.querySelectorAll('.gs24-title-column div')) {
	if (Math.random() < .5) {
		div.style.animation = `title-in-x 1s ${Math.random()*.5}s forwards cubic-bezier(0.16, 1, 0.3, 1)`;
	} else {
		div.style.animation = `title-in-y 1s ${Math.random()*.5}s forwards cubic-bezier(0.16, 1, 0.3, 1)`;
	}
	let randomSeed = Math.random();
	if (randomSeed < .25) {
		div.style.transformOrigin = `top left`;
	} else if (randomSeed < .5) {
		div.style.transformOrigin = `top right`;
	} else if (randomSeed < .75) {
		div.style.transformOrigin = `bottom left`;
	} else {
		div.style.transformOrigin = `bottom right`;
	}
}
for (let span of document.querySelectorAll('.gs24-title-column span')) {
	if (span.parentElement.parentElement.classList.contains('gs24-title-column-alt')) {
		span.style.backgroundColor = `rgba(255,255,255,${(Math.random()*.1).toFixed(2)})`;
	} else {
		span.style.backgroundColor = `rgba(0,0,0,${(Math.random()*.1).toFixed(2)})`;
	}
}

// Animate within single column of title
function animateColumn(index) {
	const letters = document.querySelectorAll(`#title-column${index} div`);
	let newTitleLetter = letters[Math.floor(Math.random()*letters.length)];
	if (newTitleLetter == titleColumnLetters[index]) {
		animateColumn(index);
		return
	}
	titleColumnLetters[index].style.flexGrow = 1;
	titleColumnLetters[index] = newTitleLetter;
	titleColumnLetters[index].style.flexGrow = Math.random()*5+1;
	const span = titleColumnLetters[index].querySelector('span');
	if (span.parentElement.parentElement.classList.contains('gs24-title-column-alt')) {
		span.style.backgroundColor = `rgba(255,255,255,${(Math.random()*.1).toFixed(2)})`;
	} else {
		span.style.backgroundColor = `rgba(0,0,0,${(Math.random()*.1).toFixed(2)})`;
	}
	span.style.fontVariationSettings = `"wght" ${Math.round(Math.random()*800+100)}, "SRFF" 0`;
	setTimeout(() => {animateColumn(index)}, Math.random()*3000+1000)
}

// Animate full column of title
let randomColumn = document.querySelector(`#title-column${Math.floor(Math.random()*4)}`);
function animateTitle() {
	let newColumn = document.querySelector(`#title-column${Math.floor(Math.random()*4)}`);
	if (newColumn == randomColumn) {
		animateTitle();
		return
	}
	randomColumn.style.flexGrow = 1;
	randomColumn = newColumn;
	randomColumn.style.flexGrow = Math.random()*2+1;
	setTimeout(animateTitle, Math.random()*1000+1000)
}

// Trigger title animations
setTimeout(() => {
	animateColumn(0);
}, 2000 + Math.random()*3000)
setTimeout(() => {
	animateColumn(1);
}, 2000 + Math.random()*3000)
setTimeout(() => {
	animateColumn(2);
}, 2000 + Math.random()*3000)
setTimeout(() => {
	animateColumn(3);
}, 2000 + Math.random()*3000)
setTimeout(() => {
	animateTitle();
}, 3000 + Math.random()*2000)

// Toggle fullscreen genart
function openGenart() {
	clearTimeout(headerLoop);
	const container = document.querySelector('.gs24-home-container');
	container.dataset.genart = 1;
}
function closeGenart() {
	const container = document.querySelector('.gs24-home-container');
	container.dataset.genart = 0;
	headerLoop = setTimeout(headerFeature, 2000);
}
function refreshArt() {
	const headerGenart = document.querySelector('.gs24-header-genart');
	headerGenart.innerHTML = `
		<div class="gs24-header-credit">
			<p class="gs24-header-credit-name">Firstname Lastname</p>
			<p class="gs24-header-credit-title"><span>Some artwork title,</span> 2024</p>
			<p class="gs24-header-credit-dept">Architecture Department</p>
			<a class="gs24-header-credit-link" href="#">READ MORE</a>
		</div>
	`;
	generateImages();
}

// Populate department link animations
function populateDepartments() {
	for (let tocLink of document.querySelectorAll('.gs24-toc-link')) {
		let images = [];
		for (let i=0; i<4; i++) {
			// 2023 photos
			let keys = Object.keys(creditsJSON);
			let randomImage = creditsJSON[Math.floor(Math.random()*keys.length)]['img'];
			images.push(randomImage);
		}
	
		let tocLinkTemp = "";
		let cols = Math.round(Math.random()*4+2);
		const randomImage = images[Math.floor(Math.random()*images.length)];
		for (let i=0; i<cols; i++) {
			tocLinkTemp += `<div class="gs24-toc-link-genart-slice" style="background-image:url('2023-images/${randomImage}'); animation: background-shift 600s -${Math.random()*10}s infinite linear;"></div>`;
		}
		tocLink.innerHTML += `
			<div class="gs24-toc-link-genart">
				${tocLinkTemp}
			</div>
		`;
	}
}

// Header parallax animation (disabled on Safari)
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));
if (!isSafari) {
	window.addEventListener('scroll', (e) => {parallaxHeader(e)});
	function parallaxHeader(e) {
		const header = document.querySelector('.gs24-header');
		header.style.transform = `translateY(-${window.scrollY/2}px)`;
	}
}

// Fade in navbar
window.addEventListener('scroll', navFade);
function navFade() {
	const header = document.querySelector('.gs24-header');
	header.style.opacity = 1-window.scrollY/window.innerHeight;
	const navArrow = document.querySelector('.gs24-nav-arrow');
	navArrow.style.opacity = 1-window.scrollY/(window.innerHeight/2);
	const navTitle = document.querySelector('.gs24-nav-title div');
	navTitle.style.opacity = window.scrollY/(window.innerHeight/2);
}

// Nav title
for (let span of document.querySelectorAll('.gs24-nav-title span')) {
	let spanTemp = '';
	if (span.classList.contains('gs24-nav-title-white')) {
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
	for (let span of document.querySelectorAll('.gs24-nav-title span span')) {
		if (span.parentElement.classList.contains('gs24-nav-title-white')) {
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