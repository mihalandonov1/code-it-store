import './StoreData.css';
import { FaThumbsUp } from '/node_modules/react-icons/fa';
import { FaTruck } from '/node_modules/react-icons/fa';
import { BiMessageAltDetail } from '/node_modules/react-icons/bi';
import { BiSupport } from '/node_modules/react-icons/bi';
import React from 'react'

const StoreData = () => {
  return (
    <div className='storedata-container'>
        <div className='storedata-wrapper'>
            <div className='storedata'>
                <div className='storedata-block'>
                    <div className='icon-wrapper'><FaThumbsUp className='icon'/></div>
                    <div>
                        <div className='storedata-main-text'>full waranty</div>
                        <div className='storedata-sub-text'>Read About Our Waranty</div>
                    </div>    
                </div>
                <div className='storedata-block'>
                    <div className='icon-wrapper'><FaTruck className='icon'/></div>
                    <div>
                        <div className='storedata-main-text'>express shipping</div>
                        <div className='storedata-sub-text'>local & international shipping</div>
                    </div>
                </div>
                <div className='storedata-block'>
                    <div className='icon-wrapper'><BiMessageAltDetail className='icon'/></div>
                    <div>
                        <div className='storedata-main-text'>mobile blog</div>
                        <div className='storedata-sub-text'>discuss your favourite phone</div>
                    </div>
                </div>
                <div className='storedata-block'>
                    <div className='icon-wrapper'><BiSupport className='icon'/></div>
                    <div>
                        <div className='storedata-main-text'>24/7 support</div>
                        <div className='storedata-sub-text'>get full support via chat</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StoreData