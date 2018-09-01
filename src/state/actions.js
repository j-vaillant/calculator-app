const calculatorActions = {
  TYPE_NUMBER: 'TYPE_NUMBER',
  typeNumber: (digit) => ({
    digit,
    type: calculatorActions.TYPE_NUMBER,
  }),
};

export { calculatorActions }
