import './ShopBasket.css';
import React from 'react';
import ProductsInBasket from './ProductsInBasket';
import ShopBasket from './ShopBasket';

const Basket = () => {



  return (
      
      <div className='shop-basket-wrapper'>
        <div className='shop-basket'>
        {ProductsInBasket.map((val, ind) => {
            return (
                <ShopBasket 
                key={ind} 
                imgsrc={val.imgsrc} 
                model={val.model} 
                price={val.price} 
                oldPrice={val.oldPrice}/>
            )
        })}
      </div>
    </div>

  );
}

export default Basket;
