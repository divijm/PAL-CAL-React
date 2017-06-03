import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import moment from 'moment';
import { getEvents } from './gcal'

import BigCalendar from 'react-big-calendar';
BigCalendar.momentLocalizer(moment)

class App extends Component {
  constructor () {
    super()
    this.state = {
      events: []
    }
  }

  componentDidMount () {
    getEvents((events) => {
      this.setState({events})
    })
  }

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
      </div>
    );
  }
}

export default App;
