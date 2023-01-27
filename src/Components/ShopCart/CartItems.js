import './ShopCart.css';
import ShopCartData from './ShopCartData';
import ShopCart from './ShopCartProducts';




const CartItems = () => {

   
 
  return (
    <div className='main-wrapper'>
        {ShopCartData.map((val, ind) => {
            return (
                <ShopCart
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

export default CartItems;