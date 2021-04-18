import './App.css';
import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FrontPage from './components/FrontPage';
import SignIn from './components/SignIn';
import SearchResults from './components/SearchResults';
import Product from './components/Product';
import Payment from './components/Payment';
import Checkout from './components/Checkout';
import PlaceOrderPrime from './components/PlaceOrderPrime';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={FrontPage} />
          <Route path="/signin" component={SignIn} />
          <Route path="/search" component={SearchResults} />
          <Route path="/product" exact component={Product} />
          <Route path="/payment" component={Payment} />
          <Route path="/shipping" component = {Checkout} />
          <Route path="/place-order" component = {PlaceOrderPrime} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
