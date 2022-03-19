const alowedOperations = [
  {
    operator: '+',
    operation(a, b) {
      return a + b;
    },
  },
  {
    operator: '-',
    operation(a, b) {
      return a - b;
    },
  },
  {
    operator: '*',
    operation(a, b) {
      return a * b;
    },
  },
];

export default alowedOperations;
