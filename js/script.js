/*
let i;
for (i = 0; i <= 10; i++) {
	console.log('primo ' + i);
}
i--;
for (; i >= 0; i--) {
	console.log('secondo ' + i);
}
*/

const eleSquares = document.querySelector('.squares');
const eleTitle = document.querySelector('h1');
const maxNumber = parseInt(prompt('Dammi il limite massimo'));

eleTitle.addEventListener('click', function () {
	for (let i = 0; i <= maxNumber; i++) {
		eleSquares.innerHTML += `<div class="sq">${i}</div>`;
	}
});
