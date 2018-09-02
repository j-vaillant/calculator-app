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
  SWITCH_MODE: 'SWITCH_MODE',
  switchMode: mode => ({
    mode,
    type: calculatorActions.SWITCH_MODE,
  }),
};

export default calculatorActions;
