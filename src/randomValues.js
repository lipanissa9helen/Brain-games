const randomNum = (minNum, maxNum) => Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

const randomIndex = (index) => Math.floor(Math.random() * index.length);

export { randomNum, randomIndex };
