import request from 'superagent';
import gapi from 'gapi';

const CLIENT_ID = '462177041743-r4mnpj9qrp34j8kvotritqalutha8rfb.apps.googleusercontent.com';

const SCOPES = ['https://www.googleapis.com/auth/calendar'];

function checkAuth() {
  gapi.auth.authorize(
    {
      'client_id': CLIENT_ID,
      'scope': SCOPES,
      'immediate': true
    },
     handleAuthResult
  );
};

function handleAuthResult(authResult) {
  var authorizeDiv = document.getElementById('authorize-div');
  if (authResult && !authResult.error) {
    authorizeDiv.style.display = 'none';
    loadCalenderApi();
  } else {
    authorizeDiv.style.display = 'inline';
  }
};

function handleAuthClick(event) {
  gapi.auth.authorize(
    {
      client_id: CLIENT_ID,
      scope: SCOPES,
      immediate: false
    },
    handleAuthResult
  );
  return false;
};

function loadCalenderApi() {
  gapi.client.load('calendar', 'v3', addEvents);
};

function addEvents() {
  var event = {
    'summary': 'Test Entry',
    'location': 'Homebase',
    'description': 'Adding to the calender',
    'start': {
      'date': '2017-6-4'
    },
    'end': {
      'date': '2017-6-6'
    }
  };

  var request = gapi.client.calender.events.insert(
    {
      'calenderId': '7q0s8tju3md30ksn9nun3tl1ls@group.calendar.google.com',
      'resource': event
    }
  );

  request.execute(function(event) {
    appendPre('Event created: ' + event.htmlLink);
  });

  function appendPre(message) {
    var pre = document.getElementById('output');
    var textContent = document.createTextNode(message + '\n');
    pre.appendChild(textContent);
  };
}

//
// const API_KEY = ''
// let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`
//
// export function getEvents (callback) {
//   request
//     .get(url)
//     .end((err, resp) => {
//       if (!err) {
//         const events = []
//         JSON.parse(resp.text).items.map((event) => {
//           events.push({
//             start: event.start.date || event.start.dateTime,
//             end: event.end.date || event.end.dateTime,
//             title: event.summary,
//           })
//         })
//         callback(events)
//       }
//     })
// };

export default gcal;
