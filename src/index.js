import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import NavImg from './components/NavImg';
import Router from './components/Router';

// Render the main component into the dom
ReactDOM.render(<Router />, document.getElementById('navbar'));
/*ReactDOM.render(<NavImg />, document.getElementById('navImg'));
ReactDOM.render({this.props.children}, document.getElementById('mainContent'));*/




