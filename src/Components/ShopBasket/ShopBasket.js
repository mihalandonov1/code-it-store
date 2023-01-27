import './ShopBasket.css';

import React, { useEffect, useState } from 'react';
import { FaMinusCircle } from '/node_modules/react-icons/fa';
import { FaPlusCircle } from '/node_modules/react-icons/fa';
import { FaTrashAlt } from '/node_modules/react-icons/fa';




const ShopBasket = (props) => {

    const [items, setItems] = useState(0);

    const increseItems = () => {
        if(items >= 0){
        setItems(items+1)
        }
    };

    const decreseItems = () => {
        if(items > 0) {
        setItems(items-1);
        }
    };

 

        
  return (
    
       
                <div className='shop-basket-wrap'>
                    <div className='shop-basket-left'>
                        <img className='shop-basket-picture' src={props.imgsrc} alt='pictureasd'/>
                    </div>
                    <div className='shop-basket-right'>    
                        <div className='shop-basket-item-model'>
                            <div className='shop-basket-item-model-text'>
                                {props.model}
                            </div>
                            <div className='shop-basket-item-button-delete'>
                            <FaTrashAlt/>
                            </div>
                        </div>
                        <div className='shop-basket-item-price'>$ {props.price}</div>
                        <div className='shop-basket-item-quantity-row'>
                        <div className='shop-basket-item-button-minus' onClick={decreseItems}><FaMinusCircle/></div>
                            <div className='shop-basket-item-quantity'>
                                <div className='className=shop-basket-item-quantity-text'>{items}</div>
                            </div>
                            <div className='shop-basket-item-button-plus' onClick={increseItems}><FaPlusCircle/></div>
                        </div>   
                        <div className='shop-basket-item-total-row'>$ {props.price}.00</div> 
                    </div> 
                   
                </div>
            

        
        
  )
}

export default ShopBasket;