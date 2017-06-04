import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

// const GCAL_URL = 'https://www.googleapis.com/calendar/v3/calendars/'
// const API_KEY = '@group.calendar.google.com/events?key=AIzaSyBteIj_7PN1MbEzUEi4kplvCvfs5i4pNjY'
//
// const ACCG100_CAL = `${GCAL_URL}oa760bp1ddcalm3e2atkq9rhig${API_KEY}`;
// const ECON111_CAL = `${GCAL_URL}jobiutcic5qpiel03g3hkfb93o${API_KEY}`;
//
// const calenderUrls = [
//   {
//     category: 'econ111',
//     pal_leader: 'jeff',
//     url: ECON111_CAL
//   },
//   {
//     category: 'accg100',
//     pal_leader: 'lisa',
//     url: ACCG100_CAL
//   }
// ]
//
// let calendar = []

  export function getSessions() {

    const CALENDAR_ID = 'jobiutcic5qpiel03g3hkfb93o@group.calendar.google.com'
    const API_KEY = 'AIzaSyBteIj_7PN1MbEzUEi4kplvCvfs5i4pNjY'
    const URL = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`
    const QUERY = URL

    axios({
      method: 'get',
      url: QUERY
    })
      .then(response => {
        return(response)
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // export default getSessions;
