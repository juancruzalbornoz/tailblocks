import { useState } from 'react';
import { createContext } from 'react'
import { useContext } from 'react';

const CartContext = createContext();
const useCartContext = () => useContext(CartContext);
const { Provider } = CartContext;

// guardar en el estado los items que agreguemoa al cart
// ? 0_ Necesitamos un estado
// ? 1_ agregar items al estado del carrito
// * 2_ eliminar items del estado del carrito
// 3_ limpiar el estado del carrito
// 4_ obtener el estado del carrito
// 5_ obtener el total del carrito
// 6_ vcomporar si x item estan el carrito

export function CartContextProvider({children}) {
    const [cart, setCart] = useState([]);

    const addToCart = (item, cant) => {
        const newItem = {...item, cant};
        // const newCart = [...cart];
        // newCart.push(newItem);
        setCart([...cart, newItem])
    }

    const contextFunction = () => console.log("contexto listo!")

    return (
        <Provider value={{contextFunction, cart, addToCart}}>{children}</Provider>
    )
}


export default useCartContext;