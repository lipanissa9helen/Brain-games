import { randomNum, randomIndex } from '../randomValues.js';
import gameEngine from '../index.js';

const descrGame = 'What number is missing in the progression?';

const minLength = 5;
const maxLength = 10;
const minStep = 1;
const maxStep = 10;
const minRange = 1;
const maxRange = 50;

const arithmeticProgression = (progressionLength, progressionStep, progressionRange) => {
  const arr = [];
  for (let i = progressionRange; i < progressionLength; i += progressionStep) {
    arr.push(i);
  }
  return arr;
};

const generateData = () => {
  const progressionLength = randomNum(minLength, maxLength);
  const progressionStep = randomNum(minStep, maxStep);
  const progressionRange = randomNum(minRange, maxRange);
  const progression = arithmeticProgression(progressionLength, progressionStep, progressionRange);
  const hiddenElement = randomIndex(progression);
  const number = progression[hiddenElement];
  progression[hiddenElement] = '..';
  const correctAnswer = String(number);
  const question = progression.join(' ');
  return [question, correctAnswer];
};
export default () => {
  gameEngine(descrGame, generateData);
};
