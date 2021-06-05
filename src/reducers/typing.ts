import {ActionTypes, ChangeState, SetStat, SetText} from 'actions/typing';

import {State, Stats} from 'models/typing';

export type TypingState = {
  text: string;
  state: State;
  stats: Stats[];
};

export const initialState: TypingState = {
  text: '',
  state: State.PROVIDER,
  stats: [],
};

export const typing = (state = initialState, action: SetText | SetStat | ChangeState) => {
  switch (action.type) {
    case ActionTypes.SET_TEXT:
      return {...state, text: action.text};
    case ActionTypes.SET_STAT:
      return {...state, stats: action.stats};
    case ActionTypes.CHANGE_STATE:
      return {...state, state: action.state};
    default:
      return state;
  }
};
