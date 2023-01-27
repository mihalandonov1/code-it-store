import './Navbar.css';
import React from 'react';
import { BsSearch } from '/node_modules/react-icons/bs';
import Logo from '../Logo/Logo';
import ShopCart from '../ShopCart/ShopCart';


const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='navbar-wrapper'>
            <div>
                <Logo/>
            </div>    
            <ul>
                <li><a href="#">home</a></li>
                <li><a href="#">all brands</a></li>
                <li><a href="#">latest</a></li>
                <li><a href="#">featured</a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">blog</a></li>
                <li><a href="#">contact</a></li>
                <li><a href="#"><BsSearch/></a></li>
            </ul>
            <div>
                <ShopCart/>
            </div>
        </div>
    </div>
  )
}

export default Navbar