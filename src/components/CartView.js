import React from 'react'
import useCartContext from '../context/CartContext'
import ItemCart from './ItemCart';

// ? detalle de la compra, un listado con los articulos que el usuario compro
// ? precio total
// * carrito compre nombre, cantidad, precio por producto, precio total, foto a cada producto
// & agregarlo al browser router 
// ^ mostar todos los items
// ~ de no haber items mostra un mesaje condicional diciendo que no hay y un link al home
// ! cartwidget: mostrar items agregados, 2 de un mismo item cuenta como, y si no hay mostra solo el icono

const CartView = () => {

    const { cart } = useCartContext();
    const { calcPriceCart } = useCartContext();

    return (
        <React.Fragment>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="lg:w-2/3 flex flex-row sm:items-center items-start mx-auto">
                        <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">El valor de su carrito es de: $ { calcPriceCart() }</h1>
                        <button class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">Pagar</button>
                    </div>
                </div>
            </section>
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="-my-8 divide-y-2 divide-gray-100">
                        {
                            //para mostrar el carrito preguntar si hay
                            cart.map(item => <ItemCart />)
                        }
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default CartView