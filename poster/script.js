// Variable logo
function initializeLogo() {
	for (let span of document.querySelectorAll('.poster-logo span')) {
		span.style.setProperty('--delay', Math.random()*10-20 + "s");
		span.style.setProperty('--variation-offset', Math.round(Math.random()*50));
	}
}
initializeLogo();
function toggleLogoMotion() {
	const poster = document.querySelector('.poster');
	const toggle = document.querySelector('#logo-motion');
	if (parseInt(poster.dataset.logoMotion) == 1) {
		poster.dataset.logoMotion = 0;
		toggle.dataset.active = 0;
	} else {
		poster.dataset.logoMotion = 1;
		toggle.dataset.active = 1;
	}
}
function toggleLogoMotionOff() {
	const poster = document.querySelector('.poster');
	const toggle = document.querySelector('#logo-motion');
	poster.dataset.logoMotion = 0;
	toggle.dataset.active = 0;
}
function logoVariation(value) {
	toggleLogoMotionOff();
	const poster = document.querySelector('.poster');
	const slider = document.querySelector('#logo-variation [type="range"]');
	slider.value = value;
	const number = document.querySelector('#logo-variation [type="number"]');
	number.value = value;
	poster.style.setProperty("--variation", value);
}

// Background
function generateBackground() {
	const posterBackground = document.querySelector('.poster-background');
	let temp = "";
	let randomImage = Math.round(Math.random()*145);
	for (let i=0; i<500; i++) {
		temp += `<div style="--offset: ${Math.random()*10}%; background-image: url('assets/images/img${randomImage}.jpg'); --speed-offset: ${Math.random()*100}s"></div>`;
	}
	posterBackground.innerHTML = temp;
}
function generateBackgroundMulti() {
	const posterBackground = document.querySelector('.poster-background');
	let images = [];
	let totalImages = Math.round(Math.random()*5+5);
	for (let i=0; i<totalImages; i++) {
		images.push(`img${Math.round(Math.random()*145)}.jpg`);
	}
	let temp = "";
	for (let i=0; i<500; i++) {
		let randomImage = images[Math.floor(Math.random()*images.length)];
		temp += `<div style="--offset: ${Math.random()*10}%; background-image: url('assets/images/${randomImage}'); --speed-offset: ${Math.random()*10}s"></div>`;
	}
	posterBackground.innerHTML = temp;
}
generateBackground();
function toggleBackground() {
	const poster = document.querySelector('.poster');
	const toggle = document.querySelector('#background-motion');
	if (parseInt(poster.dataset.background) == 1) {
		poster.dataset.background = 0;
		toggle.dataset.active = 0;
	} else {
		poster.dataset.background = 1;
		toggle.dataset.active = 1;
	}
}
function toggleBackgroundOff() {
	const poster = document.querySelector('.poster');
	const toggle = document.querySelector('#background-motion');
	poster.dataset.background = 0;
	toggle.dataset.active = 0;
}
function backgroundSpeed(value) {
	const poster = document.querySelector('.poster');
	const slider = document.querySelector('#speed [type="range"]');
	slider.value = value;
	const number = document.querySelector('#speed [type="number"]');
	number.value = value;
	poster.style.setProperty("--speed", value+"s");
}
function backgroundScrub(value) {
	toggleBackgroundOff();
	const poster = document.querySelector('.poster');
	const slider = document.querySelector('#scrub [type="range"]');
	slider.value = value;
	const number = document.querySelector('#scrub [type="number"]');
	number.value = value;
	poster.style.setProperty("--scrub", value+"%");
}
function backgroundHue(value) {
	const poster = document.querySelector('.poster');
	const slider = document.querySelector('#hue [type="range"]');
	slider.value = value;
	const number = document.querySelector('#hue [type="number"]');
	number.value = value;
	poster.style.setProperty("--hue", value+"deg");
}
function backgroundSaturation(value) {
	const poster = document.querySelector('.poster');
	const slider = document.querySelector('#saturation [type="range"]');
	slider.value = value;
	const number = document.querySelector('#saturation [type="number"]');
	number.value = value;
	poster.style.setProperty("--saturation", value+"%");
}
function backgroundBrightness(value) {
	const poster = document.querySelector('.poster');
	const slider = document.querySelector('#brightness [type="range"]');
	slider.value = value;
	const number = document.querySelector('#brightness [type="number"]');
	number.value = value;
	poster.style.setProperty("--brightness", value+"%");
}
function backgroundInvert(value) {
	const poster = document.querySelector('.poster');
	const slider = document.querySelector('#invert [type="range"]');
	slider.value = value;
	const number = document.querySelector('#invert [type="number"]');
	number.value = value;
	poster.style.setProperty("--invert", value+"%");
}

