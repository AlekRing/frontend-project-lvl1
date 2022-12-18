import readlineSync from 'readline-sync';

const roundsCount = 3;

const main = (task, generateRound) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);
  console.log(task);

  for (let i = 0; i < roundsCount; i += 1) {
    const { question, correct } = generateRound();
    console.log('Question:', question);

    const answer = readlineSync.question('Your answer: ');

    if (correct !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default main;
