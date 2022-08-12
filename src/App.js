import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import CartView from './components/CartView';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { CartContextProvider } from './context/CartContext.jsx'

function App() {
  return (
    <>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer grettings={'HOME'} />}></Route>
          <Route path="/category/:idCategory" element={<ItemListContainer grettings={'FILTRADO'} />}></Route>
          <Route path="/products/:prodId" element={<ItemDetailContainer />}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
          <Route path="/cart" element={<CartView />}></Route>
        </Routes>
        <Footer />
      </CartContextProvider>
    </>
  );
}

export default App;
