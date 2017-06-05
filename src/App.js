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
        let accg100events = [];
        let econ111events = [];
        let accg224events = [];
        let busl250events = [];
        let acst201events = [];

        console.log(accg100.data.items)

        accg100.data.items.map(event => {
        let sTime = event.start.date || event.start.dateTime;
        let eTime = event.end.date || event.end.dateTime;

        let csTime = moment(sTime).toDate();
        let ceTime = moment(eTime).toDate();

        return accg100events.push({
          start: csTime,
          end: ceTime,
          title: event.summary,
          description: event.description,
          location: event.location
          });
        });

      econ111.data.items.map(event => {
      let sTime = event.start.date || event.start.dateTime;
      let eTime = event.end.date || event.end.dateTime;

      let csTime = moment(sTime).toDate();
      let ceTime = moment(eTime).toDate();

      return econ111events.push({
        start: csTime,
        end: ceTime,
        title: event.summary,
        description: event.description,
        location: event.location
        });
      });

      accg224.data.items.map(event => {
      let sTime = event.start.date || event.start.dateTime;
      let eTime = event.end.date || event.end.dateTime;

      let csTime = moment(sTime).toDate();
      let ceTime = moment(eTime).toDate();

      return accg224events.push({
        start: csTime,
        end: ceTime,
        title: event.summary,
        description: event.description,
        location: event.location
      });
    });

      busl250.data.items.map(event => {
      let sTime = event.start.date || event.start.dateTime;
      let eTime = event.end.date || event.end.dateTime;

      let csTime = moment(sTime).toDate();
      let ceTime = moment(eTime).toDate();

      return busl250events.push({
        start: csTime,
        end: ceTime,
        title: event.summary,
        description: event.description,
        location: event.location
        });
      });

      acst201.data.items.map(event => {
      let sTime = event.start.date || event.start.dateTime;
      let eTime = event.end.date || event.end.dateTime;

      let csTime = moment(sTime).toDate();
      let ceTime = moment(eTime).toDate();

      return acst201events.push({
        start: csTime,
        end: ceTime,
        title: event.summary,
        description: event.description,
        location: event.location
      });
    });

      // console.log(events);
      // this.setState({
      //   accg100events: accg100events,
      //   econ111events: econ111events,
      //   accg224events: accg224events,
      //   busl250events: busl250events,
      //   acst201events: acst201events,
      // })
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
           popup
           style={{height: '800px'}}
           events={this.state.econ111events.concat(this.state.accg100events).concat(this.state.accg224events).concat(this.state.busl250events).concat(this.state.acst201events)}


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
