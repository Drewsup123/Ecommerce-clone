import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../logo.svg';
import Cart from './assets/cart.svg';

const NavigationContainer = styled.div`
    position : fixed;
    width : 100vw;
    height : 100px;
    background : blue;
    display : flex;
    justify-content : space-between;
    align-items : center;
    box-sizing : border-box;
    padding : 10px;
    top : 0;
`

const CartImage = styled.img`
    height : 40px;
    width : 40px;
`

const Navigation = () => 
    <NavigationContainer>
        <Link to="/">
            <img src={Logo} alt="logo" />
        </Link>
        <Link to="/cart">
            <CartImage src={Cart} alt="cart" />
        </Link>
    </NavigationContainer>

export default Navigation;