import {ActionTypes, ChangeText, PushStatus, SetPosition} from 'actions/text';

export enum CharacterStatus {
  RIGHT,
  WRONG
}

export type TextState = {
  value: string;
  status: CharacterStatus[],
  position: number;
};

export const initialState: TextState = {
  value: '',
  status: [],
  position: 0,
};

export const text = (state = initialState, action: ChangeText | PushStatus | SetPosition) => {
  switch (action.type) {
    case ActionTypes.CHANGE_TEXT:
      return {...state, position: 0, status: [] as CharacterStatus[], value: action.text};
    case ActionTypes.PUSH_STATUS:
      return {...state, status: [...state.status, action.status]};
    case ActionTypes.SET_POSITION:
      return {...state, position: action.position, status: state.status.slice(0, action.position)};
    default:
      return state;
  }
};
