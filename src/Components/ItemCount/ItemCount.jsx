import { useState } from "react";
const ItemCount = ({valInicial, stock}) => {
    const [contador, setContador] = useState(valInicial);
    const aumentar = () => (contador < stock) && setContador(contador+1)
    const disminuir = () => (contador > valInicial) && setContador(contador-1)
    return (
        <div>
            <button className="btn btn-danger" onClick={() => disminuir()}>-</button>
                {contador}
            <button className="btn btn-danger" onClick={() => aumentar()}>+</button>
        </div>
    );
}

export default ItemCount;
