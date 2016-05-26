import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import NavImg from './components/NavImg';
import TechnologyList from './components/TechnologyList';

// Render the main component into the dom
ReactDOM.render(<Nav />, document.getElementById('navbar'));
ReactDOM.render(<NavImg />, document.getElementById('navImg'));
ReactDOM.render(<TechnologyList />, document.getElementById('technologyList'));