// Toggle controls sections
function toggleSection(sectionID) {
	const section = document.querySelector(sectionID);
	if (parseInt(section.dataset.active) == 1) {
		section.dataset.active = 0;
	} else {
		section.dataset.active = 1;
	}
}
function collapseAll() {
	for (let section of document.querySelectorAll('.controls-group')) {
		section.dataset.active = 0;
	}
}
function expandAll() {
	for (let section of document.querySelectorAll('.controls-group')) {
		section.dataset.active = 1;
	}
}

// Set logo style
function setLogoStyle(value) {
	const poster = document.querySelector('.poster');
	poster.dataset.logoStyle = value;

	const toggleTall = document.querySelector('#logo-tall');
	toggleTall.dataset.active = 0;
	const toggleShort = document.querySelector('#logo-short');
	toggleShort.dataset.active = 0;
	const toggleLong = document.querySelector('#logo-long');
	toggleLong.dataset.active = 0;

	const activeToggle = document.querySelector(`#logo-${value}`);
	activeToggle.dataset.active = 1;
}

// Toggle elements
function toggleInfo() {
	const poster = document.querySelector('.poster');
	const toggle = document.querySelector('#content-info');
	if (parseInt(poster.dataset.info) == 1) {
		poster.dataset.info = 0;
		toggle.dataset.active = 0;
	} else {
		poster.dataset.info = 1;
		toggle.dataset.active = 1;
	}
}
function toggleDept() {
	const poster = document.querySelector('.poster');
	const toggle = document.querySelector('#content-dept');
	if (parseInt(poster.dataset.dept) == 1) {
		poster.dataset.dept = 0;
		toggle.dataset.active = 0;
	} else {
		poster.dataset.dept = 1;
		toggle.dataset.active = 1;
	}
}
function toggleLogo() {
	const poster = document.querySelector('.poster');
	const toggle = document.querySelector('#content-logo');
	if (parseInt(poster.dataset.logo) == 1) {
		poster.dataset.logo = 0;
		toggle.dataset.active = 0;
	} else {
		poster.dataset.logo = 1;
		toggle.dataset.active = 1;
	}
}

// Invert colors
function invertInfo() {
	const poster = document.querySelector('.poster');
	const toggle = document.querySelector('#invert-info');
	if (parseInt(poster.dataset.invertInfo) == 1) {
		poster.dataset.invertInfo = 0;
		toggle.dataset.active = 0;
	} else {
		poster.dataset.invertInfo = 1;
		toggle.dataset.active = 1;
	}
}
function invertDept() {
	const poster = document.querySelector('.poster');
	const toggle = document.querySelector('#invert-dept');
	if (parseInt(poster.dataset.invertDept) == 1) {
		poster.dataset.invertDept = 0;
		toggle.dataset.active = 0;
	} else {
		poster.dataset.invertDept = 1;
		toggle.dataset.active = 1;
	}
}
function invertLogo() {
	const poster = document.querySelector('.poster');
	const toggle = document.querySelector('#invert-logo');
	if (parseInt(poster.dataset.invertLogo) == 1) {
		poster.dataset.invertLogo = 0;
		toggle.dataset.active = 0;
	} else {
		poster.dataset.invertLogo = 1;
		toggle.dataset.active = 1;
	}
}
function blendLogo() {
	const poster = document.querySelector('.poster');
	const toggle = document.querySelector('#blend-logo');
	if (parseInt(poster.dataset.blend) == 1) {
		poster.dataset.blend = 0;
		toggle.dataset.active = 0;
	} else {
		poster.dataset.blend = 1;
		toggle.dataset.active = 1;
	}
}

