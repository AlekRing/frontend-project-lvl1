import log from '../helpers/log.js';
import { getRandomNumber, checkIfIsPrime } from '../helpers/math.js';
import {
  greetAndGetUserName,
  playGameCycle,
  getAndCheckAnswerStage,
} from '../index.js';

import primeNumbers from '../data/primeNumbers.js';

function initiatePositiveAnswerRound(number) {
  const correctAnswer = 'yes';
  log('Question:', number);

  return getAndCheckAnswerStage(correctAnswer);
}

function initiateNegativeAnswerRound(number) {
  const correctAnswer = 'no';
  log('Question:', number);

  return getAndCheckAnswerStage(correctAnswer);
}

function playRound() {
  const randomIndex = getRandomNumber(primeNumbers.length);
  const randomChanceToGetPrime = getRandomNumber();

  if (randomChanceToGetPrime <= 100) {
    return initiatePositiveAnswerRound(primeNumbers[randomIndex]);
  }

  const randomNumber = getRandomNumber(1000);
  const isPrime = checkIfIsPrime(randomNumber);

  if (isPrime) {
    return initiatePositiveAnswerRound(randomNumber);
  }

  return initiateNegativeAnswerRound(randomNumber);
}

function brainPrime() {
  const userName = greetAndGetUserName('Answer "yes" if given number is prime. Otherwise answer "no".');

  playGameCycle(userName, playRound);
}

export default brainPrime;
