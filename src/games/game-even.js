import randomNum from '../randomValues.js';
import gameEngine from '../index.js';

const descrGame = 'Answer "yes" if the number is even, otherwise answer "no".';
const minNum = 1;
const maxNum = 100;

const isEven = (number) => number % 2 === 0;

const generateData = () => {
  const number = randomNum(minNum, maxNum);
  const question = String(number);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};
export default () => {
  gameEngine(descrGame, generateData);
};
