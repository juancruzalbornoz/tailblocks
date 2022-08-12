import React from 'react'
import ItemCount from './ItemCount'
import useCartContext from '../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {
  const { isInCart } = useCartContext();

  const { contextFunction } = useCartContext();
  contextFunction();

  const { addToCart } = useCartContext();

  const onAdd = (count) => {
    console.log(`PRODUCTOS AGREGADOS ${count} items`);
    addToCart(item, count);
  }


  return (
    <section class="text-gray-600 body-font overflow-hidden">
      <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
          <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 class="text-sm title-font text-gray-500 tracking-widest">{item.category}</h2>
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">{item.title}</h1>
            <p class="leading-relaxed mb-4">{item.description}</p>
            <span class="title-font font-medium text-2xl text-gray-900">${item.price}</span>

            <div class="flex">
              {isInCart(item.id) ? <Link to="/cart"><button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Terminar compra</button></Link> : <ItemCount item={item} stock={5} initial={0} onAdd={onAdd} />}

            </div>

          </div>
          <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded" src={item.image} />
        </div>
      </div>
    </section>
  )
}

export default ItemDetail