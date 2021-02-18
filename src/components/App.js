import React from 'react';
import logo from '../logo.svg';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Projects from './Projects.js';
import About from './About.js';
import Navbar from "./Navbar";
import Home from "./Home";
import data from "../data"
import Skills from "./Skills";

function App() {
  return (
    <>
        <div className={'container'}>
            <Navbar data={data.nav}/>
            <Home data={data.home}/>
            <Skills data={data.skills}/>
        </div>
    </>
  );
}

export default App;