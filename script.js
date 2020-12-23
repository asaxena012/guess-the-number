'use strict';

let score = 20;
let highscore = 0;
let answer = Math.trunc(Math.random() * 20);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.input-number').value);

  //No input case
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No Number';
    document.querySelector('html').style.backgroundColor = '#00a4f4';

    //Correct guess case
  } else if (guess === answer) {
    document.querySelector('.message').textContent =
      '🎉 Correct Number, Noice!';

    document.querySelector('html').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.padding = '40px 100px';
    document.querySelector('.number').textContent = answer;

    //Highscore check
    if (score > highscore) {
      highscore = score;
      document.querySelector('.hsVal').textContent = highscore;
    }
    //Guess Too Low case
  } else if (guess < answer) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.scVal').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You are a retard.';
      document.querySelector('.scVal').textContent = 0;
      document.querySelector('html').style.backgroundColor = '#8c50fd';
    }
    //Guess Too High case
  } else if (guess > answer) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High';
      score--;
      document.querySelector('.scVal').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You are a retard.';
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
  document.querySelector('.message').textContent = 'Start Guessing...';

  //Reset input value
  document.querySelector('.input-number').value = '';
});
