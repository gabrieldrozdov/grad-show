// Fetch JSON and pick random images
let creditsJSON;
let images = [];
fetch('credits.json')
	.then((response) => response.json())
	.then((json) => {
		creditsJSON = json;
		setImages();
		generateImages();
		generateTitleBackground();
		generateTOC();
		setTimeout(homeFeature, 500);
	})

// Set images for all genart
function setImages() {
	images = [];
	for (let i=0; i<4; i++) {
		let keys = Object.keys(creditsJSON);
		let randomImage = creditsJSON[Math.floor(Math.random()*keys.length)]['img'];
		images.push(randomImage);
	}
}

// Generate homepage genart
function generateImages() {	
	const homeGenart = document.querySelector('.gs24-home-genart');
	let homeGenartTemp = '';
	let totalDivisions = Math.round(Math.random()*6+4);
	for (let col=0; col<totalDivisions; col++) {
		// Set random number of rows for col
		let rows = Math.round(Math.random()*12+4);
		homeGenartTemp += `<div class="gs24-home-genart-col">`;
	
		// Generate rows in column
		for (let row=0; row<rows; row++) {
	
			// Generate slices in row
			let slices = Math.round(Math.random()*12+4);
			let slicesTemp = '';
			const randomImage = images[Math.floor(Math.random()*images.length)];

			for (let slice=0; slice<slices; slice++) {
				slicesTemp += `
					<div class="gs24-home-genart-slice" style="background-image:url('2023-images/${randomImage}'); animation: background-shift 600s -${Math.random()*10}s infinite linear;">
						<div class="gs24-home-genart-slice-overlay"></div>
					</div>
				`;
			}

			homeGenartTemp += `
				<div class="gs24-home-genart-row">
					<div class="gs24-home-genart-slices">
						${slicesTemp}
					</div>
				</div>
			`;
		}
		homeGenartTemp += `</div>`;
	}
	homeGenart.innerHTML = homeGenartTemp;

	// Reveal slices
	for (let sliceOverlay of homeGenart.querySelectorAll('.gs24-home-genart-slice-overlay')) {
		setTimeout(() => {
			sliceOverlay.remove();
		}, Math.random()*1000)
	}

	// Add event listeners for interactive mode
	for (let slice of document.querySelectorAll('.gs24-home-genart-slice')) {
		slice.addEventListener('mouseenter', () => {addCredit(slice)});
	}
}

// Add credit to hovered slice
function addCredit(slice) {
	if (mode == 'interactive') {
		// TODO: update credit info
		homeCredit.innerHTML = `
			<a class="gs24-home-credit-name" href="#todo">
				<svg viewBox="0 0 100 100"><path d="M40,0h20v10h10v10h10v10h10v10h10v20h-10v10h-10v10h-10v10h-10v10h-20v-20h10v-10h10v-10H0v-20h60v-10h-10v-10h-10V0Z"/></svg>
				<span>Firstname Lastname</span>
			</a>
			<a class="gs24-home-credit-dept" href="#todo">
				<svg viewBox="0 0 100 100"><path d="M40,0h20v10h10v10h10v10h10v10h10v20h-10v10h-10v10h-10v10h-10v10h-20v-20h10v-10h10v-10H0v-20h60v-10h-10v-10h-10V0Z"/></svg>
				<span>Department Name</span>
			</a>
		`;
		homeCredit.dataset.active = 1;
		slice.appendChild(homeCredit);
	}
}

// Select a random home image to feature
let activeHomeImage, prevImage;
let homeLoop, homeClear;
const homeCredit = document.createElement('div');
homeCredit.classList.add('gs24-home-credit');
function homeFeature() {
	const homeImages = document.querySelectorAll('.gs24-home-genart-slice');
	activeHomeImage = homeImages[Math.floor(Math.random()*homeImages.length)];
	activeHomeImage.dataset.active = 1;
	activeHomeImage.parentElement.parentElement.dataset.active = 1;
	activeHomeImage.parentElement.parentElement.parentElement.dataset.active = 1;

	// TODO: update credit info
	homeCredit.innerHTML = `
		<a class="gs24-home-credit-name" href="#todo">
			<svg viewBox="0 0 100 100"><path d="M40,0h20v10h10v10h10v10h10v10h10v20h-10v10h-10v10h-10v10h-10v10h-20v-20h10v-10h10v-10H0v-20h60v-10h-10v-10h-10V0Z"/></svg>
			<span>Firstname Lastname</span>
		</a>
		<a class="gs24-home-credit-dept" href="#todo">
			<svg viewBox="0 0 100 100"><path d="M40,0h20v10h10v10h10v10h10v10h10v20h-10v10h-10v10h-10v10h-10v10h-20v-20h10v-10h10v-10H0v-20h60v-10h-10v-10h-10V0Z"/></svg>
			<span>Department Name</span>
		</a>
	`;
	homeCredit.dataset.active = 1;
	activeHomeImage.appendChild(homeCredit);

	prevImage = activeHomeImage;
	homeClear = setTimeout(removeCredit, 5500)
	homeLoop = setTimeout(homeFeature, 7000);
}
function removeCredit() {
	homeCredit.dataset.active = 0;
	prevImage.dataset.active = 0;
	prevImage.parentElement.parentElement.dataset.active = 0;
	prevImage.parentElement.parentElement.parentElement.dataset.active = 0;
}
document.querySelector('.gs24-home-genart-container').addEventListener('mouseleave', () => {
	if (mode == 'interactive') {
		removeCredit();
	}
});

