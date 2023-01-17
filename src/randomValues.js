const maxNumRand = 50;
const minNumRand = 0;

function randomNum(minNum = minNumRand, maxNum = maxNumRand) {
  return (Math.floor(Math.random() * maxNum) + minNum);
}

export default randomNum;
