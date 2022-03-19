function getRandomNumber(max = 100) {
  return Math.floor(Math.random() * max);
}

function isNaN(answer) {
  return Number.isNaN(+answer);
}

export { getRandomNumber, isNaN };
