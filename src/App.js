import './App.css'
import React, { Component } from 'react'
import Navbar from './Component/Navbar'
import News from './Component/News'
import {
  BrowserRouter as Router,Switch,Route,}from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/"><News pagesize={6} country="in" /></Route>
            <Route exact path="/General"><News key="General" pagesize={6} country="in" category="General" /></Route>
            <Route exact path="/Business"><News key="Business" pagesize={6} country="in" category="Business" /></Route>
            <Route exact path="/Entertainment"><News key="Entertainment" pagesize={6} country="in" category="Entertainment" /></Route>
            <Route exact path="/Health"><News key="Health" pagesize={6} country="in" category="Health" /></Route>
            <Route exact path="/Science"><News key="Science" pagesize={6} country="in" category="Science" /></Route>
            <Route exact path="/Sports"><News key="Sports" pagesize={6} country="in" category="Sports" /></Route>
            <Route exact path="/Technology"><News key="Technology" pagesize={6} country="in" category="Technology" /></Route>
          </Switch>
        </Router>

      </>

    )
  }
}
