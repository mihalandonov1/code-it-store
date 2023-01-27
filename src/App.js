
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import ListControll from './Components/List-controll/ListControll';
import Basket from './Components/ShopBasket/Basket';
import Total from './Components/ShopBasket/Total';
import StoreData from './Components/StoreData/StoreData';
import Subscribe from './Components/Subscribe/Subscribe';
import Footer from './Components/Footer/Footer';
import ProductsInBasket from './Components/ShopBasket/ProductsInBasket';
import { useState } from 'react';

function App() {



  return (

   
   
    <>
        <Navbar/>
        <Header/>
        <ListControll/>
        <Basket/>
        <Total/>
        <StoreData/>
        <Subscribe/>
        <Footer/>
    </>
  );
}

export default App;
