import NavBar from './Components/NavBar/NavBar';
import HomeBanner from './Components/HomeBanner/HomeBanner';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomeBanner/>}/>
        <Route path="/products" element={<ItemListContainer/>}/>
      </Routes>
    </div>
  );
}

export default App;
