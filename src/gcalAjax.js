import request from 'superagent'

const CALENDAR_ID = '7q0s8tju3md30ksn9nun3tl1ls@group.calendar.google.com'
const API_KEY = 'AIzaSyBteIj_7PN1MbEzUEi4kplvCvfs5i4pNjY'
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`

export function getEvents (callback) {
  request
    console.log(url)
    .get(url)
    .end((err, resp) => {
      if (!err) {
        const events = []
        JSON.parse(resp.text).items.map((event) => {
          events.push({
            start: event.start.date || event.start.dateTime,
            end: event.end.date || event.end.dateTime,
            title: event.summary,
          })
        })
        callback(events)
      }
    })
};
