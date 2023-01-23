import getRandom from '../helpers.js';
import runningEngine from '../index.js';

const description = 'What is the result of the expression?';

const generateRanOperation = () => {
  const operation = ['+', '-', '*'];
  return operation[Math.floor(Math.random() * operation.length)];
};

const count = (number1, operation, number2) => {
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
  const number1 = getRandom();
  const number2 = getRandom();
  const operation = generateRanOperation();
  const question = `${number1} ${operation} ${number2}`;
  const correctAnswer = String(count(number1, operation, number2));
  return [question, correctAnswer];
};
export default () => runningEngine(description, generateData);
