const eleSquares = document.querySelector('.squares');
const eleTitle = document.querySelector('h1');

eleTitle.addEventListener('click', function () {
	for (let i = 1; i <= 100; i++) {
		eleSquares.innerHTML += `<div class="sq">${i}</div>`;
	}
});