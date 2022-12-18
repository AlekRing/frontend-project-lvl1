import main from '../main.js';
import { getRandomNumber } from '../helpers/math.js';

const description = 'What is the result of the expression?';
const calculationMapping = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '**': (a, b) => a ** b,
  '/': (a, b) => Math.round(a / b),
  '%': (a, b) => a % b,
};

const generate = () => {
  const firstNum = getRandomNumber();
  const secondNum = getRandomNumber();

  const operators = Object.keys(calculationMapping);

  const operationIndex = getRandomNumber(operators.length - 1);
  const operator = operators[operationIndex];

  const correct = calculationMapping[operator](firstNum, secondNum);
  const question = `${firstNum} ${operator} ${secondNum}`;

  return { question, correct: `${correct}` };
};

export default () => main(description, generate);
