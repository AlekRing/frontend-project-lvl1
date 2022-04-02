import main from '../main.js';
import { findGreatestCommonDivisor, getRandomNumber } from '../helpers/math.js';

const generate = () => {
  const firstNum = getRandomNumber();
  const secondNum = getRandomNumber();

  const correct = findGreatestCommonDivisor(firstNum, secondNum + firstNum);

  return { question: `${firstNum} ${secondNum}`, correct: `${correct}` };
};

const brainGcd = () => {
  main('Find the greatest common divisor of given numbers.', generate);
};

export default brainGcd;
