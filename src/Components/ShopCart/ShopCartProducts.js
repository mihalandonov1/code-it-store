import './ShopCartProducts.css';

import React from 'react';


const ShopCartProducts = (props) => {
  return (
    <div className='cart-wrapper'>
        <div className='cart-remove-from-list'>
          <div className='cart-remove-from-list-button'>remove from list</div>
        </div>
        <img className='cart-image' src={props.imgsrc} alt='phone'></img>
        <div className='cart-model'>{props.model}</div>
        <div className='cart-price'>
              <p className='phone-card-new-price'>$ {props.price}</p>
              <p className='phone-card-old-price'> {props.oldPrice}</p>
        </div>
    </div>

  )
}

export default ShopCartProducts;