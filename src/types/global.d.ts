import { RouterState } from 'connected-react-router/immutable';
import { Record } from 'immutable';


// Global state
export interface IGlobalState {
  router: RouterState;
}
export interface IGlobalStateRecord extends Record<IGlobalState>, IGlobalState { }

// Interface for async call steps
export interface IAsyncCall {
  REQUESTED: string;
  SUCCESS: string;
  FAILURE: string;
}
