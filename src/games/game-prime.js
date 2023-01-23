import getRandom from '../helpers.js';
import runningEngine from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }
  for (let x = 2; x < number; x += 1) {
    if (number % x === 0) {
      return false;
    }
  }
  return true;
};

const generateData = () => {
  const number = getRandom();
  const question = String(number);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};
export default () => runningEngine(description, generateData);
