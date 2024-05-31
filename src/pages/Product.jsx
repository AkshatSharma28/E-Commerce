import React from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCrum from '../components/BreadCrums/BreadCrum'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'
import { useContext } from 'react'
import DescriptionBox from '../components/DescriptionBox/DescriptionBox'

const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
      <BreadCrum product = {product}/>
      <ProductDisplay product = {product}/>
      <DescriptionBox/>
    </div>
  )
}

export default Product
