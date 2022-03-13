import readlineSync from 'readline-sync';

let IS_UER_RIGHT = true;
let IS_EVEN = false;
let USER_ANSWER = '';

function getRandomNumber() {
  return Math.floor(Math.random() * 100);
}

function checkNumberIfEven(number) {
  return number % 2 === 0;
}

function log(message, value = '') {
  console.log(message, value);
}

function checkAnswer(answer, number) {
  const isEven = checkNumberIfEven(number);

  IS_EVEN = isEven;

  if ((isEven && answer === 'yes') || (!isEven && answer === 'no')) {
    return true;
  }
  return false;
}

function playRound() {
  const randomNumber = getRandomNumber();

  log('Question: ', randomNumber);

  const answer = readlineSync.question('Your answer: ');

  USER_ANSWER = answer;

  return checkAnswer(answer, randomNumber);
}

function finishGame(userName) {
  if (IS_UER_RIGHT) {
    return log(`Congratulations, ${userName}!`);
  }

  if (!IS_EVEN) {
    log(`'${USER_ANSWER}' is wrong answer ;(. Correct answer was 'no'.`);
  } else {
    log(`'${USER_ANSWER}' is wrong answer ;(. Correct answer was 'yes'.`);
  }

  return log(`Let's try again, ${userName}!`);
}

function greet() {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hi ${userName}!`);

  return userName;
}

function brainEven() {
  const userName = greet();

  log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let round = 0; round < 3 && IS_UER_RIGHT !== false; round++) {
    IS_UER_RIGHT = playRound();
  }

  finishGame(userName);
}

export default brainEven;
