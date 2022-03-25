import log from '../helpers/log.js';
import { findGreatestCommonDivisor } from '../helpers/math.js';
import {
  greetAndGetUserName,
  playGameCycle,
  startRound,
  getAndCheckAnswerStage,
} from '../index.js';

function getQuestion(firstNumber, secondNumber) {
  log('Question: ', `${firstNumber} ${secondNumber}`);
}

function playRound() {
  const { firstNumber, secondNumber } = startRound(getQuestion);

  const correctAnswer = findGreatestCommonDivisor(firstNumber, secondNumber + firstNumber);

  return getAndCheckAnswerStage(correctAnswer);
}

function brainGcd() {
  const userName = greetAndGetUserName('Find the greatest common divisor of given numbers.');

  playGameCycle(userName, playRound);
}

export default brainGcd;
