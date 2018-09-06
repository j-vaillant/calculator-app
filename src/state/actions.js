const OPERATORS = ['*', '/', '+', '-'];
const IS_DIGIT = /([0-9]){1}/;
const IS_OPERATOR = /([\u00F7\u00D7\+\-]){1}/;

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

function monkey (dispatch) {
  dispatch((calculatorActions.type(genNumber.next().value)));
  setTimeout(() => dispatch((calculatorActions.type(genNumber.next().value))), 100);
  setTimeout(() => dispatch((calculatorActions.type(genOperator.next().value))), 200);
  setTimeout(() => dispatch((calculatorActions.type(genNumber.next().value))), 300);
  setTimeout(() => dispatch((calculatorActions.type(genNumber.next().value))), 400);
  setTimeout(() => dispatch((calculatorActions.compute())), 500);
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
  RESET: 'RESET',
  reset: (value) => ({
    value,
    type: calculatorActions.RESET,
  }),
  COMPUTE: 'COMPUTE',
  compute: () => ({
    type: calculatorActions.COMPUTE,
  }),
  CONTINUE: 'CONTINUE',
  continue: (value) => ({
    value,
    type: calculatorActions.CONTINUE,
  }),
  SWITCH_MODE: 'SWITCH_MODE',
  switchMode: mode => ({
    mode,
    type: calculatorActions.SWITCH_MODE,
  }),
  analyseType: (value) => (dispatch, getState) => {
    const { result, subResult } = getState();

    if (result === 'Error') {
      return dispatch(calculatorActions.reset(value))
    }

    // "="" previously typed and another operator is sent
    // means computes are not finished yet...
    if (subResult && IS_OPERATOR.test(value)) {
      return dispatch(calculatorActions.continue(value))
    }
    
    // "="" previously typed and new digit is sent
    // means we start a new compute
    if (subResult && IS_DIGIT.test(value)) {
      return dispatch(calculatorActions.reset(value))
    }

    return  dispatch(calculatorActions.type(value))
  },
  monkeyType: () => (dispatch) => {
    monkey(dispatch);
    
    const interval = setInterval(() => {
     monkey(dispatch)
    }, 1500);

    window.setTimeout(() => {
      clearInterval(interval);
    }, 20000);
  },
};

export default calculatorActions;
