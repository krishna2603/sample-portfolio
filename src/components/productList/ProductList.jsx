import React from 'react'
import Product from '../product/Product'
import './productList.css'
import { products } from '../../data'
const ProductList = () => {
    return (
        <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Learn, Collaborate & Build.</h1>
        <p className="pl-desc">
          I am newbie in coding and I dont have projects to showcase, so I left them vacant. However, no ifs, and, or buts I will finish those off. 
        </p>
      </div>
      <div className="pl-list">
      {products.map((item)=>(
        <Product key={item.id} img={item.img} link={item.link}/>
        ))}
        
        
      </div>
    </div>
    )
}

export default ProductList
