import randomNum from '../randomValues.js';
import gameEngine from '../index.js';

const descrGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const min = 1;
const max = 50;

const primeNumber = (number) => {
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
};

const generateData = () => {
  const number = randomNum(min, max);
  const question = String(number);
  const correctAnswer = primeNumber(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};
export default () => {
  gameEngine(descrGame, generateData);
};
