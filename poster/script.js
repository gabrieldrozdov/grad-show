// Hide/show controls
function toggleControls() {
	const container = document.querySelector('.container');
	if (parseInt(container.dataset.controls) == 1) {
		container.dataset.controls = 0;
	} else {
		container.dataset.controls = 1;
	}
}

// Variable title
function initializeTitle() {
	for (let span of document.querySelectorAll('.poster-title span')) {
		span.style.setProperty('--delay', Math.random()*10-20 + "s");
		span.style.setProperty('--variation-offset', Math.round(Math.random()*50));
	}
}
initializeTitle();
function toggleTitleMotion() {
	const poster = document.querySelector('.poster');
	const toggle = document.querySelector('#title-motion');
	if (parseInt(poster.dataset.titleMotion) == 1) {
		poster.dataset.titleMotion = 0;
		toggle.dataset.active = 0;
	} else {
		poster.dataset.titleMotion = 1;
		toggle.dataset.active = 1;
	}
}
function toggleTitleMotionOff() {
	const poster = document.querySelector('.poster');
	const toggle = document.querySelector('#title-motion');
	poster.dataset.titleMotion = 0;
	toggle.dataset.active = 0;
}
function titleVariation(value) {
	toggleTitleMotionOff();
	const poster = document.querySelector('.poster');
	const slider = document.querySelector('#title-variation [type="range"]');
	slider.value = value;
	const number = document.querySelector('#title-variation [type="number"]');
	number.value = value;
	poster.style.setProperty("--variation", value);
}

