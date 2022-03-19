import log from '../helpers/log.js';
import { getRandomNumber, isNaN } from '../helpers/math.js';
import {
  greetAndGetUserName,
  playGameCycle,
  askAnswer,
} from '../index.js';

import alowedOperations from '../data/brain-calc-data.js';

function checkAnswer(answer, correctAnswer) {
  if (isNaN(answer)) return false;

  return +answer === correctAnswer;
}

function startRound(operation) {
  const firstNumberToCalculate = getRandomNumber();
  const secondNumberToCalculate = getRandomNumber();

  log('What is the result of the expression?');
  log('Question: ', `${firstNumberToCalculate} ${operation.operator} ${secondNumberToCalculate}`);

  return { firstNumberToCalculate, secondNumberToCalculate };
}

function playRound() {
  const operation = alowedOperations[getRandomNumber(3)];
  let answer = null;

  const { firstNumberToCalculate, secondNumberToCalculate } = startRound(operation);
  const correctAnswer = operation.operation(firstNumberToCalculate, secondNumberToCalculate);

  answer = askAnswer();

  const isRightAnswer = checkAnswer(answer, correctAnswer);

  if (isRightAnswer) log('Correct!');

  return { isRightAnswer, answer, correctAnswer };
}

function brainCalc() {
  const userName = greetAndGetUserName('Hello');

  playGameCycle(userName, playRound);
}

export default brainCalc;
