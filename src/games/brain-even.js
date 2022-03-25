import log from '../helpers/log.js';
import { getRandomNumber } from '../helpers/math.js';
import {
  greetAndGetUserName,
  playGameCycle,
  askAnswer,
} from '../index.js';

function checkNumberIfEven(number) {
  return number % 2 === 0;
}

function checkAnswer(answer, isEven) {
  if ((isEven && answer === 'yes') || (!isEven && answer === 'no')) {
    return true;
  }
  return false;
}

function getCorrectAnswer(answer, isRightAnswer) {
  if (isRightAnswer) return answer;

  return answer === 'yes' ? 'no' : 'yes';
}

function playRound() {
  const randomNumber = getRandomNumber();

  log('Question: ', randomNumber);

  const answer = askAnswer();

  const isNumberEven = checkNumberIfEven(randomNumber);
  const isRightAnswer = checkAnswer(answer, isNumberEven);
  const correctAnswer = getCorrectAnswer(answer, isRightAnswer);

  if (isRightAnswer) log('Correct!');

  return { isRightAnswer, answer, correctAnswer };
}

function brainEven() {
  const userName = greetAndGetUserName('Answer "yes" if the number is even, otherwise answer "no".');

  playGameCycle(userName, playRound);
}

export default brainEven;
