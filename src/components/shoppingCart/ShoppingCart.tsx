/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import { ShoppingState } from "../../reducers/shoppingReducer";
import { Dispatch } from "redux";
import { ShoppingAction, cleanCart } from "../../actions/shoppingCartActions";
import CartItem from "./CartItem";

const ShoppingCart = () => {
  //                  <tipo del state global, tipo del selector>
  const { products, cart } = useSelector<any, ShoppingState>(
    (state) => state.shopping
  );

  const dispatch = useDispatch<Dispatch<ShoppingAction>>();

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <h3>Productos</h3>
      <article className="box grid-responsive">
        {products.map((product) => (
          <ProductItem key={product.id} data={product} />
        ))}
      </article>
      <h3>Carrito</h3>
      <article className="box">
        <button onClick={() => dispatch(cleanCart())}>Limpiar Carrito</button>
        {cart?.map((item, index) => (
          <CartItem key={index} data={item} />
        ))}
      </article>
    </div>
  );
};

export default ShoppingCart;
