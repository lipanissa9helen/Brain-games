import getRandom from '../helpers.js';
import runningEngine from '../index.js';

const description = 'What number is missing in the progression?';

const minLength = 5;
const maxLength = 10;
const minStep = 1;
const maxStep = 10;
const minRange = 1;
const maxRange = 50;
const min = 1;

const getProgression = (progressionLength, progressionStep, progressionRange) => {
  const arrProgression = [];
  for (let i = progressionRange; arrProgression.length < progressionLength; i += progressionStep) {
    arrProgression.push(i);
  }
  return arrProgression;
};

const generateData = () => {
  const progressionLength = getRandom(minLength, maxLength);
  const progressionStep = getRandom(minStep, maxStep);
  const progressionRange = getRandom(minRange, maxRange);
  const progression = getProgression(progressionLength, progressionStep, progressionRange);
  const hiddenIndex = getRandom(min, progression.length);
  const element = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const correctAnswer = String(element);
  const question = progression.join(' ');
  return [question, correctAnswer];
};
export default () => runningEngine(description, generateData);
