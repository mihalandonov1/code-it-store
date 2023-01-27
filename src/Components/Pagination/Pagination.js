/* eslint-disable jsx-a11y/anchor-is-valid */
import './Pagination.css';
import { useState } from 'react';
import React from 'react';
import ShopCartData from '../ShopCart/ShopCartData';



const Pagination = (props) => {

  
  const [recordsPerPage] = useState(8);



<Pagination 
nPages={props.nPages}
currentPage={props.currentPage}
setCurrentPage={props.setCurrentPage}
/>

const nPages = Math.ceil(ShopCartData.length / recordsPerPage);

const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
const [currentPage, setCurrentPage] = useState(1);

const nextPage = () => {
  if(currentPage !== nPages) 
      setCurrentPage(currentPage + 1)
}
const prevPage = () => {
  if(currentPage !== 1) 
      setCurrentPage(currentPage - 1)
}




  return (
   
    <nav className='pagination-container'>
      <ul className="pagination-wrapper">
        <li>
          <a className='page-link-previous' 
          onClick={ prevPage } 
          href='#'>
            Previous
            </a>
        </li>
        {pageNumbers.map(pgNumber => (
        <li key={pgNumber} 
              className={`page-item ${currentPage === pgNumber ? "active" : ""} `} >

          <a onClick={() => setCurrentPage(pgNumber)} 
                className='page-link' 
                href='#'>
                  {pgNumber}
          </a>
        </li>
        ))}

        <li>
          <a className='page-link-next' 
          onClick={nextPage} 
          href='#'>
            next
            </a>
            </li>
      </ul>
    </nav>
    
  )
}

export default Pagination;