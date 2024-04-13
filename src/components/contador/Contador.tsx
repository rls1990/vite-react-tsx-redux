/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDispatch, useSelector } from "react-redux";
import {
  ContadorAction,
  reset,
  restar,
  restar_5,
  sumar,
  sumar_5,
} from "../../actions/contadorActions";
import { Dispatch } from "redux";

export const Contador = () => {
  const contador = useSelector((state: any) => state.contador);
  const dispatch = useDispatch<Dispatch<ContadorAction>>();

  return (
    <div>
      <h2>Contador Redux</h2>
      <nav>
        <button onClick={() => dispatch(restar_5())}>-5</button>
        <button onClick={() => dispatch(restar())}>-</button>
        <button onClick={() => dispatch(reset())}>0</button>
        <button onClick={() => dispatch(sumar())}>+</button>
        <button onClick={() => dispatch(sumar_5())}>+5</button>
      </nav>
      <h3>{contador}</h3>
    </div>
  );
};
