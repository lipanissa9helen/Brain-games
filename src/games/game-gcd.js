import getRandom from '../helpers.js';
import runningEngine from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const nodGcd = (number1, number2) => {
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
};

const generateData = () => {
  const number1 = getRandom();
  const number2 = getRandom();
  const gcd = nodGcd(number1, number2);
  const question = `${number1} ${number2}`;
  const expectedAnswer = String(gcd);
  return [question, expectedAnswer];
};
export default () => runningEngine(description, generateData);
