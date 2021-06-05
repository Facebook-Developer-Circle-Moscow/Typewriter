import thunk from 'redux-thunk';

import * as reduxDevTools from 'redux-devtools-extension/developmentOnly';

import {createStore as createStoreRedux, applyMiddleware} from 'redux';

import {reducers} from 'reducers/index';
import {TypingState} from 'reducers/typing';

export type State = {
  typing: TypingState;
};

export const createStore = (initialState: State) => {
  return createStoreRedux(reducers, initialState, reduxDevTools.composeWithDevTools(applyMiddleware(thunk)));
};
