import readlineSync from 'readline-sync';
import brainGame from '../cli.js'; // eslint-disable-line no-unused-vars

const maxNumRand = 100;
const minNumRand = 0;

function randomNum(minNum = minNumRand, maxNum = maxNumRand) {
  const num = Math.floor(Math.random() * maxNum) + minNum;
  return num;
}

export default function isEven() {
  const userName = brainGame();
  let correct = ' ';
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const num = randomNum();
    const answer = readlineSync.question(`Question: ${num}${'\nYour answer: '}`);
    if (num % 2 === 0) {
      correct = 'yes';
    } else {
      correct = 'no';
    }
    if (num % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
    } else if (num % 2 !== 0 && answer === 'no') {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.
      Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
