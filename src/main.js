import readlineSync from 'readline-sync';

const MAX_ROUNDS_COUNT = 3;

const main = (task, generateRound) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
  console.log(task);

  let isUserRight = true;
  for (let i = 0; i < MAX_ROUNDS_COUNT; i += 1) {
    const { question, correct } = generateRound();
    console.log('Question:', question);

    const answer = readlineSync.question('Your answer: ');

    if (correct !== answer) {
      isUserRight = false;
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);

      break;
    }
    console.log('Correct!');
  }

  if (isUserRight) {
    return console.log(`Congratulations, ${userName}!`);
  }

  return console.log(`Let's try again, ${userName}!`);
};

export default main;
