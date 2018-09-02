const OPERATORS = ['*', '/', '+', '-'];

function* randomValue() {
  while (true) {
    yield Math.floor((Math.random() * 10) + 1);
  }
}

function* randomOperator() {
  while (true) {
    yield OPERATORS[Math.floor((Math.random() * 4))];
  }
}

const genNumber = randomValue();
const genOperator = randomOperator();

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
  monkeyType: () => (dispatch) => {
    const interval = setInterval(() => {
      dispatch((calculatorActions.type(genNumber.next().value)));
      setTimeout(() => dispatch((calculatorActions.type(genNumber.next().value))), 100);
      setTimeout(() => dispatch((calculatorActions.type(genOperator.next().value))), 200);
      setTimeout(() => dispatch((calculatorActions.type(genNumber.next().value))), 300);
      setTimeout(() => dispatch((calculatorActions.type(genNumber.next().value))), 400);
      setTimeout(() => dispatch((calculatorActions.compute())), 500);
    }, 1500);

    window.setTimeout(() => {
      clearInterval(interval);
    }, 20000);
  },
};

export default calculatorActions;
