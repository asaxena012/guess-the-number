'use strict';

let score = 20;
let highscore = 0;
let answer = Math.trunc(Math.random() * 20);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.input-number').value);

  //No input case
  if (!guess) {
    displayMessage('🚫 No Number');
    document.querySelector('html').style.backgroundColor = '#00a4f4';

    //Correct guess case
  } else if (guess === answer) {
    displayMessage('🎉 Correct Number, Noice!');
    document.querySelector('html').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.padding = '40px 100px';
    document.querySelector('.number').textContent = answer;

    //Highscore check
    if (score > highscore) {
      highscore = score;
      document.querySelector('.hsVal').textContent = highscore;
    }
    //Guess Too Low case
  } else if (guess !== answer) {
    if (score > 1) {
      displayMessage(guess < answer ? '📉 Too Low' : '📈 Too High');
      score--;
      document.querySelector('.scVal').textContent = score;
    } else {
      displayMessage('You are a retard.');
      document.querySelector('.scVal').textContent = 0;
      document.querySelector('html').style.backgroundColor = '#8c50fd';
    }
  }
});

//Implementing Reset Funcionality with Again Button

document.querySelector('.again').addEventListener('click', function () {
  //Reset score value
  score = 20;
  document.querySelector('.scVal').textContent = score;
  //reset secretNumber/answer
  answer = Math.trunc(Math.random() * 20);

  //Reset background color
  document.querySelector('html').style.backgroundColor = '#222';

  //Reset number variable
  document.querySelector('.number').style.padding = '40px 50px';
  document.querySelector('.number').textContent = '?';

  //reset message
  displayMessage('Start Guessing...');

  //Reset input value
  document.querySelector('.input-number').value = '';
});
