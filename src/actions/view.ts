import {Views} from 'reducers/view';

export enum ActionTypes {
  CHANGE_VIEW = '[VIEW] CHANGE_VIEW'
}

export interface ChangeView {
  type: ActionTypes.CHANGE_VIEW;
  view: Views;
}

export const changeView = (view: Views): ChangeView => ({
  type: ActionTypes.CHANGE_VIEW,
  view
});
