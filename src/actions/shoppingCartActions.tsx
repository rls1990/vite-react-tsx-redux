import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_ONE_FROM_CART,
} from "../types";

export interface ShoppingAction {
  type: string;
  payload?: number;
}

export const addToCart = (id: number): ShoppingAction => ({
  type: ADD_TO_CART,
  payload: id,
});
export const delOneFromCart = (id: number): ShoppingAction => ({
  type: REMOVE_ONE_FROM_CART,
  payload: id,
});
export const delAllFromCart = (id: number): ShoppingAction => ({
  type: REMOVE_ALL_FROM_CART,
  payload: id,
});
export const cleanCart = (): ShoppingAction => ({
  type: CLEAR_CART,
});
