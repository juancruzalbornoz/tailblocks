import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import CartView from './components/CartView';
import Flotante from './components/Flotante';
import Footer from './components/Footer';
// import Home from './components/Home';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
// import NotFound from './components/NotFound';
import {CartContextProvider} from './context/CartContext.jsx'

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <><CartContextProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer grettings={'HOME'} />}></Route>
        {/* <Route path="/home2" element={<Home />}></Route> */}
        <Route path="/category/:idCategory" element={<ItemListContainer grettings={'FILTRADO'} />}></Route>
        <Route path="/products/:prodId" element={<ItemDetailContainer />}></Route>
        {/* <Route path="/detalle" element={<ItemDetailContainer />}></Route> */}
        <Route path="*" element={<Navigate to="/" />}></Route>
        {/* <ItemDetailContainer /> */}
      </Routes>
      {/* <ItemListContainer grettings={'hola'} /> */}
      <CartView />
      <Flotante />
      <Footer />
      </CartContextProvider>
    </>
  );
}

export default App;
