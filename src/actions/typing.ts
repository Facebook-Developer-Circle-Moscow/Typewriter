import {State, Stats} from 'models/typing';

export enum ActionTypes {
  SET_TEXT = '[TYPING] SET_TEXT',
  SET_STAT = '[TYPING] SET_STAT',
  CHANGE_STATE = '[TYPING] CHANGE_STATE'
}

export interface SetText {
  type: ActionTypes.SET_TEXT;
  text: string;
}

export interface SetStat {
  type: ActionTypes.SET_STAT;
  stats: Stats[];
}

export interface ChangeState {
  type: ActionTypes.CHANGE_STATE;
  state: State;
}

export const setText = (text: string): SetText => ({
  type: ActionTypes.SET_TEXT,
  text
});

export const setStat = (stats: Stats[]): SetStat => ({
  type: ActionTypes.SET_STAT,
  stats
});

export const changeState = (state: State): ChangeState => ({
  type: ActionTypes.CHANGE_STATE,
  state
});
