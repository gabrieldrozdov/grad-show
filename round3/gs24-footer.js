// Table of contents
function generateFooter() {
	fetch('../credits.json')
		.then((response) => response.json())
		.then((json) => {
			// Pick images to use
			let images = [];
			for (let i=0; i<4; i++) {
				let keys = Object.keys(json);
				let randomImage = json[Math.floor(Math.random()*keys.length)]['img'];
				images.push(randomImage);
			}

			// Generate title animation
			const title = document.querySelector('.gs24-footer-title-text');
			for (let span of title.querySelectorAll('span')) {
				let spanTemp = '';
				for (let letter of span.innerText) {
					spanTemp += `<span style="animation-duration: ${Math.floor(Math.random()*20+5)}s;">${letter}</span>`;
				}
				span.innerHTML = spanTemp;
			}

			// Generate title background
			const footerTitleBackground = document.querySelector('.gs24-footer-title-background');
			let footerGenartTemp = '';
			for (let col=0; col<Math.round(200/1.25); col++) {
				footerGenartTemp += `
					<div class="gs24-footer-title-background-col" style="background-image: url('../2023-images/${images[Math.floor(Math.random()*images.length)]}'); animation: background-shift 600s -${Math.random()*10}s infinite linear;"></div>
				`;
			}
			footerTitleBackground.innerHTML = footerGenartTemp;

			// Blend title with background
			const homeTitleBackgroundOverlay = document.querySelector('.gs24-home-title-background-overlay');
			const homeTitleVisible = document.querySelector('.gs24-home-title-visible');
			setTimeout(() => {
				homeTitleVisible.style.opacity = 0;
				homeTitleBackgroundOverlay.style.opacity = 0;
			}, 1500)

			// Generate footer backgrounds
			for (let footerLink of document.querySelectorAll('.gs24-footer-link')) {
				const footerLinkLabel = footerLink.querySelector('.gs24-footer-link-label');
				footerLinkLabel.style.animationDelay = `-${(Math.random()*2).toFixed(2)}s`;
				footerLink.innerHTML += `
					<div class="gs24-toc-background" style="background-image: url('../2023-images/${images[Math.floor(Math.random()*images.length)]}'); animation: background-shift 600s -${Math.random()*10}s infinite linear;"></div>
				`;
			}
		})
}
generateFooter();