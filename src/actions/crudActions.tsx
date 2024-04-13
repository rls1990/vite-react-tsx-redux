import {
  CREATE_DATA,
  DELETE_DATA,
  NO_DATA,
  READ_ALL_DATA,
  UPDATE_DATA,
} from "../types";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface CrudAction {
  type: string;
  payload?: any;
}

export const readAllAction = (data: any): CrudAction => ({
  type: READ_ALL_DATA,
  payload: data,
});
export const createAction = (data: any): CrudAction => ({
  type: CREATE_DATA,
  payload: data,
});
export const updateAction = (data: any): CrudAction => ({
  type: UPDATE_DATA,
  payload: data,
});
export const deleteAction = (id: number): CrudAction => ({
  type: DELETE_DATA,
  payload: id,
});
export const noAction = (): CrudAction => ({
  type: NO_DATA,
});
