import React, { Component } from 'react';

class Calender extends Component {

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

    .then(axios.spread((accg100, econ111, accg224, busl250, acst201) => {
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
    .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="Calender">
        <BigCalendar
           popup
           style={{height: '800px'}}
           events={this.state.econ111events.concat(this.state.accg100events).concat(this.state.accg224events).concat(this.state.busl250events).concat(this.state.acst201events)}
         />
     </div>
    );
  };
};
