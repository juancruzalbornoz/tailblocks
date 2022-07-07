import React from 'react'
import CartWidget from './CartWidget'

const Flotante = () => {
    return (
        <>
            <button style={{ position: 'fixed', top: '70%', right: 40, padding: '1em' }} type="button" class="text-gray-900 
            bg-gradient-to-r 
            from-red-200 
            ia-red-300 
            to-yellow-200 
            hover:bg-gradient-to-bl 
            focus:ring-4 
            focus:outline-none 
            focus:ring-red-100 
            dark:focus:ring-red-400 
            font-medium rounded-lg 
            text-sm px-5 py-2.5 
            text-center mr-2 mb-2"><CartWidget /></button>
        </>
    )
}

export default Flotante