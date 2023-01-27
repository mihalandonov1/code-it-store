import './ListControll.css'
import React from 'react'

const ListControll = () => {
  return (
    <div className='list-controll-container'>
        <div className='list-controll-wrapper'>
        <input className='list-search-bar' type="text" placeholder="Search..."></input>
            <button className='list-button'>Clear List</button>
        </div>
    </div>
  )
}

export default ListControll