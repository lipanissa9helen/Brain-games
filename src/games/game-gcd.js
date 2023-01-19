import randomNum from '../randomValues.js';
import gameLogic from '../index.js';

const descrGame = 'Find the greatest common divisor of given numbers.';

function nodGcd(number1, number2) {
  while (number1 !== number2) {
    if (number1 > number2) {
      number1 -= number2;
    } else {
      number2 -= number1;
    }
  }
  return number1;
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
