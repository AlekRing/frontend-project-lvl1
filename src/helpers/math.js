function getRandomNumber(max = 100) {
  return Math.floor(Math.random() * max);
}

function isNaN(answer) {
  return Number.isNaN(+answer);
}

function findGreatestCommonDivisor(firstNumber, secondNumber) {
  if (!secondNumber) {
    return firstNumber;
  }

  return findGreatestCommonDivisor(secondNumber, firstNumber % secondNumber);
}

export { getRandomNumber, isNaN, findGreatestCommonDivisor };
