import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { listadoProductos } from '../data/asyncMock'
import ItemDetail from './ItemDetail'
import Loader from './Loader';
import { getItem as fetchCard} from '../data';

const ItemDetailContainer = () => {

  const [isLoading, setIsLoading] = useState(true);
  const {prodId} = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    setIsLoading(true)
    fetchCard(prodId).then( (respuestPromise) => {
      setProduct(respuestPromise)
    })
    .finally(() => setIsLoading(false))
  }, [prodId])

  return isLoading ? (
    <Loader /> 
  ) : (
    <ItemDetail item={product} />
  )
  
}

export default ItemDetailContainer