import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import BuzzerPage from './components/buzzer';
import OrderPage from './components/order';


export default class App extends Component {
   
    render() {
      return (
        <Router>
          <div>
            <Route exact path="/" component={BuzzerPage}/>
            <Route exact path="/order" component={OrderPage}/>
          </div>
        </Router>
      );
    }
  }