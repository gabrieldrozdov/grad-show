// Fetch JSON and pick random images
let creditsJSON;
let images = [];
fetch('../credits.json')
	.then((response) => response.json())
	.then((json) => {
		creditsJSON = json;
		setImages();
		generateImages();
		generateStudents();
	})

// Set images for all genart
function setImages() {
	images = [];
	for (let i=0; i<1; i++) {
		let keys = Object.keys(creditsJSON);
		let randomImage = creditsJSON[Math.floor(Math.random()*keys.length)]['img'];
		images.push(randomImage);
	}
}

// Generate subpagepage genart
function generateImages() {	
	const subpageGenart = document.querySelector('.gs24-subpage-genart');
	let subpageGenartTemp = '';
	let totalDivisions = Math.round(Math.random()*12+4);
	for (let col=0; col<totalDivisions; col++) {
		// Set random number of rows for col
		let rows = Math.round(Math.random()*12+4);
		subpageGenartTemp += `<div class="gs24-subpage-genart-col">`;
	
		// Generate rows in column
		for (let row=0; row<rows; row++) {
	
			// Generate slices in row
			let slices = Math.round(Math.random()*12+4);
			let slicesTemp = '';
			const randomImage = images[Math.floor(Math.random()*images.length)];

			for (let slice=0; slice<slices; slice++) {
				slicesTemp += `
					<div class="gs24-subpage-genart-slice" style="background-image:url('../2023-images/${randomImage}'); animation: background-shift 600s -${Math.random()*10}s infinite linear;">
						<div class="gs24-subpage-genart-slice-overlay"></div>
					</div>
				`;
			}

			subpageGenartTemp += `
				<div class="gs24-subpage-genart-row">
					<div class="gs24-subpage-genart-slices">
						${slicesTemp}
					</div>
				</div>
			`;
		}
		subpageGenartTemp += `</div>`;
	}
	subpageGenart.innerHTML = subpageGenartTemp;

	// Reveal slices
	for (let sliceOverlay of subpageGenart.querySelectorAll('.gs24-subpage-genart-slice-overlay')) {
		setTimeout(() => {
			sliceOverlay.style.opacity = 0;
			setTimeout(() => {
				sliceOverlay.style.opacity = 1;
			}, Math.random()*1000+3000)
		}, Math.random()*1000)
	}

	// Rerun code
	setTimeout(() => {
		setImages();
		generateImages();
		regenerateStudents();
	}, 5500)
}

// Table of contents
function generateStudents() {
	for (let student of document.querySelectorAll('.gs24-subpage-student')) {
		const studentLabel = student.querySelector('.gs24-subpage-student-label');
		studentLabel.style.animationDelay = `-${(Math.random()*2).toFixed(2)}s`;
		student.innerHTML += `
			<div class="gs24-subpage-student-background" style="background-image: url('../2023-images/${images[Math.floor(Math.random()*images.length)]}'); animation: background-shift 600s -${Math.random()*10}s infinite linear;"></div>
		`;
	}

	// Header
	const header = document.querySelector('.gs24-subpage-header-background');
	header.style.backgroundImage = `url('../2023-images/${images[Math.floor(Math.random()*images.length)]}')`;
}
function regenerateStudents() {
	for (let studentBackground of document.querySelectorAll('.gs24-subpage-student-background')) {
		studentBackground.style.backgroundImage = `url('../2023-images/${images[Math.floor(Math.random()*images.length)]}')`;
	}

	// Header
	const header = document.querySelector('.gs24-subpage-header-background');
	header.style.backgroundImage = `url('../2023-images/${images[Math.floor(Math.random()*images.length)]}')`;
}