// Font sizes
function infoSize(value) {
	const poster = document.querySelector('.poster');
	const slider = document.querySelector('#info-size [type="range"]');
	slider.value = value;
	const number = document.querySelector('#info-size [type="number"]');
	number.value = value;
	poster.style.setProperty("--info-size", value+"pt");
}
function deptSize(value) {
	const poster = document.querySelector('.poster');
	const slider = document.querySelector('#dept-size [type="range"]');
	slider.value = value;
	const number = document.querySelector('#dept-size [type="number"]');
	number.value = value;
	poster.style.setProperty("--dept-size", value+"pt");
}
function logoSize(value) {
	const poster = document.querySelector('.poster');
	const slider = document.querySelector('#logo-size [type="range"]');
	slider.value = value;
	const number = document.querySelector('#logo-size [type="number"]');
	number.value = value;
	poster.style.setProperty("--logo-size", value+"pt");
}

// Info inset
function infoInset(value) {
	const poster = document.querySelector('.poster');
	const slider = document.querySelector('#info-inset [type="range"]');
	slider.value = value;
	const number = document.querySelector('#info-inset [type="number"]');
	number.value = value;
	poster.style.setProperty("--info-inset", value+"%");
}

// Department positions
function shuffleDept() {
	for (let dept of document.querySelectorAll('.poster-dept')) {
		dept.style.left = Math.random()*80+10 + "%";
		dept.style.top = Math.random()*80+10 + "%";
	}
}
shuffleDept();

// Draggable department elements
for (let posterDepartment of document.querySelectorAll('.poster-dept')) {
	posterDepartment.addEventListener('mousedown', () => {dragElement(posterDepartment)});
}
let activeDragElement;
function dragElement(posterElement) {
	activeDragElement = posterElement;
	document.addEventListener('mousemove', updateDragElement);
	document.addEventListener('mouseup', endDragElement);
}
function updateDragElement(e) {
	const poster = document.querySelector('.poster');
	const rect = poster.getBoundingClientRect();
	const xpos = e.clientX - rect.left;
	const ypos = e.clientY - rect.top;
	const posterWidth = rect.right-rect.left;
	const posterHeight = rect.bottom-rect.top;
	console.log(posterHeight)
	activeDragElement.style.left = (xpos/posterWidth)*100 + "%";
	activeDragElement.style.top = (ypos/posterHeight)*100 + "%";
}
function endDragElement() {
	document.removeEventListener('mousemove', updateDragElement);
	document.removeEventListener('mouseup', endDragElement);
}

// Dimensions
function posterWidth(value) {
	const root = document.querySelector('html');
	const slider = document.querySelector('#width [type="range"]');
	slider.value = value;
	const number = document.querySelector('#width [type="number"]');
	number.value = value;
	root.style.setProperty("--width", value+"in");
}
function posterHeight(value) {
	const root = document.querySelector('html');
	const slider = document.querySelector('#height [type="range"]');
	slider.value = value;
	const number = document.querySelector('#height [type="number"]');
	number.value = value;
	root.style.setProperty("--height", value+"in");
}

// Preview
let zoomLevel = 75;
function previewZoom(value) {
	zoomLevel = value;
	const poster = document.querySelector('.poster');
	const slider = document.querySelector('#zoom [type="range"]');
	slider.value = value;
	const number = document.querySelector('#zoom [type="number"]');
	number.value = value;
	poster.style.setProperty("--zoom", value+"%");
}
let xpos = 0;
function previewXPos(value) {
	const poster = document.querySelector('.poster');
	const slider = document.querySelector('#xpos [type="range"]');
	slider.value = value;
	const number = document.querySelector('#xpos [type="number"]');
	number.value = value;
	poster.style.setProperty("--xpos", value+"%");
}
let ypos = 0;
function previewYPos(value) {
	const poster = document.querySelector('.poster');
	const slider = document.querySelector('#ypos [type="range"]');
	slider.value = value;
	const number = document.querySelector('#ypos [type="number"]');
	number.value = value;
	poster.style.setProperty("--ypos", value+"%");
}
document.querySelector('.poster-container').addEventListener('wheel', (e) => {
	e.preventDefault();
	if (e.ctrlKey) {
		zoomLevel -= e.deltaY/3;
		if (zoomLevel > 200) {
			zoomLevel = 200;
		} else if (zoomLevel < 1) {
			zoomLevel = 1;
		}
		previewZoom(zoomLevel);
	} else {
		xpos -= e.deltaX/10;
		ypos -= e.deltaY/10;
		if (xpos > 100) {
			xpos = 100;
		} else if (xpos < -100) {
			xpos = -100;
		}
		if (ypos > 100) {
			ypos = 100;
		} else if (ypos < -100) {
			ypos = -100;
		}
		previewXPos(xpos);
		previewYPos(ypos);
	}
}, {passive: false})