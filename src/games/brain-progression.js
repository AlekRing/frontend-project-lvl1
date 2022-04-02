import main from '../main.js';
import { getRandomNumber } from '../helpers/math.js';

const getProgression = () => {
  const startOfProgression = getRandomNumber();
  const progressionStep = getRandomNumber();

  const progression = [startOfProgression];

  for (let i = 1; i < 10; i += 1) {
    progression[i] = progression[i - 1] + progressionStep;
  }

  return progression;
};

const generate = () => {
  const randomIndex = getRandomNumber(10);

  const progression = getProgression();
  const correct = progression[randomIndex];

  progression[randomIndex] = '..';

  return { question: progression.join(' '), correct: `${correct}` };
};

const brainProgression = () => {
  main('What number is missing in the progression?', generate);
};

export default brainProgression;
