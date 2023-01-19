import randomNum from '../randomValues.js';
import gameLogic from '../index.js';

const descrGame = 'What number is missing in the progression?';

const minLength = 5;
const maxLength = 10;
const minStep = 1;
const maxStep = 10;
const minRange = 1;
const maxRange = 50;

function arithmeticProgression() {
  const arr = [];
  const progressionLength = randomNum(minLength, maxLength);
  const step = randomNum(minStep, maxStep);
  const progressionRange = randomNum(minRange, maxRange);
  let progression = progressionRange;
  for (let i = 1; i < progressionLength; i += 1) {
    progression += step;
    arr.push(progression);
  }
  return arr;
}

function gameEngine() {
  const progression = arithmeticProgression();
  const size = progression.length;
  const hiddenElement = randomNum(0, size);
  const number = progression[hiddenElement];
  progression[hiddenElement] = '..';
  const correctAnswer = String(number);
  const question = progression.join(' ');
  return [question, correctAnswer];
}
export default () => {
  gameLogic(descrGame, gameEngine);
};
