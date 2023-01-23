const minNum = 1;
const maxNum = 100;

const getRandom = (min = minNum, max = maxNum) => Math.floor(Math.random() * (max - min + 1)) + min;

export default getRandom;
