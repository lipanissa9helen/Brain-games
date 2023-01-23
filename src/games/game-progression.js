import { getRandNumber, getRandIndex } from '../helpers.js';
import runningEngine from '../index.js';

const description = 'What number is missing in the progression?';

const minLength = 5;
const maxLength = 10;
const minStep = 1;
const maxStep = 10;
const minRange = 1;
const maxRange = 50;

const getProgression = (progressionLength, progressionStep, progressionRange) => {
  const arrProgression = [];
  for (let i = progressionRange; arrProgression.length < progressionLength; i += progressionStep) {
    arrProgression.push(i);
  }
  return arrProgression;
};

const generateData = () => {
  const progressionLength = getRandNumber(minLength, maxLength);
  const progressionStep = getRandNumber(minStep, maxStep);
  const progressionRange = getRandNumber(minRange, maxRange);
  const progression = getProgression(progressionLength, progressionStep, progressionRange);
  const hiddenIndex = getRandIndex(progression);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};
export default () => runningEngine(description, generateData);
