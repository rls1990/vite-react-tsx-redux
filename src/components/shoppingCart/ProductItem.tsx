import { useDispatch } from "react-redux";
import { Product } from "../../reducers/shoppingReducer";
import { Dispatch } from "redux";
import { ShoppingAction, addToCart } from "../../actions/shoppingCartActions";

interface ProductItemProps {
  data: Product;
}

const ProductItem = ({ data }: ProductItemProps) => {
  const { id, name, price } = data;
  const dispatch = useDispatch<Dispatch<ShoppingAction>>();
  return (
    <div style={{ border: "thin solid gray", padding: "1rem" }}>
      <h4>{name}</h4>
      <h5>${price}.00</h5>
      <button onClick={() => dispatch(addToCart(id))}>Agregar</button>
    </div>
  );
};

export default ProductItem;
