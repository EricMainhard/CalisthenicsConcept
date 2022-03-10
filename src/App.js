import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import HomeBanner from './Components/HomeBanner/HomeBanner';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetail from './Components/ItemDetail/ItemDetail';
import NotFound from './Components/NotFound/NotFound.jsx';
import Login from './Components/Login/Login'
import PurchaseForm from './Components/PurchaseForm/PurchaseForm';
import Footer from './Components/Footer/Footer';
import './App.css';
import CartProvider from './Context';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <CartProvider>
      <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomeBanner/>}/>
          <Route path="/products" element={<ItemListContainer/>}/>
          <Route path="/products/:id" element={<ItemDetail/>}/>
          <Route path="/categories/:category" element={<ItemListContainer/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
        <PurchaseForm/>
      </div>
    </CartProvider>
  );
}

export default App;
