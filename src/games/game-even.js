import getRandom from '../helpers.js';
import runningEngine from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateData = () => {
  const number = getRandom();
  const question = String(number);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};
export default () => runningEngine(description, generateData);
