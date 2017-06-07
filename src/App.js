import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import logo from './images/logo.svg';
import './styles/App.css';
import Calendar from './components/Calendar'
import Charts from './components/Charts'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>PAL CAL</h2>
        </div>

        <Router>
          <div>
            <ul>
              <p><Link to="/home">Home</Link></p>
              <p><Link to="/about">About</Link></p>
            </ul>
          </div>
        </Router>

        <p className="App-intro">
          Find out your times for all the PAL classes this week!
        </p>

        <br/>
        <hr/>
        <br/>
        <br/>

        <Calendar
         />

         <br/>
         <br/>
         <hr/>

         <Charts
         />

     </div>
    );
  }
};

export default App;
