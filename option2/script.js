const colors = ['offblack', 'offwhite', 'yellow', 'green', 'red', 'blue'];

// Fetch JSON and pick random images
let creditsJSON;
fetch('credits.json')
	.then((response) => response.json())
	.then((json) => {
		creditsJSON = json;
		generateImages();
	})

function generateImages() {
	let images = [];
	for (let i=0; i<4; i++) {

		// 2023 photos
		// let keys = Object.keys(creditsJSON);
		// let randomImage = creditsJSON[Math.floor(Math.random()*keys.length)]['img'];
		// images.push(randomImage);

		// Totally random images
		images.push(`img${Math.floor(Math.random()*146)}.jpg`);
	}
	
	const headerGenart = document.querySelector('.header-genart');
	let headerGenartTemp = '';
	let totalDivisions = Math.round(Math.random()*8+2);
	for (let col=0; col<totalDivisions; col++) {
		// Set random number of rows for col
		let rows = Math.round(Math.random()*7+3);
		headerGenartTemp += `<div class="header-genart-col">`;
	
		// Generate rows in column
		for (let row=0; row<rows; row++) {
	
			// Generate slices in rowumn
			let slices = Math.round(Math.random()*7+3);
			let slicesTemp = '';
			const randomImage = images[Math.floor(Math.random()*images.length)];
			for (let slice=0; slice<slices; slice++) {

				// Totally random images
				slicesTemp += `<div class="header-genart-slice" style="background-image:url('random-images/${randomImage}'); animation: background-shift 600s -${Math.random()*10}s infinite linear;"></div>`;

				// 2023 photos
				// slicesTemp += `<div class="header-genart-slice" style="background-image:url('2023-images/${randomImage}'); animation: background-shift 600s -${Math.random()*10}s infinite linear;"></div>`;
			}
	
			headerGenartTemp += `
				<div class="header-genart-row" style="animation-delay: ${Math.random()*.5}s">
					<div class="header-genart-slices">
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
function headerFeature() {
	const headerImages = document.querySelectorAll('.header-genart-slice');
	const headerCredit = document.querySelector('.header-credit');
	activeHeaderImage = headerImages[Math.floor(Math.random()*headerImages.length)];
	activeHeaderImage.dataset.active = 1;
	activeHeaderImage.parentElement.parentElement.dataset.active = 1;
	activeHeaderImage.parentElement.parentElement.parentElement.dataset.active = 1;
	const prevImage = activeHeaderImage;
	headerCredit.style.transform = "scale(1)";
	setTimeout(() => {
		prevImage.dataset.active = 0;
		prevImage.parentElement.parentElement.dataset.active = 0;
		prevImage.parentElement.parentElement.parentElement.dataset.active = 0;
		headerCredit.style.transform = "scale(0)";
	}, 4500)
	setTimeout(headerFeature, 5500);
}
setTimeout(headerFeature, 2000);

// Initialize title style settings
let titleColumnLetters = ["", "", "", ""];
let index = 0;
for (let titleColumn of document.querySelectorAll('.title-column')) {
	const letters = titleColumn.querySelectorAll('div');
	titleColumnLetters[index] = letters[Math.floor(Math.random()*letters.length)];
	index++;
}
for (let div of document.querySelectorAll('.title-column div')) {
	div.style.animationDelay = Math.random()*.5+"s";
}
for (let span of document.querySelectorAll('.title-column span')) {
	span.style.backgroundColor = `rgba(0,0,0,${Math.random()*.2})`;
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
	span.style.backgroundColor = `rgba(0,0,0,${Math.random()*.2})`;
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