// Generate title background
function generateTitleBackground() {
	const homeTitleBackground = document.querySelector('.gs24-home-title-background');
	let homeGenartTemp = '';
	for (let col=0; col<Math.round(200/1.25); col++) {
		homeGenartTemp += `
			<div class="gs24-home-title-background-col" style="background-image: url('2023-images/${images[Math.floor(Math.random()*images.length)]}'); animation: background-shift 600s -${Math.random()*10}s infinite linear;">
				<div class="gs24-home-genart-slice-overlay"></div>
			</div>
		`;
	}
	homeTitleBackground.innerHTML = homeGenartTemp;

	// Reveal slices
	for (let sliceOverlay of homeTitleBackground.querySelectorAll('.gs24-home-genart-slice-overlay')) {
		setTimeout(() => {
			sliceOverlay.remove();
		}, Math.random()*1000)
	}

	// Blend title with background
	const homeTitleBackgroundOverlay = document.querySelector('.gs24-home-title-background-overlay');
	const homeTitleVisible = document.querySelector('.gs24-home-title-visible');
	setTimeout(() => {
		homeTitleVisible.style.opacity = 0;
		homeTitleBackgroundOverlay.style.opacity = 0;
	}, 1500)
}
function regenerateTitleBackground() {
	const homeTitleBackground = document.querySelector('.gs24-home-title-background');
	let homeGenartTemp = '';
	for (let col=0; col<Math.round(200/1.25); col++) {
		homeGenartTemp += `
			<div class="gs24-home-title-background-col" style="background-image: url('2023-images/${images[Math.floor(Math.random()*images.length)]}'); animation: background-shift 600s -${Math.random()*10}s infinite linear;">
			</div>
		`;
	}
	homeTitleBackground.innerHTML = homeGenartTemp;
}

// Title animation
function generateTitle() {
	// Title visible
	const titleVisible = document.querySelector('.gs24-home-title-visible');
	for (let span of titleVisible.querySelectorAll('span')) {
		let spanTemp = '';
		for (let letter of span.innerText) {
			spanTemp += `<span>${letter}</span>`;
		}
		span.innerHTML = spanTemp;
		for (let subSpan of span.querySelectorAll('span')) {
			let delay = Math.random()*500;
			subSpan.style.animationDelay = `${delay}ms`;
			setTimeout(() => {
				subSpan.style.opacity = 1;
			}, delay)
		}
	}

	// Title blended
	const titleBlended = document.querySelector('.gs24-home-title-blended');
	for (let span of titleBlended.querySelectorAll('span')) {
		let spanTemp = '';
		for (let letter of span.innerText) {
			spanTemp += `<span style="animation-duration: ${Math.floor(Math.random()*20+5)}s;">${letter}</span>`;
		}
		span.innerHTML = spanTemp;
	}

	// Fade in page elements
	const nav = document.querySelector('.gs24-nav');
	const headerArrow = document.querySelector('.gs24-home-header-arrow');
	setTimeout(() => {
		nav.dataset.hidden = 0;
		headerArrow.dataset.hidden = 0;
	}, 1500)
}
generateTitle();

// Table of contents
function generateTOC() {
	for (let tocLink of document.querySelectorAll('.gs24-toc-link')) {
		const tocLinkLabel = tocLink.querySelector('.gs24-toc-link-label');
		tocLinkLabel.style.animationDelay = `-${(Math.random()*2).toFixed(2)}s`;
		tocLink.innerHTML += `
			<div class="gs24-toc-background" style="background-image: url('2023-images/${images[Math.floor(Math.random()*images.length)]}'); animation: background-shift 600s -${Math.random()*10}s infinite linear;"></div>
		`;
	}
}
function regenerateTOC() {
	for (let tocLinkBackground of document.querySelectorAll('.gs24-toc-background')) {
		tocLinkBackground.style.backgroundImage = `url('2023-images/${images[Math.floor(Math.random()*images.length)]}')`;
	}
}

// Header parallax
window.addEventListener('scroll', parallaxHeader);
function parallaxHeader() {
	const header = document.querySelector('.gs24-home-header');
	let opacityParallax = 1-(window.scrollY/window.innerHeight)*.8;
	if (opacityParallax >= 0) {
		header.style.opacity = opacityParallax;
	}
}

// Genart controls
let genartFullscreen = false;
function toggleGenart() {
	if (!genartFullscreen) {
		openGenart();
	} else {
		closeGenart();
	}
	genartFullscreen = !genartFullscreen;
}
function openGenart() {
	const genart = document.querySelector('.gs24-home-genart-container');
	genart.dataset.fullscreen = 1;
}
function closeGenart() {
	const genart = document.querySelector('.gs24-home-genart-container');
	genart.dataset.fullscreen = 0;
}
function refreshArt() {
	setImages();
	regenerateTitleBackground();
	generateImages();
	regenerateTOC();
}
let mode = 'automatic';
function changeMode(newMode) {
	mode = newMode;
	const genart = document.querySelector('.gs24-home-genart-container');
	genart.dataset.mode = mode;
	if (mode == 'automatic') {
		removeCredit();
		clearTimeout(homeLoop);
		clearTimeout(homeClear);
		homeFeature();
	} else if (mode == 'interactive') {
		removeCredit();
		clearTimeout(homeLoop);
		clearTimeout(homeClear);
	} else if (mode == 'static') {
		removeCredit();
		clearTimeout(homeLoop);
		clearTimeout(homeClear);
	}
}