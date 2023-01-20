import randomNum from '../randomValues.js';
import gameEngine from '../index.js';

const descrGame = 'What is the result of the expression?';
const minNum = 1;
const maxNum = 50;

const generateRanOperation = () => {
  const op = ['+', '-', '*'];
  return op[Math.floor(Math.random() * op.length)];
};

const calculator = (number1, operation, number2) => {
  let result = 0;
  if (operation === '+') {
    result = number1 + number2;
  } if (operation === '-') {
    result = number1 - number2;
  } if (operation === '*') {
    result = number1 * number2;
  }
  return result;
};

const generateData = () => {
  const number1 = randomNum(minNum, maxNum);
  const number2 = randomNum(minNum, maxNum);
  const operation = generateRanOperation();
  const question = `${number1} ${operation} ${number2}`;
  const correctAnswer = String(calculator(number1, operation, number2));
  return [question, correctAnswer];
};
export default () => {
  gameEngine(descrGame, generateData);
};
