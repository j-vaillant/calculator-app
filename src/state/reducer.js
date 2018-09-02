import stringMath from 'string-math';

import calculatorActions from './actions';


const initialState = {
  mode: 'user',
  input: '',
  tmpValue: null,
  result: '',
};

const IS_DIGIT = /([0-9]){1}/;
const IS_OPERATOR = /([\u00F7\u00D7\+\-]){1}/;

const calculator = (state = initialState, action) => {
  switch (action.type) {
    case calculatorActions.TYPE:

      if (state.result === 'Error') {
        return {
          ...state,
          input: `${action.value}`,
          result: '',
          tmpValue: null,
        };
      }

      if (state.tmpValue && action.value === '.') {
        return {
          ...state,
          input: '0.',
          result: '',
          tmpValue: null,
        };
      }

      // = previously typed and another operator is sent
      // means computes are not finished yet...
      if (state.tmpValue && IS_OPERATOR.test(action.value)) {
        return {
          ...state,
          input: `${state.tmpValue}${action.value}`,
          tmpValue: null,
        };
      }

      // = previously typed and new digit is sent
      // means we start a new compute
      if (state.tmpValue && IS_DIGIT.test(action.value)) {
        return {
          ...state,
          input: `${action.value}`,
          result: '',
          tmpValue: null,
        };
      }

      return {
        ...state,
        input: `${state.input}${action.value}`,
      };
    case calculatorActions.CLEAR:
      return {
        ...state,
        input: '',
        result: '',
        tmpValue: null,
      };
    case calculatorActions.COMPUTE:
      try {
        let computedValue = stringMath(
          state.input
            .replace('\u00F7', '/')
            .replace('\u00D7', '*'),
        );

        if (state.tmpValue !== null) {
          computedValue += state.tmpValue;
        }

        return {
          ...state,
          input: '',
          result: computedValue,
          tmpValue: computedValue,
        };
      } catch (e) {
        return {
          ...state,
          input: '',
          result: 'Error',
        };
      }
    case calculatorActions.SWITCH_MODE:
      return {
        ...state,
        mode: action.mode,
      };
    default:
      return state;
  }
};

export default calculator;
