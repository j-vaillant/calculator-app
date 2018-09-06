import stringMath from 'string-math';

import calculatorActions from './actions';


const initialState = {
  mode: 'user',
  input: '',
  subResult: null,
  result: '',
};

const calculator = (state = initialState, action) => {
  switch (action.type) {
    case calculatorActions.TYPE:
      return {
        ...state,
        input: `${state.input}${action.value}`,
      };
    case calculatorActions.CLEAR:
      return {
        ...state,
        input: '',
        result: '',
        subResult: null,
      };
    case calculatorActions.COMPUTE:
      try {
        let computedValue = stringMath(
          state.input
            .replace('\u00F7', '/')
            .replace('\u00D7', '*'),
        );

        if (state.subResult !== null) {
          computedValue += state.subResult;
        }

        return {
          ...state,
          input: '',
          result: computedValue,
          subResult: computedValue,
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
    case calculatorActions.RESET:
      return {
          ...state,
          input: `${action.value}`,
          result: '',
          subResult: null,
        };
    case calculatorActions.CONTINUE:
      return {
          ...state,
          input: `${state.subResult}${action.value}`,
          subResult: null,
        };
    default:
      return state;
  }
};

export default calculator;
