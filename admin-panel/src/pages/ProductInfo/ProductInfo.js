import React from 'react'
import { useParams } from 'react-router-dom'

const ProductInfo = () => {
    const {productId} = useParams()
  return (
    <div>Chosen product is: {productId}</div>
  )
}

export default  ProductInfo;
