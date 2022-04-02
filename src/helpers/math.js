const getRandomNumber = (max = 100) => Math.floor(Math.random() * max);

const findGreatestCommonDivisor = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }

  return findGreatestCommonDivisor(secondNumber, firstNumber % secondNumber);
};

const checkIfIsPrime = (number) => {
  if (number <= 3) return number > 1;
  if ((number % 2 === 0) || (number % 3 === 0)) return false;

  let isPrime = true;

  for (let i = 5; i ** 2 < number; i += 6) {
    if ((number % i === 0) || number % (i + 2) === 0) isPrime = false;
  }
  return isPrime;
};

export {
  getRandomNumber, findGreatestCommonDivisor, checkIfIsPrime,
};
