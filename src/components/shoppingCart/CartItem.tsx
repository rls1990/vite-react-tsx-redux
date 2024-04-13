import { useDispatch } from "react-redux";
import { Product } from "../../reducers/shoppingReducer";
import { Dispatch } from "redux";
import {
  ShoppingAction,
  delAllFromCart,
  delOneFromCart,
} from "../../actions/shoppingCartActions";

interface CartItemProps {
  data: Product;
}

const CartItem = ({ data }: CartItemProps) => {
  const { id, name, price, quantity } = data;
  const dispatch = useDispatch<Dispatch<ShoppingAction>>();
  return (
    <div style={{ borderBottom: "thin solid gray", padding: "1rem" }}>
      <h4>{name}</h4>
      <h5>
        {quantity && (
          <>
            ${price}.00 x {quantity} = ${price * quantity}.00
          </>
        )}
      </h5>
      <button onClick={() => dispatch(delOneFromCart(id))}>Eliminar Uno</button>

      <button onClick={() => dispatch(delAllFromCart(id))}>
        Eliminar Todos
      </button>
    </div>
  );
};

export default CartItem;
