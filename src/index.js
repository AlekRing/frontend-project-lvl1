import readlineSync from 'readline-sync';
import log from './helpers/log.js';

export const MAX_ROUNDS_COUNT = 3;

function getUserName() {
  return readlineSync.question('May I have your name? ');
}

export function greetAndGetUserName(greeting = 'Hi') {
  console.log('Welcome to the Brain Games!');

  const userName = getUserName();

  console.log(`${greeting} ${userName}!`);

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

  return log('Something is wrong!');
}

export function askAnswer() {
  return readlineSync.question('Your answer: ');
}
