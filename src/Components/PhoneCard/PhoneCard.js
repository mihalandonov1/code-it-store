import './PhoneCard.css';
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const PhoneCard = (props) => {
  return (
      <div className='phone-card-wrapper'>
        <div className='phone-card-remove-from-list'>
          <div className='phone-card-remove-from-list-button'>remove from list</div>
        </div>
        <img className='phone-card-image' src={props.imgsrc} alt='phone'></img>
        <div className='phone-card-model'>{props.model}</div>
        <div className='phone-card-price'>
              <p className='phone-card-new-price'>$ {props.price}</p>
              <p className='phone-card-old-price'> {props.oldPrice}</p>
        </div>
        <div className='phone-card-buttons'>
            <div className='phone-card-button-delete-icon-wrapper'><FaTrashAlt className='phone-card-button-delete-icon'/></div>
            <div className='shop-card-button-shopcart-icon-wrapper'><AiOutlineShoppingCart className='shop-card-button-shopcart-icon'/></div>
        </div>
    </div>
  )
}

export default PhoneCard;