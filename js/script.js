const container_quadrati = document.querySelector('.container_quadrati');
const titolo = document.querySelector('h1');

titolo.addEventListener('click', function () {
	for (let i = 1; i <= 100; i++) {
        if(i % 3 == 0 && i % 5 !=0){
            container_quadrati.innerHTML += `<div class="quadrati3">${"Fizz"}</div>`;
        }

        if(i % 5 == 0 && i % 3 !=0){
            container_quadrati.innerHTML += `<div class="quadrati5">${"Buzz"}</div>`;
        }

        if(i % 3 == 0 && i % 5 == 0){
            container_quadrati.innerHTML += `<div class="quadrati3-5">${"FizzBuzz"}</div>`;
        }
        else if(i % 3 !=0 && i %5 != 0){
            container_quadrati.innerHTML += `<div class="quadrati">${i}</div>`;
        }
	}
});