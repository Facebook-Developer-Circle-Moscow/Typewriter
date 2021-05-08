import {CharacterStatus} from 'reducers/text';

export enum ActionTypes {
  CHANGE_TEXT = '[TEXT] CHANGE_TEXT',
  PUSH_STATUS = '[TEXT] PUSH_STATUS',
  SET_POSITION = '[TEXT] SET_POSITION'
}

export interface ChangeText {
  type: ActionTypes.CHANGE_TEXT;
  text: string;
}

export interface PushStatus {
  type: ActionTypes.PUSH_STATUS;
  status: CharacterStatus;
}

export interface SetPosition {
  type: ActionTypes.SET_POSITION;
  position: number;
}

export const changeText = (text: string): ChangeText => ({
  type: ActionTypes.CHANGE_TEXT,
  text
});

export const pushStatus = (status: CharacterStatus): PushStatus => ({
  type: ActionTypes.PUSH_STATUS,
  status
});


export const setPosition = (position: number): SetPosition => ({
  type: ActionTypes.SET_POSITION,
  position
});
