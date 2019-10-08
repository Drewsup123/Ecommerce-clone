import React from 'react';
import {connect} from 'react-redux';
import {changeTest} from './redux/actions';
import { Route, Link } from 'react-router-dom';
// Component Imports
import Products from './components/Products';
import Cart from './components/Cart';
import Button from './components/GoToCartBtn';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Route path="/" render={() => <Navigation />} />
      <Route exact path="/" render={() => <Products />} />
      <Route path="/cart" render={() => <Cart />} />
    </div>
  );
}

export default App;
