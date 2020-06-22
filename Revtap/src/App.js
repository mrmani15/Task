import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Home from './pages/Home';
import PriceCount from './components/PriceCount';
import OrderCount from './components/OrderCount';
import Navbar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Home />
        <PriceCount />
        <OrderCount />
      </div>
    </BrowserRouter>
  );
}

export default App;
