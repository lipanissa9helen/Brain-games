import randomNum from '../randomValues.js';
import gameLogic from '../index.js';

const descrGame = 'What is the result of the expression?';

function randomOperation() {
  const op = ['+', '-', '*'];
  return op[Math.floor(Math.random() * op.length)];
}

function calculator(number1, operation, number2) {
  if (operation === '+') {
    return number1 + number2;
  } if (operation === '-') {
    return number1 - number2;
  } if (operation === '*') {
    return number1 * number2;
  }
}

function gameEngine() {
  const number1 = randomNum();
  const number2 = randomNum();
  const operation = randomOperation();
  const question = `${number1} ${operation} ${number2}`;
  const correctAnswer = String(calculator(number1, operation, number2));
  return [question, correctAnswer];
}
export default () => {
  gameLogic(descrGame, gameEngine);
};
