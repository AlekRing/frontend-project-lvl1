import readlineSync from 'readline-sync';
import { isNaN, getRandomNumber } from './helpers/math.js';
import log from './helpers/log.js';

export const MAX_ROUNDS_COUNT = 3;

function getUserName() {
  return readlineSync.question('May I have your name? ');
}

export function greetAndGetUserName(task = '') {
  log('Welcome to the Brain Games!');

  const userName = getUserName();

  log(`Hello, ${userName}!`);
  log(task);

  return userName;
}

export function finishGame(isUserRight, userName, wrongAnswerMessage) {
  if (isUserRight) {
    return log(`Congratulations, ${userName}!`);
  }

  wrongAnswerMessage();

  return log(`Let's try again, ${userName}!`);
}

export const handleWrongAnswer = (answer, correctAnswer) => () => {
  log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
};

export function playGameCycle(userName, playRound, rounds = MAX_ROUNDS_COUNT) {
  for (let round = 1; round <= rounds; round++) {
    const { isRightAnswer, answer, correctAnswer } = playRound();

    if (round === rounds || !isRightAnswer) {
      return finishGame(isRightAnswer, userName, handleWrongAnswer(answer, correctAnswer));
    }
  }

  return log('"playGameCycle" arguments are incorrect!');
}

export function startRound(sayQuestion) {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();

  sayQuestion(firstNumber, secondNumber);

  return { firstNumber, secondNumber };
}

export function askAnswer() {
  return readlineSync.question('Your answer: ');
}

export function checkAnswer(answer, correctAnswer) {
  if (isNaN(answer)) return false;

  return +answer === correctAnswer;
}

function checKStringAnswer(answer, correctAnswer) {
  return answer === correctAnswer;
}

export function getAndCheckAnswerStage(correctAnswer) {
  const answer = askAnswer();

  const isRightAnswer = typeof (correctAnswer) === 'number' ? checkAnswer(answer, correctAnswer) : checKStringAnswer(answer, correctAnswer);

  if (isRightAnswer) log('Correct!');

  return { isRightAnswer, answer, correctAnswer };
}
