import main from '../main.js';
import { getRandomNumber, checkIfIsPrime } from '../helpers/math.js';

const primeNumbers = [
  7, 19, 37, 61, 127, 271, 331, 397, 547, 631, 919, 1657, 1801, 1951, 2269,
  2437, 2791, 3169, 3571, 4219, 4447, 5167, 5419, 6211, 7057, 7351, 8269, 9241,
  10267, 11719, 12097, 13267, 13669, 16651, 19441, 19927, 22447, 23497, 24571,
  25117, 26227, 27361, 33391, 35317, 13, 109, 193, 433, 769, 1201, 1453, 2029,
  3469, 3889, 4801, 10093, 12289, 13873, 18253, 20173, 21169, 22189, 28813,
  37633, 43201, 47629, 60493, 63949, 65713, 69313, 73009, 76801, 84673, 106033,
  108301, 112909, 115249,
];

const generate = () => {
  const randomIndex = getRandomNumber(primeNumbers.length);
  const randomChanceToGetPrime = getRandomNumber();

  if (randomChanceToGetPrime <= 40) {
    return { question: primeNumbers[randomIndex], correct: 'yes' };
  }

  const randomNumber = getRandomNumber(1000);
  const isPrime = checkIfIsPrime(randomNumber);

  if (isPrime) {
    return { question: randomNumber, correct: 'yes' };
  }

  return { question: randomNumber, correct: 'no' };
};

const brainPrime = () => {
  main('Answer "yes" if given number is prime. Otherwise answer "no".', generate);
};

export default brainPrime;
