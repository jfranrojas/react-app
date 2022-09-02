import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './store/CartContext';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='detalle/:id' element={<ItemDetailContainer/>} />
            <Route path='categoria/:idCategory' element={<ItemListContainer/>} />
            <Route path='cart' element={<Cart/>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </> 
  );
  }
export default App;

