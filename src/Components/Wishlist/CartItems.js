import './ShopCart.css';
import ShopCartData from './ShopCartData';
import ShopCartProducts from './ShopCartProducts';


const CartItems = () => {

   
 
  return (
    <div className='main-wrapper'>
        {ShopCartData.map((val, ind) => {
            return (
                <ShopCartProducts
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