// Background
function generateBackground() {
	const posterBackground = document.querySelector('.poster-background');
	let temp = "";
	let randomImage = Math.round(Math.random()*34);
	for (let i=0; i<500; i++) {
		temp += `<div style="--offset: ${Math.random()*10}%; background-image: url('assets/images/img${randomImage}.jpg'); --speed-offset: ${Math.random()*100}s"></div>`;
	}
	posterBackground.innerHTML = temp;
}
function generateBackgroundMulti() {
	const posterBackground = document.querySelector('.poster-background');
	let images = [];
	let totalImages = Math.round(Math.random()*10+3);
	for (let i=0; i<totalImages; i++) {
		images.push(`img${Math.round(Math.random()*34)}.jpg`);
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

// Set title style
function setTitleStyle(value) {
	const poster = document.querySelector('.poster');
	poster.dataset.titleStyle = value;

	const toggleTall = document.querySelector('#title-tall');
	toggleTall.dataset.active = 0;
	const toggleShort = document.querySelector('#title-short');
	toggleShort.dataset.active = 0;
	const toggleLong = document.querySelector('#title-long');
	toggleLong.dataset.active = 0;

	const activeToggle = document.querySelector(`#title-${value}`);
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
function toggleTitle() {
	const poster = document.querySelector('.poster');
	const toggle = document.querySelector('#content-title');
	if (parseInt(poster.dataset.title) == 1) {
		poster.dataset.title = 0;
		toggle.dataset.active = 0;
	} else {
		poster.dataset.title = 1;
		toggle.dataset.active = 1;
	}
}
function toggleTitleCorner() {
	const poster = document.querySelector('.poster');
	const toggle = document.querySelector('#content-title-corner');
	if (parseInt(poster.dataset.titleCorner) == 1) {
		poster.dataset.titleCorner = 0;
		toggle.dataset.active = 0;
	} else {
		poster.dataset.titleCorner = 1;
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

// Vignette
function vignetteToggle() {
	const poster = document.querySelector('.poster');
	const toggle = document.querySelector('#vignette-toggle');
	if (parseInt(poster.dataset.vignette) == 1) {
		poster.dataset.vignette = 0;
		toggle.dataset.active = 0;
	} else {
		poster.dataset.vignette = 1;
		toggle.dataset.active = 1;
	}
}
function vignetteInvert() {
	const poster = document.querySelector('.poster');
	const toggle = document.querySelector('#vignette-invert');
	if (parseInt(poster.dataset.vignetteInvert) == 1) {
		poster.dataset.vignetteInvert = 0;
		toggle.dataset.active = 0;
	} else {
		poster.dataset.vignetteInvert = 1;
		toggle.dataset.active = 1;
	}
}
function vignetteInset(value) {
	const poster = document.querySelector('.poster');
	const slider = document.querySelector('#vignette-inset [type="range"]');
	slider.value = value;
	const number = document.querySelector('#vignette-inset [type="number"]');
	number.value = value;
	poster.style.setProperty("--vignette-inset", value+"%");
}
function vignetteOpacity(value) {
	const poster = document.querySelector('.poster');
	const slider = document.querySelector('#vignette-opacity [type="range"]');
	slider.value = value;
	const number = document.querySelector('#vignette-opacity [type="number"]');
	number.value = value;
	poster.style.setProperty("--vignette-opacity", value);
}
function vignetteRotation(value) {
	const poster = document.querySelector('.poster');
	const slider = document.querySelector('#vignette-rotation [type="range"]');
	slider.value = value;
	const number = document.querySelector('#vignette-rotation [type="number"]');
	number.value = value;
	poster.style.setProperty("--vignette-rotation", value+"deg");
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
function invertTitle() {
	const poster = document.querySelector('.poster');
	const toggle = document.querySelector('#invert-title');
	if (parseInt(poster.dataset.invertTitle) == 1) {
		poster.dataset.invertTitle = 0;
		toggle.dataset.active = 0;
	} else {
		poster.dataset.invertTitle = 1;
		toggle.dataset.active = 1;
	}
}
function invertTitleCorner() {
	const poster = document.querySelector('.poster');
	const toggle = document.querySelector('#invert-title-corner');
	if (parseInt(poster.dataset.invertTitleCorner) == 1) {
		poster.dataset.invertTitleCorner = 0;
		toggle.dataset.active = 0;
	} else {
		poster.dataset.invertTitleCorner = 1;
		toggle.dataset.active = 1;
	}
}
function blendTitle() {
	const poster = document.querySelector('.poster');
	const toggle = document.querySelector('#blend-title');
	if (parseInt(poster.dataset.blend) == 1) {
		poster.dataset.blend = 0;
		toggle.dataset.active = 0;
	} else {
		poster.dataset.blend = 1;
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
function titleSize(value) {
	const poster = document.querySelector('.poster');
	const slider = document.querySelector('#title-size [type="range"]');
	slider.value = value;
	const number = document.querySelector('#title-size [type="number"]');
	number.value = value;
	poster.style.setProperty("--title-size", value+"pt");
}
function logoSize(value) {
	const poster = document.querySelector('.poster');
	const slider = document.querySelector('#logo-size [type="range"]');
	slider.value = value;
	const number = document.querySelector('#logo-size [type="number"]');
	number.value = value;
	poster.style.setProperty("--logo-size", value+"in");
}

// Info inset
function infoInset(value) {
	const poster = document.querySelector('.poster');
	const slider = document.querySelector('#info-inset [type="range"]');
	slider.value = value;
	const number = document.querySelector('#info-inset [type="number"]');
	number.value = value;
	poster.style.setProperty("--info-inset", value+"in");
}

// Department positions
function shuffle(array) {
	let currentIndex = array.length;
	while (currentIndex != 0) {
		let randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;
		[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
	}
}
function shuffleDept() {
	let percent = 0;
	let depts = document.querySelectorAll('.poster-dept');
	shuffle(depts);
	for (let dept of depts) {
		percent += 1/depts.length;
		dept.style.left = Math.random()*70+15 + "%";
		dept.style.top = (percent*100)*.7+15 + "%";
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

// Department animation
function initializeDept() {
	for (let dept of document.querySelectorAll('.poster-dept')) {
		dept.style.animationDelay = `${Math.random()*-5}s`;
	}
}
initializeDept();

// Presets
function generatePreset(format, orientation) {
	let settingsPosterWidth,
		settingsPosterHeight,
		settingsInfoSize,
		settingsDeptSize,
		settingsTitleSize,
		settingsLogoSize,
		settingsInfoInset,
		settingsTitleStyle,
		settingsPreviewZoom,
		settingsVignetteInset,
		settingsVignetteOpacity,
		settingsVignetteRotation;
	if (format == "8.5x11") {
		if (orientation == "portrait") {
			settingsPosterWidth = "8.5";
			settingsPosterHeight = "11";
			settingsTitleStyle = "tall";
			settingsTitleSize = "144";
		} else if (orientation == "landscape") {
			settingsPosterWidth = "11";
			settingsPosterHeight = "8.5";
			settingsTitleStyle = "short";
			settingsTitleSize = "120";
		}
		settingsInfoSize = "12";
		settingsDeptSize = "8";
		settingsLogoSize = "1";
		settingsInfoInset = ".5";
		settingsPreviewZoom = "75";
		settingsVignetteInset = "15";
		settingsVignetteOpacity = ".5";
		settingsVignetteRotation = "110";

	} else if (format == "11x17") {
		if (orientation == "portrait") {
			settingsPosterWidth = "11";
			settingsPosterHeight = "17";
			settingsTitleStyle = "tall";
			settingsTitleSize = "200";
		} else if (orientation == "landscape") {
			settingsPosterWidth = "17";
			settingsPosterHeight = "11";
			settingsTitleStyle = "short";
			settingsTitleSize = "190";
		}
		settingsInfoSize = "16";
		settingsDeptSize = "12";
		settingsLogoSize = "1.4";
		settingsInfoInset = ".6";
		settingsPreviewZoom = "50";
		settingsVignetteInset = "15";
		settingsVignetteOpacity = ".5";
		settingsVignetteRotation = "110";

	} else if (format == "24x36") {
		if (orientation == "portrait") {
			settingsPosterWidth = "24";
			settingsPosterHeight = "36";
			settingsTitleStyle = "tall";
			settingsTitleSize = "500";
		} else if (orientation == "landscape") {
			settingsPosterWidth = "36";
			settingsPosterHeight = "24";
			settingsTitleStyle = "short";
			settingsTitleSize = "400";
		}
		settingsInfoSize = "24";
		settingsDeptSize = "18";
		settingsLogoSize = "1.8";
		settingsInfoInset = ".6";
		settingsPreviewZoom = "23";
		settingsVignetteInset = "15";
		settingsVignetteOpacity = ".5";
		settingsVignetteRotation = "110";

	} else if (format == "36x50") {
		if (orientation == "portrait") {
			settingsPosterWidth = "36";
			settingsPosterHeight = "50";
			settingsTitleStyle = "tall";
			settingsTitleSize = "750";
		} else if (orientation == "landscape") {
			settingsPosterWidth = "50";
			settingsPosterHeight = "36";
			settingsTitleStyle = "short";
			settingsTitleSize = "600";
		}
		settingsInfoSize = "32";
		settingsDeptSize = "24";
		settingsLogoSize = "2.5";
		settingsInfoInset = ".6";
		settingsPreviewZoom = "15";
		settingsVignetteInset = "15";
		settingsVignetteOpacity = ".5";
		settingsVignetteRotation = "110";

	} else if (format == "6x60") {
		if (orientation == "portrait") {
			settingsPosterWidth = "6";
			settingsPosterHeight = "60";
			settingsTitleStyle = "tall";
			settingsTitleSize = "144";
		} else if (orientation == "landscape") {
			settingsPosterWidth = "60";
			settingsPosterHeight = "6";
			settingsTitleStyle = "long";
			settingsTitleSize = "225";
		}
		settingsInfoSize = "12";
		settingsDeptSize = "12";
		settingsLogoSize = "1";
		settingsInfoInset = ".5";
		settingsPreviewZoom = "15";
		settingsVignetteInset = "15";
		settingsVignetteOpacity = ".5";
		settingsVignetteRotation = "110";

	} else if (format == "30x30") {
		settingsPosterWidth = "30";
		settingsPosterHeight = "30";
		settingsTitleStyle = "tall";
		settingsTitleSize = "400";
		settingsInfoSize = "24";
		settingsDeptSize = "18";
		settingsLogoSize = "1.8";
		settingsInfoInset = ".6";
		settingsPreviewZoom = "23";
		settingsVignetteInset = "15";
		settingsVignetteOpacity = ".6";
		settingsVignetteRotation = "100";

	} else if (format == "6x6") {
		settingsPosterWidth = "6";
		settingsPosterHeight = "6";
		settingsTitleStyle = "short";
		settingsTitleSize = "75";
		settingsInfoSize = "11";
		settingsDeptSize = "6";
		settingsLogoSize = ".7";
		settingsInfoInset = ".2";
		settingsPreviewZoom = "100";
		settingsVignetteInset = "15";
		settingsVignetteOpacity = ".6";
		settingsVignetteRotation = "100";
	}

	posterWidth(settingsPosterWidth);
	posterHeight(settingsPosterHeight);
	infoSize(settingsInfoSize);
	deptSize(settingsDeptSize);
	titleSize(settingsTitleSize);
	logoSize(settingsLogoSize);
	infoInset(settingsInfoInset);
	setTitleStyle(settingsTitleStyle);
	shuffleDept();
	previewZoom(settingsPreviewZoom);
	previewXPos(0);
	previewYPos(0);
	vignetteInset(settingsVignetteInset);
	vignetteOpacity(settingsVignetteOpacity);
	vignetteRotation(settingsVignetteRotation);
}