import { ContadorAction } from "../actions/contadorActions";
import {
  DECREMENT,
  DECREMENT_5,
  INCREMENT,
  INCREMENT_5,
  RESET,
} from "../types";

const initialState = 0;

const contadorReducer = (
  state: number = initialState,
  action: ContadorAction
) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case INCREMENT_5:
      return action.payload ? state + action.payload : initialState;
    case DECREMENT_5:
      return action.payload ? state - action.payload : initialState;
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default contadorReducer;
