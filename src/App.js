import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import { getSessions } from './getSessions'
import axios from 'axios';
// import { getEvents } from './gcalAjax'
// import gcalAjax from './gcalAjax';
import moment from 'moment';
// import gcal, { checkAuth, handleAuthResult, handleAuthClick, loadCalenderApi, addEvents, appendPre } from './gcal'
// import gauth from './Gauth'
import BigCalendar from 'react-big-calendar';
BigCalendar.momentLocalizer(moment)


class App extends Component {

  constructor () {
    super()
    this.state = {
      events: [],
      token: ''
    }
  };

  componentDidMount () {
    this.setState(
      {
        events: getSessions()
      }
    )


  };

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
              <p><a href="https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly&include_granted_scopes=true&state=state_parameter_passthrough_value&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcalendar&response_type=token&prompt=consent&client_id=127111398025-hn20jreib1o4ndbmm7ttra6vihq6foj9.apps.googleusercontent.com">API OAUTH2 Authenticate</a></p>
              <p><Route path="/:id" component={API}/></p>
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

        <BigCalendar
           style={{height: '420px'}}
           events=
           {this.state.events.data.description}
           {this.state.events.data.items[1].start.dateTime}
         />

         <br/>
         <br/>
         <hr/>

     </div>
    );
  }
};

const API = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
    {
      (match.params.id === "calendar") ?
        (
          <div>
            Type in url the following: <strong>https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=(access_token)</strong> <br/><br/>
            <em>Where (access_token) is what comes after &access_token= (and before &token_type=) in your current URL</em>
          </div>
        )
        :
        (
          null
        )
    }
  </div>
);

export default App;
