import { calculatorActions } from './actions';

const initialState = {
  input: '',
};

const calculator = (state = initialState, action) => {
  switch (action.type) {
    case calculatorActions.TYPE_NUMBER:
      return {
        ...state,
        input: `${state.input}${action.digit}`,
      };
    default:
      return state;
  }
};

export default calculator;
