import './ShopCart.css';
import { AiFillShopping } from '/node_modules/react-icons/ai';
import React from 'react';
import ProductsInBasket from '../ShopBasket/ProductsInBasket';

const hasItems = ProductsInBasket.length > 0;




const ShopCart = () => {


  return (
    <div className='shop-cart-wrapper'>
        <div className='shop-cart'>
            <p className='shop-cart-price'> <AiFillShopping className='shop-cart-icon'/>$ 0.00</p>
            <p className='shop-cart-items'>{hasItems}</p>
        </div>
    </div>
  )
} 

export default ShopCart;