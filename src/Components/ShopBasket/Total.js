import './Total.css';
import React from 'react';
import { GrCart } from '/node_modules/react-icons/gr';
import { GrTrash } from '/node_modules/react-icons/gr';
import Basket from './Basket';

const Total = (props) => {

  

  return (
    <div className='total-container'>
        <div className='total-wrapper'>
            <div className='total-left'>total:</div>
            <div className='total-right'>$ {props.price}</div>
        </div>
        <div className='checkout-wrapper'>
            <div className='checkout-icon-left'>
              <GrTrash/>
            </div>
            <div className='checkout-icon-right'>
            <GrCart/>
            </div>
        </div>
    </div>
   )
  }
export default Total;
