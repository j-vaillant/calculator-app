const calculatorActions = {
  TYPE: 'TYPE',
  type: value => ({
    value,
    type: calculatorActions.TYPE,
  }),
  CLEAR: 'CLEAR',
  clear: () => ({
    type: calculatorActions.CLEAR,
  }),
  COMPUTE: 'COMPUTE',
  compute: () => ({
    type: calculatorActions.COMPUTE,
  }),
};

export default calculatorActions;
