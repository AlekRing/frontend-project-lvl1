const getRandomNumber = (max = 100) => Math.floor(Math.random() * max);

const findGCD = (firstNumber, secondNumber) => {
  if (secondNumber !== 0) {
    const k = firstNumber % secondNumber;
    return findGCD(secondNumber, k);
  }
  return firstNumber;
};

const isPrime = (number) => {
  if (number <= 3) return number > 1;
  if ((number % 2 === 0) || (number % 3 === 0)) return false;

  for (let i = 5; i ** 2 < number; i += 6) {
    if ((number % i === 0) || number % (i + 2) === 0) return false;
  }

  return true;
};

export {
  getRandomNumber, findGCD, isPrime,
};
