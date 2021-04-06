import './App.css';
import React, {useState} from 'react';
import FrontPage from './components/FrontPage';
import SignIn from './components/SignIn';
import SearchResults from './components/SearchResults';
import Product from './components/Product';
import Payment from './components/Payment';
import Checkout from './components/Checkout';
import PlaceOrderPrime from './components/PlaceOrderPrime';

function App() {
  return (
    <div className="App">
      <PlaceOrderPrime/>
    </div>
  );
}

export default App;
