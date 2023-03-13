'use strict';

const message = document.querySelector('.message');
const body = document.querySelector('body');
const number = document.querySelector('.number');
const guess = document.querySelector('.guess');
const score = document.querySelector('.score');
const highsc = document.querySelector('.highscore');



let secretNumber = Math.trunc(Math.random() * 20) + 1;
let counter = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(guess.value);

    if (!guess) {
        message.textContent = 'Wrong';
    }

    else if (guess === secretNumber) {
        message.textContent = "Congrats you found it!";
        body.style.backgroundColor = '#60b347';
        number.style.width = '30rem';
        number.textContent = secretNumber;

        if (counter > highScore) {
            highScore = counter;
            highsc.textContent = highScore;
        }

    }

    else if (guess !== secretNumber) {
        if (counter > 1) {
            message.textContent = guess > secretNumber ? 'The guess is too high' : 'The guess is too low';
            counter--;
            score.textContent = counter;
        } else {
            message.textContent = "Exases";
            score.textContent = 0;
        }

    }

})


document.querySelector('.again').addEventListener('click', function () {
    counter = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;;
    message.textContent = "Start guessing...";
    score.textContent = 20;
    number.textContent = "?";
    guess.value = "";
    number.style.width = "15rem";
    body.style.backgroundColor = "#222";


})


