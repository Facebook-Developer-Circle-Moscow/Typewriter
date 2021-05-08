import thunk from 'redux-thunk';

import * as reduxDevTools from 'redux-devtools-extension/developmentOnly';

import { createStore as createStoreRedux, applyMiddleware } from 'redux';

import { reducers } from 'reducers/index';
import { TextState } from 'reducers/text';
import { ViewState } from 'reducers/view';

export type State = {
  text: TextState;
  view: ViewState;
};

export const createStore = (initialState: State) => {
  return createStoreRedux(reducers, initialState, reduxDevTools.composeWithDevTools(applyMiddleware(thunk)));
};
