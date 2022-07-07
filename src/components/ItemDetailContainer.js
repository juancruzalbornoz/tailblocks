import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { listadoProductos } from '../data/asyncMock'
import ItemDetail from './ItemDetail'
import Loader from './Loader';

const ItemDetailContainer = () => {

  const [isLoading, setIsLoading] = useState(true);


  // useEffect(() => {
  //     console.log(listadoProductos)
  //     const getItems = new Promise((resolve) => {
  //         setTimeout(() => {
  //             const myData = listadoProductos.find((item) => item[0].id ==='1');
  //             resolve(myData)
  //             console.log(myData)
  //         }, 1000)
  //     })

  //     getItems.then((res) => {
  //         setProduct(res)
  //     })

  //     console.log(product)
  // })

  const params = useParams()
  const [product, setProduct] = useState({})

  const fetchCard = () => {
    fetch(`https://fakestoreapi.com/products/${params.prodId}`)
      .then(res => res.json())
      .then(json => {
        setProduct(json)
      })
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    setIsLoading(true)
    fetchCard()
  }, [params])

  return isLoading ? (
    <Loader /> 
  ) : (
    <ItemDetail item={product} />
  )
  
}

export default ItemDetailContainer