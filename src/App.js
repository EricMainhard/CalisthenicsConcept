import NavBar from './Components/NavBar/NavBar';
import HomeBanner from './Components/HomeBanner/HomeBanner';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetail from './Components/ItemDetail/ItemDetail';
import NotFound from './Components/NotFound/NotFound.jsx';
import Login from './Components/Login/Login'
import { createContext } from 'react';
import Footer from './Components/Footer/Footer';
import Categories from './Components/Categories/Categories.jsx'
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

function App() {

  const cartContext = createContext();
  let cartItems = [];

  function addProduct(item){
    cartItems.push(product);
  }
  function deleteProduct(item){
    cartItems.filter(products => product.id != item.id);
  }
  function isInCart(item){
    for (product in cartItems){
      if (product.id != item.id){
        cartItems.push(item)
      } else {
        return
      }
    }
  }
    

  return (
    <cartContext.Provider value={cartItems,addProduct,deleteProduct,isInCart}>
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
      </div>
    </cartContext.Provider>
  );
}

export default App;
