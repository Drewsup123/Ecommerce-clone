import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {changeTest} from './redux/actions';
import { Route, Link } from 'react-router-dom';
// Component Imports
import Products from './components/Products';
import Cart from './components/Cart';
import Navigation from './components/Navigation';

const ContentContainer = styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
  margin-top : 100px;
`

function App() {
  return (
    <div>
      <Route path="/" render={() => <Navigation />} />
      <ContentContainer>
        <Route exact path="/" render={() => <Products />} />
        <Route path="/cart" render={() => <Cart />} />
      </ContentContainer>
    </div>
  );
}

export default App;
