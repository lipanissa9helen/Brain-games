const minNum = 1;
const maxNum = 50;

const getRandNumber = (min = minNum, max = maxNum) => Math.floor(Math.random() * (max - min)) + min;
const getRandIndex = (data) => Math.floor(Math.random() * data.length);

export { getRandNumber, getRandIndex };
