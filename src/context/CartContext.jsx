import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

const CartContext = createContext();
const useCartContext = () => useContext(CartContext);
const { Provider } = CartContext;

// guardar en el estado los items que agreguemoa al cart
// ? 0_ Necesitamos un estado
// ? 1_ agregar items al estado del carrito
// ? 2_ eliminar items del estado del carrito
// ? 3_ limpiar el estado del carrito
// ? 4_ comprobar item Array.some()
// ? 5_ devolver la cantidad de items 
// ? 6_ devolver el costo 

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item, cant) => {
    if (isInCart(item.id)) {
      const newCart = cart.map(cartItem => {
        if (cartItem.id === item.id) {
          const copyItem = {...cartItem};
          copyItem.cant += cant;
          return copyItem;
        } else {
            return cartItem;
        }
      })
      setCart(newCart);
    } else {
      const newItem = { ...item, cant };
      // const newCart = [...cart];
      // newCart.push(newItem);
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (id) => {
    const newCart = [...cart];
    const cartFilter = newCart.filter((item) => {
      return item.id !== id;
    });
    setCart(cartFilter);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  }

  const cantInCart = () => {
    let total = 0;
    cart.forEach(item => total = total + item.cant)
    return total;
    //for each NavBar
    // cart.forEach(item => total = total + item.cant)
  }

  const calcPriceCart = () => {
    //total de la cantidad multiplicada por el precio DESAFIO QUE VIENE
    let total = 0;
    cart.forEach((value, i) => {
        total = total + value.price * value.cant
        console.log(total)
      });
    return total.toFixed(2);
  }

  const contextFunction = () => console.log("contexto listo!");

  return (
    <Provider value={{ contextFunction, 
                    cart, 
                    addToCart, 
                    removeFromCart, 
                    clearCart,
                    cantInCart,
                    isInCart,
                    calcPriceCart
                    }}>
      {children}
    </Provider>
  );
}

export default useCartContext;
