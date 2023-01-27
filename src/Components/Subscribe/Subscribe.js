import './Subscribe.css';
import { FaTwitter } from '/node_modules/react-icons/fa';
import { FaFacebookF } from '/node_modules/react-icons/fa';
import { FaLinkedinIn } from '/node_modules/react-icons/fa';
import { FaGooglePlusG } from '/node_modules/react-icons/fa';
import { FaPinterestP } from '/node_modules/react-icons/fa';
import { FaYoutube } from '/node_modules/react-icons/fa';
import { FaWifi } from '/node_modules/react-icons/fa';
import { FaRegEnvelope } from '/node_modules/react-icons/fa';
import React from 'react';

const Subscribe = () => {
  return (
    <div className='subscribe-container'>
        <div className='subscribe-wrapper'>
            <div className='subscribe-text'>subscribe to latest smartphones news & great deals we offer</div>
                <input className='subscribe-email-bar' type="text" placeholder="enter your email adress..."/>
                <FaRegEnvelope className='subscribe-email-bar-icon'/>
            <div className='subscribe-social-icons'>
                <div className='subscribe-icon'><FaTwitter/></div>
                <div className='subscribe-icon'><FaFacebookF/></div>
                <div className='subscribe-icon'><FaLinkedinIn/></div>
                <div className='subscribe-icon'><FaGooglePlusG/></div>
                <div className='subscribe-icon'><FaPinterestP/></div>
                <div className='subscribe-icon'><FaYoutube/></div>
                <div className='subscribe-icon'><FaWifi/></div>
            </div> 
        </div>
    </div>
  )
}

export default Subscribe;