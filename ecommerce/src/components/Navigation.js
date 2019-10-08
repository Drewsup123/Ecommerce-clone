import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationContainer = styled.div`
    position : fixed;
    width : 100vw;
    height : 100px;
    background : blue;
    margin : 0;
`

const Navigation = () => 
    <NavigationContainer>
        <Link to="/cart">
            <button>
            Go To Cart
            </button>
        </Link>
    </NavigationContainer>

export default Navigation;