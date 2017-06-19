import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
// import styles from './appStyles';
// import NavLink from '../NavLink';

const App = (props) => (
  <div>
    <h1>React Router Tutorial</h1>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/repos" name="abc">Repos</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/faq" activeClassName="selected">FAQs</NavLink>
     
   
    {props.children}
  </div>
);

App.propTypes = {
  children: React.PropTypes.object,
};

export default App;