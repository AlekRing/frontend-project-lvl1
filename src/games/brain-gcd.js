import main from '../main.js';
import { findGCD, getRandomNumber } from '../helpers/math.js';

const description = 'Find the greatest common divisor of given numbers.';

const generate = () => {
  const firstNum = getRandomNumber();
  const secondNum = getRandomNumber();

  const correct = findGCD(firstNum, secondNum);

  return { question: `${firstNum} ${secondNum}`, correct: `${correct}` };
};

export default () => main(description, generate);
