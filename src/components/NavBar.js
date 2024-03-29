import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'
import useCartContext from '../context/CartContext'

const NavBar = () => {
    const { contextFunction } = useCartContext();
    contextFunction();

    const [categories, setCategories] = useState([])

    const fetchCategories = () => {
        fetch(`https://fakestoreapi.com/products/categories`)
            .then(res => res.json())
            .then(json => {
                setCategories(json)
            })
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    return (
        <>
            <header class="top-0 text-gray-600 body-font">
                <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to={"/"} class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span class="ml-3 text-xl">Mi Tienda</span>
                    </Link>
                    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        {categories.map(category => <NavLink key={category} style={{ padding: '1em' }} to={`/category/${category}`} class="mr-5 hover:text-gray-900">{category}</NavLink>)}
                    </nav>
                    <Link to={"/cart"}>
                        <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"><CartWidget />
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </Link>

                </div>
            </header>
        </>
    )
}

export default NavBar