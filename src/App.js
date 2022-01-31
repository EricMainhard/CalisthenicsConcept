import NavBar from './Components/NavBar/NavBar';
import HomeBanner from './Components/HomeBanner/HomeBanner';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomeBanner/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
