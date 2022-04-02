import main from '../main.js';
import { getRandomNumber } from '../helpers/math.js';

const alowedOperations = [
  {
    operator: '+',
    operation(a, b) {
      return a + b;
    },
  },
  {
    operator: '-',
    operation(a, b) {
      return a - b;
    },
  },
  {
    operator: '*',
    operation(a, b) {
      return a * b;
    },
  },
];

const generate = () => {
  const firstNum = getRandomNumber();
  const secondNum = getRandomNumber();

  const operationIndex = getRandomNumber(alowedOperations.length);
  const operationObj = alowedOperations[operationIndex];

  const correct = operationObj.operation(firstNum, secondNum);
  const question = `${firstNum} ${operationObj.operator} ${secondNum}`;

  return { question, correct: `${correct}` };
};

const brainCalc = () => {
  main('What is the result of the expression?', generate);
};

export default brainCalc;
