import './PhoneCard.css';
import React from 'react';
import PhoneCardData from './PhoneCardData';
import PhoneCard from './PhoneCard';


const Card = () => {



  return (
        <div className='shop-basket'>
            {PhoneCardData.map((val, ind) => {
                return (
                    <PhoneCard 
                    key={ind} 
                    imgsrc={val.imgsrc} 
                    model={val.model} 
                    price={val.price} 
                    oldPrice={val.oldPrice}/>            
                )
                })}
        </div>
  )
}

export default Card;