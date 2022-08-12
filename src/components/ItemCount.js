import React from "react";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2';

function ItemCount({ item, stock, initial, onAdd }) {
    const [num, setNum] = useState(initial);

    useEffect(() => {
        if (num === stock - 2) {
            Swal.fire({
                title: 'Atencion!',
                text: 'Quedan pocas unidades',
                icon: 'warning',
                timer: 2000
            });
        }
    }, [num, stock])

    const sumar = () => {
        if (num < stock) {
            setNum(num + 1);
        } else {
            Swal.fire({
                title: 'Atencion!',
                text: 'Alcanzo el maximo de Stock',
                icon: 'warning',
                timer: 2000
            });
        }
    }

    const resta = () => {
        if (num > initial) {
            setNum(num - 1);
        }

    }

    return (
        <div class="flex-col" style={{ padding: '1em' }}>
            <div class="flex space-x-4 items-center" style={{ padding: '1em'}}>
                <h3>{num}</h3>
                <p>{stock > 1 ? `${stock} unidades disponibles` : `${stock} unidad disponible`}</p>
            </div>
            <div class="flex space-x-4 " style={{ padding: '1em' }}>
                <button onClick={sumar} class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">+</button>
                <button onClick={resta} class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">-</button>
                
                <button onClick={()=> onAdd(num)} class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">{num > 0 ? `Agregar ${num} al carrito` : `Elegi tu cantidad`}</button>

            </div>
        </div>
    );
}
export default ItemCount;