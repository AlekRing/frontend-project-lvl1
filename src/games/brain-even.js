import main from '../main.js';
import { getRandomNumber } from '../helpers/math.js';

const isEven = (number) => number % 2 === 0;

const generate = () => {
  const num = getRandomNumber();

  const correct = isEven(num) ? 'yes' : 'no';

  return { question: `${num}`, correct };
};

const brainEven = () => {
  main('Answer "yes" if the number is even, otherwise answer "no".', generate);
};

export default brainEven;
