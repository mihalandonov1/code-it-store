import React from 'react';
import './Logo.css';


const Logo = () => {
  return (
    <div className='logo-wrapper'>
        <div>
            <span className='logo-text-red'>Code</span>
            <span className='logo-text-black'>IT</span>
        </div>
        <div>
            <span className='logo-subtext'>store</span>
        </div>
    </div>
  )
}

export default Logo