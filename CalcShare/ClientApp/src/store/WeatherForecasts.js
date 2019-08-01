import calcShare from '../apis/calcShare';

const REQUEST_WEATHER_FORECASTS = 'REQUEST_WEATHER_FORECASTS';
const RECEIVE_WEATHER_FORECASTS = 'RECEIVE_WEATHER_FORECASTS';

const INITIAL_STATE = { forecasts: [], isLoading: false };

export const actionCreators = {
    requestWeatherForecasts: (startDateIndex, idToken) => async (dispatch, getState) => {

    if (startDateIndex === getState().weatherForecasts.startDateIndex) {
      // Don't issue a duplicate request (we already have or are loading the requested data)
      return;
    }
    dispatch({ type: REQUEST_WEATHER_FORECASTS, payload: startDateIndex });

    const url = `SampleData/WeatherForecasts?startDateIndex=${startDateIndex}`;
    const response = await calcShare.get(url, {
          headers: {
              Authorization: `Bearer ${idToken}`
          }
    });
    const forecasts = response.data;
    dispatch({ type: RECEIVE_WEATHER_FORECASTS, payload: { startDateIndex, forecasts } });
  }
};

export const reducer = (state = INITIAL_STATE, action) => {

  if (action.type === REQUEST_WEATHER_FORECASTS) {
    return {
      ...state,
      startDateIndex: action.payload.startDateIndex,
      isLoading: true
    };
  }

  if (action.type === RECEIVE_WEATHER_FORECASTS) {
    return {
      ...state,
      startDateIndex: action.payload.startDateIndex,
      forecasts: action.payload.forecasts,
      isLoading: false
    };
  }

  return state;
};
