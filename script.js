'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let counter = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = 'Wrong';
    }

    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = "Congrats you found it!";
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        if (counter > highScore) {
            highScore = counter;
            document.querySelector('.highscore').textContent = highScore;
        }

    }

    else if (guess !== secretNumber) {
        if (counter > 1) {
            document.querySelector('.message').textContent = guess > secretNumber ? 'The guess is too high' : 'The guess is too low';
            counter--;
            document.querySelector('.score').textContent = counter;
        } else {
            document.querySelector('.message').textContent = "Exases";
            document.querySelector('.score').textContent = 0;
        }



    }

})


document.querySelector('.again').addEventListener('click', function () {
    counter = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;;
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = "";
    document.querySelector('.number').style.width = "15rem";
    document.querySelector('body').style.backgroundColor = "#222";


})


