import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
import {changeTest} from './redux/actions';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>{props.test}</h1>
        <button onClick={props.changeTest}>Change the Text</button>
      </header>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    test : state.test
  }
}

export default connect(mapStateToProps, {changeTest})(App);
