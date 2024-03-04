const colors = ['offblack', 'offwhite', 'yellow', 'green', 'red', 'blue'];


let images = [];
for (let i=0; i<4; i++) {
	images.push(`img${Math.floor(Math.random()*146)}.jpg`);
}

const headerBackground = document.querySelector('.header-background');
let headerBackgroundTemp = '';
for (let row=0; row<10; row++) {
	// Set random number of columns for row
	let cols = Math.round(Math.random()*7+3);
	headerBackgroundTemp += `<div class="header-background-row" style="animation-delay: ${row/15}s">`;

	// Generate columns in row
	for (let col=0; col<cols; col++) {

		// Generate slices in column
		let slices = Math.round(Math.random()*7+3);
		let slicesTemp = '';
		// const randomImage = `img${Math.floor(Math.random()*146)}.jpg`;
		const randomImage = images[Math.floor(Math.random()*images.length)];
		for (let slice=0; slice<slices; slice++) {
			slicesTemp += `<div class="header-background-slice" style="background-image:url('images/${randomImage}'); animation: background-shift 600s -${Math.random()*10}s infinite linear;"></div>`;
		}

		let color = `var(--${colors[Math.floor(Math.random()*colors.length)]})`;
		// let color = `hsl(${Math.round(Math.random()*360)}deg, 100%, 50%)`;
		let direction = "row";
		// if (Math.random() < .5) {
		// 	direction = "column";
		// }
		headerBackgroundTemp += `
			<div class="header-background-col">
				<div class="header-background-col-color" style="background-color: ${color}"></div>
				<div class="header-background-slices" style="flex-direction: ${direction};">
					${slicesTemp}
				</div>
			</div>
		`;
	}
	headerBackgroundTemp += `</div>`;
}
headerBackground.innerHTML = headerBackgroundTemp;

// Select a random header image to feature
let headerImages = document.querySelectorAll('.header-background-slice');
let activeHeaderImage;
function headerFeature() {
	activeHeaderImage = headerImages[Math.floor(Math.random()*headerImages.length)];
	activeHeaderImage.dataset.active = 1;
	activeHeaderImage.parentElement.parentElement.dataset.active = 1;
	activeHeaderImage.parentElement.parentElement.parentElement.dataset.active = 1;
	const prevImage = activeHeaderImage;
	setTimeout(() => {
		prevImage.dataset.active = 0;
		prevImage.parentElement.parentElement.dataset.active = 0;
		prevImage.parentElement.parentElement.parentElement.dataset.active = 0;
	}, 4500)
	setTimeout(headerFeature, 5000);
}
setTimeout(headerFeature, 3000);

// Loop title blocks
setInterval(() => {
	for (let titleBlock of document.querySelectorAll('.title-block')) {
		let currentPos = parseInt(titleBlock.dataset.pos);
		if (currentPos == 4) {
			currentPos = 1;
		} else {
			currentPos++;
		}
		titleBlock.dataset.pos = currentPos;
	}
}, 1000)