/* eslint-disable @typescript-eslint/no-explicit-any */
import { CrudAction } from "../actions/crudActions";
import {
  CREATE_DATA,
  DELETE_DATA,
  NO_DATA,
  READ_ALL_DATA,
  UPDATE_DATA,
} from "../types";

export interface Caballero {
  id: string;
  name: string;
  constelation: string;
}

export interface CrudState {
  db: Caballero[];
}

export const crudInitialState: CrudState = {
  db: [],
};

export const crudReducer = (
  state: CrudState = crudInitialState, //importante
  action: CrudAction
): CrudState => {
  switch (action.type) {
    case READ_ALL_DATA: {
      return {
        ...state,
        db: action.payload
          ? action.payload.map((data: any) => data)
          : crudInitialState,
      };
    }
    case CREATE_DATA: {
      return { ...state, db: state.db && [...state.db, action.payload] };
    }
    case UPDATE_DATA: {
      console.log(action.payload);
      const newData: Caballero[] | null =
        state.db &&
        state.db.map((el) =>
          el.id === action.payload.id ? action.payload : el
        );

      return { ...state, db: newData };
    }

    case DELETE_DATA: {
      console.log(action.payload);
      const newData =
        state.db && state.db.filter((el) => el.id != action.payload);
      return { ...state, db: newData };
    }
    case NO_DATA:
      return crudInitialState;
    default:
      return state;
  }
};
