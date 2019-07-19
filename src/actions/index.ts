import { Action } from 'redux';
import { ItemModel } from '../models';

export const ACTION_CHANGE_INPUT = 'CHANGE_INPUT';
export const ACTION_DATA_REQUESTED = 'DATA_REQUESTED';
export const ACTION_DATA_LOADED = 'DATA_LOADED';
export const ACTION_API_ERRORED = 'API_ERRORED';

export function isAction<A extends Action>(action: Action, type: string): action is A {
  return action.type === type;
}

export interface IActionChangeInput extends Action {
  type: 'CHANGE_INPUT'
  inputValue: string
}

export interface IActionFetchRepos extends Action{
  type: 'DATA_REQUESTED'
  valueForUrl: string
}

export interface IActionDataLoaded extends Action {
  type: 'DATA_LOADED'
  data: ItemModel[]
}

export interface IActionApiErrored extends Action{
  type: 'API_ERRORED'
  errorData: Readonly<{}>
}


export type AppActions = IActionChangeInput | IActionFetchRepos | IActionDataLoaded | IActionApiErrored;

export function changeInput(inputValue: string): IActionChangeInput {
  return { type: ACTION_CHANGE_INPUT, inputValue }
};

export function fetchRepos(valueForUrl: string): IActionFetchRepos {
  return { type: ACTION_DATA_REQUESTED, valueForUrl };
}