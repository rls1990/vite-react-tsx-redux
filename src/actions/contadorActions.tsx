import {
  DECREMENT,
  DECREMENT_5,
  INCREMENT,
  INCREMENT_5,
  RESET,
} from "../types";

export interface ContadorAction {
  type: string;
  payload?: number;
}

export const sumar = (): ContadorAction => ({ type: INCREMENT });
export const sumar_5 = (): ContadorAction => ({
  type: INCREMENT_5,
  payload: 5,
});
export const restar = (): ContadorAction => ({ type: DECREMENT });
export const restar_5 = (): ContadorAction => ({
  type: DECREMENT_5,
  payload: 5,
});
export const reset = (): ContadorAction => ({ type: RESET });
