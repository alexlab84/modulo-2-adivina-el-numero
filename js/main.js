'use strict';


const numberInput = document.querySelector('.number');
const btn = document.querySelector('.js__btn');
const pistaEl = document.querySelector('.js__pista');
const intentosEl = document.querySelector('.js__intentos');
const counter = document.querySelector('.counter');


function getRandomNumber(max) {
    return parseInt(Math.random() * max);
   }
   
   let randomNumber = getRandomNumber(100);
   
   console.log(randomNumber);
   
btn.addEventListener('click', (ev) => {
    ev.preventDefault();
    console.log(numberInput.value);
    increaseCounter();
    checkNumber(numberInput.value, randomNumber);
});


function increaseCounter() {
    return counter.innerHTML++;
}


function checkNumber(input, random) {
    if (numberInput.value > 100 || numberInput.value < 0) {
        pistaEl.innerHTML = 'El número debe estar entre 1 y 100.';
    
    } else {
        if (numberInput.value > randomNumber) {
            pistaEl.innerHTML = 'Demasiado alto';  
        } else if (numberInput.value < randomNumber) {
            pistaEl.innerHTML = 'Demasiado bajo';

        } else {
            pistaEl.innerHTML = 'Has ganado';
        }
    }
}