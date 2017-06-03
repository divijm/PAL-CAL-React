import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import moment from 'moment';
import gcal, { checkAuth, handleAuthResult, handleAuthClick, loadCalenderApi, addEvents, appendPre } from './gcal'

import BigCalendar from 'react-big-calendar';
BigCalendar.momentLocalizer(moment)

class App extends Component {

  constructor () {
    super()
    this.state = {
      events: []
    }
  };

  componentDidMount () {
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <h2>PAL CAL</h2>
        </div>
        <p className="App-intro">
          Find out your times for all the PAL classes this week!
        </p>
        <BigCalendar
           style={{height: '420px'}}
           events={this.state.events}
         />
       <div>
         Authorize Me!
         <button
           id="authorize-button"
           onClick={gcal.handleAuthClick()}>
           Authorize
         </button>
       </div>
         <pre id="output"></pre>
      </div>
    );
  }
}

export default App;
