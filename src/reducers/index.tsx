import { combineReducers } from "redux";
import contadorReducer from "./contadorReducer";
import { shoppingReducer } from "./shoppingReducer";
import { crudReducer } from "./crudReducer";

const state = {
  contador: contadorReducer,
  shopping: shoppingReducer,
  crud: crudReducer,
};

// const reducer = combineReducers({
//   contador: contadorReducer,
// });

const reducer = combineReducers(state);

export default reducer;
