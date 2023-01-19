import randomNum from '../randomValues.js';
import gameLogic from '../index.js';

const descrGame = 'Find the greatest common divisor of given numbers.';

function nodGcd(number1, number2) {
  let num1 = number1;
  let num2 = number2;
  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
  }
  return num1;
}

const gameEngine = () => {
  const number1 = randomNum();
  const number2 = randomNum();
  const gcd = nodGcd(number1, number2);
  const question = `${number1} ${number2}`;
  const expectedAnswer = String(gcd);
  return [question, expectedAnswer];
};
export default () => {
  gameLogic(descrGame, gameEngine);
};
