import { Provider } from "react-redux";
import store from "./store";
import { Contador } from "./components/contador/Contador";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import { CrudAPI } from "./components/crud/CrudAPI";

function App() {
  return (
    <Provider store={store}>
      <div style={{ textAlign: "center" }}>
        <h1>Redux</h1>
        <hr />
        <Contador />
        <hr />
        <ShoppingCart />
        <hr />
        <CrudAPI />
      </div>
    </Provider>
  );
}

export default App;
