import React from 'react';
import ReactDOM from 'react-dom';
import "./custom.scss";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Scroll } from "./components/button.jsx";

import {
    Nav,
    Home,
    Resume,
    Portfolio,
    Projects,
    Project,
} from "./components/index";

ReactDOM.render(
    <Router>
        <Nav/>
        <Routes>
            <Route exact path="/" element={ <Home /> } />
            <Route exact path="/portfolio" element={ <Portfolio /> }>
                <Route path="" element={ <Projects /> } />
                <Route path=":post" element={ <Project /> }/>
            </Route>
            <Route exact path="/resume" element={ <Resume /> } />
        </Routes>
        <Scroll />
    </Router>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
