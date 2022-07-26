import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { listadoProductos } from '../data/asyncMock';
import ItemList from './ItemList';
import Loader from './Loader';
import { getAllItems as getProductos, getItemsByCategory} from '../data/index';

const ItemListContainer = ({ grettings }) => {

    const { idCategory } = useParams()

    const [productos, setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setIsLoading(true)
        // const getProductos = () => {
        //     return new Promise((resolve, reject) => {
        //         setTimeout(() => {
        //             const myData = idCategory
        //                 ? listadoProductos.filter(item => item.category === idCategory)
        //                 : listadoProductos

        //             resolve(myData)
        //         }, 300)
        //     })
        // }

        if (idCategory === undefined){
            getProductos()
            .then(res => setProductos(res))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false))
        } else {
            getItemsByCategory(idCategory)
            .then(res => setProductos(res))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false))
        }

    }, [idCategory])

    // useEffect(() => {
    //   fetch('../../public/data/data.json')
    //     .then(res => res.json())
    //     .then(data => setProductosFetch(data))
    //     .catch(err => console.log(err))
    // },[])

    // console.log("productosFetcj", productosFetch)

    return isLoading ? ( 
            <Loader />
            ) : (
                <>
                    <h1 style={{ textAlign: 'center' }}>{grettings}</h1>
                    <ItemList items={productos} />
                </>
        )
}

export default ItemListContainer