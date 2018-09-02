import stringMath from 'string-math';

import calculatorActions from './actions';


const initialState = {
  mode: 'user',
  input: '',
  result: '',
  done: false,
};

const calculator = (state = initialState, action) => {
  switch (action.type) {
    case calculatorActions.TYPE:

      if (state.result === 'Error') {
        return {
          ...state,
          input: `${action.value}`,
          result: '',
        };
      }

      if (state.done) {
        return {
          ...state,
          input: `${action.value}`,
          done: false,
          result: '',
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
      };
    case calculatorActions.COMPUTE:
      try {
        const computedValue = stringMath(
          state.input
            .replace('\u00F7', '/')
            .replace('\u00D7', '*'),
        );

        return {
          ...state,
          input: '',
          result: computedValue,
          done: true,
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
