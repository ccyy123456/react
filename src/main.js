import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import ReactDOM from "react-dom";
import TestRouter from "./components/testrouter";
import Home from "./components/home";
import Plan from "./components/plan";
const history = createHistory()

render((
    <Router history = {history}>
        <Route exact path="/" component={Home}/>
        <Route path="/plan" component={Plan}/>
        <Route path="/test" component={TestRouter}/>
    </Router>
), document.getElementById('app'));