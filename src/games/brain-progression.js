import log from '../helpers/log.js';
import { getRandomNumber } from '../helpers/math.js';
import {
  greetAndGetUserName,
  playGameCycle,
  getAndCheckAnswerStage,
} from '../index.js';

function getProgression() {
  const startOfProgression = getRandomNumber();
  const progressionStep = getRandomNumber();

  const progression = [startOfProgression];

  for (let i = 1; i < 10; i += 1) {
    progression[i] = progression[i - 1] + progressionStep;
  }

  return progression;
}

function playRound() {
  const randomIndex = getRandomNumber(10);

  const progression = getProgression();
  const correctAnswer = progression[randomIndex];

  progression[randomIndex] = '..';

  log('Question:', progression.join(' '));

  return getAndCheckAnswerStage(correctAnswer);
}

function brainProgression() {
  const userName = greetAndGetUserName('What number is missing in the progression?');

  playGameCycle(userName, playRound);
}

export default brainProgression;
