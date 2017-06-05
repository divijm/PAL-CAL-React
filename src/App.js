import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import logo from './images/logo.svg';
import './styles/App.css';
// import { getSessions } from './api/getSessions'
import axios from 'axios';
import moment from 'moment';
import BigCalendar from 'react-big-calendar';
BigCalendar.momentLocalizer(moment)

class App extends Component {

  constructor () {
    super()
    this.state = {
      events: [],
      accg100events: [],
      econ111events: [],
      accg224events: [],
      busl250events: [],
      acst201events: [],
      token: ''
    }
  };

  componentDidMount () {
    // this.setState(
    //   {
    //     events: getSessions()
    //   }
    // )
        // const CALENDAR_ID = 'jobiutcic5qpiel03g3hkfb93o@group.calendar.google.com'
        // const API_KEY = 'AIzaSyBteIj_7PN1MbEzUEi4kplvCvfs5i4pNjY'
        // const URL = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`
    const GCAL_URL = 'https://www.googleapis.com/calendar/v3/calendars/';
    const API_KEY = '@group.calendar.google.com/events?key=AIzaSyBteIj_7PN1MbEzUEi4kplvCvfs5i4pNjY';

    const ACCG100_CAL = `${GCAL_URL}oa760bp1ddcalm3e2atkq9rhig${API_KEY}`;
    const ECON111_CAL = `${GCAL_URL}jobiutcic5qpiel03g3hkfb93o${API_KEY}`;
    const ACCG224_CAL = `${GCAL_URL}jurp0e5kolh0mrj3iui17u6i28${API_KEY}`;
    const BUSL250_CAL = `${GCAL_URL}6ol66rcit5mb7mkjm44hr7kgas${API_KEY}`;
    const ACST201_CAL = `${GCAL_URL}2c8kh2jiobjmdvidkchvf8138g${API_KEY}`;
    // set all these. put into array of objects
    // loop over array and do axios call multiple times
    // save values to state

    axios.all([
      axios.get(ACCG100_CAL),
      axios.get(ECON111_CAL),
      axios.get(ACCG224_CAL),
      axios.get(BUSL250_CAL),
      axios.get(ACST201_CAL),
    ])

    // .then(response => {
    //   console.log(response)
    // })
    .then(axios.spread((accg100, econ111, accg224, busl250, acst201) => {
        // let events = accg100.data.concat(econ111.data);
      let accg100events = accg100.data.items;
      let econ111events = econ111.data.items;
      let accg224events = accg224.data.items;
      let busl250events = busl250.data.items;
      let acst201events = acst201.data.items;

      // console.log(events);
      this.setState({
        accg100events: accg100events,
        econ111events: econ111events,
        accg224events: accg224events,
        busl250events: busl250events,
        acst201events: acst201events,
      })
      console.log(accg100events);
      console.log(econ111events);
      console.log(accg224events);
      console.log(busl250events);
      console.log(acst201events);
    }))
    // .then(response => this.setState({ vehicles: response.data }))
    .catch(error => console.log(error));
  };
        //
        // axios({
        //   method: 'get',
        //   url: [QUERY, QUERY2]
        // })
        //   .then(response => {
        //     console.log(response)
        //     // return(response)
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });

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

        <BigCalendar
           style={{height: '420px'}}
           events={this.state.events}
          //  {this.state.events.data.description}
          //  {this.state.events.data.items[1].start.dateTime}
         />

         <br/>
         <br/>
         <hr/>

     </div>
    );
  }
};

export default App;
