import log from '../helpers/log.js';
import { getRandomNumber } from '../helpers/math.js';
import {
  greetAndGetUserName,
  playGameCycle,
  startRound,
  getAndCheckAnswerStage,
} from '../index.js';

import alowedOperations from '../data/brain-calc-data.js';

const getQuestion = (operation) => (firstNumber, secondNumber) => {
  log('Question: ', `${firstNumber} ${operation.operator} ${secondNumber}`);
};

function playRound() {
  const operation = alowedOperations[getRandomNumber(3)];

  const { firstNumber, secondNumber } = startRound(getQuestion(operation));
  const correctAnswer = operation.operation(firstNumber, secondNumber);

  return getAndCheckAnswerStage(correctAnswer);
}

function brainCalc() {
  const userName = greetAndGetUserName('What is the result of the expression?');

  playGameCycle(userName, playRound);
}

export default brainCalc;
