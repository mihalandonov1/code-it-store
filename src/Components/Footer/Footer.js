import './Footer.css';
import React from 'react';
import { RiVisaFill } from '/node_modules/react-icons/ri';
import { FaCcPaypal } from '/node_modules/react-icons/fa';
import { RiVisaLine } from '/node_modules/react-icons/ri';
import { FaCcMastercard } from '/node_modules/react-icons/fa';
import { RiMastercardFill } from '/node_modules/react-icons/ri';
import { FaCcDiscover } from '/node_modules/react-icons/fa';

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-wrapper'>
            <div className='footer-text'>copyright © 2023 all rights reserved</div>
            <div className='footer-icons-wrapper'>
                <div className='footer-icons-block'><RiVisaFill className='footer-icon'/></div>
                <div className='footer-icons-block'><FaCcPaypal className='footer-icon'/></div>
                <div className='footer-icons-block'><RiVisaLine className='footer-icon'/></div>
                <div className='footer-icons-block'><FaCcMastercard className='footer-icon'/></div>
                <div className='footer-icons-block'><RiMastercardFill className='footer-icon'/></div>
                <div className='footer-icons-block'><FaCcDiscover className='footer-icon'/></div>
            </div>
        </div>
    </div>
  )
}

export default Footer;