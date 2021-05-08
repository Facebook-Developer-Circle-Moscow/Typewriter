import {ActionTypes, ChangeView} from 'actions/view';

export enum Views {
  TEXT_PROVIDER = 'TEXT_PROVIDER',
  TEXT_PRACTICE = 'TEXT_PRACTICE'
}

export type ViewState = {
  view: Views;
};

export const initialState: ViewState = {
  view: Views.TEXT_PROVIDER
};

export const view = (state = initialState, action: ChangeView) => {
  switch (action.type) {
    case ActionTypes.CHANGE_VIEW:
      return {...state, view: action.view};
    default:
      return state;
  }
};
