const INCREMENT_COUNT = 'INCREMENT_COUNT';
const DECREMENT_COUNT = 'DECREMENT_COUNT';
const INITIAL_STATE = { count: 0 };

export const actionCreators = {
  increment: () => ({ type: INCREMENT_COUNT }),
  decrement: () => ({ type: DECREMENT_COUNT })
};

export const reducer = (state = INITIAL_STATE, action) => {
 
  if (action.type === INCREMENT_COUNT) {
    return { ...state, count: state.count + 1 };
  }

  if (action.type === DECREMENT_COUNT) {
    return { ...state, count: state.count - 1 };
  }

  return state;
};
