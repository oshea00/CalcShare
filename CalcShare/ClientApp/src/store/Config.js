
import calcShare from '../apis/calcShare'

const REQUEST_CONFIG = 'REQUEST_CONFIG';
const RECEIVE_CONFIG = 'RECEIVE_CONFIG';

const INITIAL_STATE = { config: null, isLoading: false };

export const actionCreators = {
    requestConfig: () => async (dispatch, getState) => {
        if (getState().isLoading === true)
            return;
        dispatch({ type: REQUEST_CONFIG });

        const url = `Config/Get`;
        const response = await calcShare.get(url);

        dispatch({ type: RECEIVE_CONFIG, payload: response.data });
  }
};

export const reducer = (state = INITIAL_STATE, action) => {

  if (action.type === REQUEST_CONFIG) {
    return {
      ...state,
      isLoading: true
    };
  }

  if (action.type === RECEIVE_CONFIG) {
    return {
      ...state,
      config: action.payload,
      isLoading: false
    };
  }

  return state;
};
