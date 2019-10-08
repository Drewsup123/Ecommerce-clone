import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {changeTest} from './redux/actions';
import { Route, Link } from 'react-router-dom';
// Component Imports
import Products from './components/Products';
import Cart from './components/Cart';
import Button from './components/GoToCartBtn';

function App(props) {
  return (
    <div className="App">
      <Link to="/cart">
        <Button>
          Go To Cart
        </Button>
      </Link>
      <Route exact path="/" render={() => <Products />} />
      <Route path="/cart" render={() => <Cart />} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    test : state.test
  }
}

export default connect(mapStateToProps, {changeTest})(App);
