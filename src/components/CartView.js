import React from 'react'
import useCartContext from '../context/CartContext'

// ? detalle de la compra, un listado con los articulos que el usuario compro
// ? precio total
// * carrito compre nombre, cantidad, precio por producto, precio total, foto a cada producto
// & agregarlo al browser router 
// ^ mostar todos los items
// ~ de no haber items mostra un mesaje condicional diciendo que no hay y un link al home
// ! cartwidget: mostrar items agregados, 2 de un mismo item cuenta como, y si no hay mostra solo el icono
// TODO dsadasd

const CartView = () => {

    const { cart, removeFromCart, clearCart } = useCartContext();
    const { calcPriceCart } = useCartContext();




    if (cart.length === 0) {
        return <div style={{ textAlign: 'center' }}>
            <h4>No hay items</h4>
            <a href="/">Volver al carrito</a>
        </div>
    } else {
        return <React.Fragment>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="lg:w-2/3 flex flex-row sm:items-center items-start mx-auto">
                        <h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">El valor de su carrito es de: $ {calcPriceCart()}</h1>
                        <button class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">Pagar</button>
                    </div>
                </div>
            </section>
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="-my-8 divide-y-2 divide-gray-100">
                        {
                            //para mostrar el carrito preguntar si hay
                            cart.map(item => {
                                return <div class="py-8 flex flex-wrap md:flex-nowrap">
                                    <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                        <span class="font-semibold title-font text-gray-700">CATEGORY</span>
                                        <span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                                    </div>
                                    <div class="md:flex-grow">
                                        <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
                                        <p class="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                                        <a href="/" class="text-indigo-500 inline-flex items-center mt-4">Learn More
                                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                        <button onClick={() => removeFromCart(item.id)} style={{ color: "red" }}>X</button>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div class="p-2 w-full">
                    <button onClick={clearCart} class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Vaciar Carrito</button>
                </div>
            </section>
        </React.Fragment>
    }
}

export default CartView