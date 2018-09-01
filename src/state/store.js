import { createStore } from 'redux';

import reducer from './reducer';

const initializeStore = () => {
  return createStore(reducer);
};

export { initializeStore }