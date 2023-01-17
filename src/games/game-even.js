import randomNum from '../randomValues.js';
import gameLogic from '../index.js';

const descrGame = 'Answer "yes" if the number is even, otherwise answer "no".';

function isEven(number) {
  return number % 2 === 0;
}

function gameEngine() {
  const number = randomNum();
  const question = String(number);
  let correctAnswer = ' ';
  if (isEven(number)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [question, correctAnswer];
}
export default () => {
  gameLogic(descrGame, gameEngine);
};
