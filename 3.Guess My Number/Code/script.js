'use strict';

var secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    //When no input
    document.querySelector('.message').textContent = 'No number';
  } else if (guess === secretNumber) {
    //When palyer wins

    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30remn';
    document.querySelector('.number').textContent = secretNumber;
    //changing high score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.label-highscore').textContent =
        '🥇 Highscore: ' + highScore;
    }
  } else if (guess != secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too High' : 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the game';
    }
  }
  //changing part --->
  // else if (guess > secretNumber) {
  //   //guess greater than secretnumber
  //   if (score > 0) {
  //     document.querySelector('.message').textContent = 'Too High';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost the game';
  //   }
  // } else if (guess < secretNumber) {
  //   //guess less than secretnumber
  //   if (score > 0) {
  //     document.querySelector('.message').textContent = 'Too Small';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost the game';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = 0;
  document.querySelector('body').style.backgroundColor = '#222222';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = score;
});
