import randomNum from '../randomValues.js';
import gameLogic from '../index.js';

const descrGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const min = 1;
const max = 50;

function primeNumber(number) {
  if (number === 1) {
    return false;
  } if (number === 2) {
    return true;
  }
  for (let x = 2; x < number; x += 1) {
    if (number % x === 0) {
      return false;
    }
  }
  return true;
}

function gameEngine() {
  const number = randomNum(min, max);
  const question = String(number);
  let correctAnswer = ' ';
  if (primeNumber(number)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [question, correctAnswer];
}
export default () => {
  gameLogic(descrGame, gameEngine);
};
