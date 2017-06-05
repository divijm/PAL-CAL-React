import request from 'superagent';
import moment from 'moment';

const CALENDAR_URL = 'https://www.googleapis.com/calendar/v3/calendars/natearnold.me_';
const API_KEY = '%40group.calendar.google.com/events?key=AIzaSyCBwX4Bg0NlgNkR1du8uk75a4WuXOynPp8';

const ADULT_CAL  = `${CALENDAR_URL}djmdkhhlncfjps47tb5mutk7t4${API_KEY}`;
const ATTRACTION_CAL  = `${CALENDAR_URL}l6ekgqkhfoj3sj3stn2bfv59vs${API_KEY}`;
const CIVIC_CAL  = `${CALENDAR_URL}7b0kur0154rhuh03jid2u9ffgg${API_KEY}`;
const EDUCATION_CAL  = `${CALENDAR_URL}jeo71grdrljgndn2v3h086tl80${API_KEY}`;
const GENERAL_CAL  = `${CALENDAR_URL}8udjniqmpi9r81rc5hne43u9m8${API_KEY}`;
const NETWORKING_CAL  = `${CALENDAR_URL}k73uffcthf52ghtplljtbupuqg${API_KEY}`;
const NONPROFIT_CAL  = `${CALENDAR_URL}etf11f3l3pmuikbslq5vignfd4${API_KEY}`;
const OUTDOORS_CAL  = `${CALENDAR_URL}ggmm23r3ki4qcj27rq8u5uhsh4${API_KEY}`;
const YOUTH_CAL  = `${CALENDAR_URL}97bisjqa0rb0q6sgchfkvo0v2g${API_KEY}`;

const calendarUrls = [
	{
		category: 'adult',
		url: ADULT_CAL
	},
  {
		category: 'attraction',
		url: ATTRACTION_CAL
	},
	{
		category: 'civic',
		url: CIVIC_CAL
	},
	{
		category: 'education',
		url: EDUCATION_CAL
	},
	{
		category: 'general',
		url: GENERAL_CAL
	},
	{
		category: 'networking',
		url: NETWORKING_CAL
	},
	{
		category: 'nonprofit',
		url: NONPROFIT_CAL
	},
	{
		category: 'outdoors',
		url: OUTDOORS_CAL
	},
	{
		category: 'youth',
		url: YOUTH_CAL
	}
];

let calendar = [];

const fetchCalendar = function(cal) {
  return new Promise((resolve, reject) => {
		request
			.get(cal.url)
			.end((err, resp) => {
				if (!err) {

					JSON.parse(resp.text).items.map(event => {
						let sTime = event.start.date || event.start.dateTime;
						let eTime = event.end.date || event.end.dateTime;

						let csTime = moment(sTime).toDate();
						let ceTime = moment(eTime).toDate();

						return calendar.push({
							start: csTime,
							end: ceTime,
							title: event.summary,
							description: event.description,
							location: event.location,
							calendar: cal.url,
							category: cal.category
						});
					});

					resolve();

				} else {
					reject(err.message);
				}
			});
  });
}

const calendarPromises = calendarUrls.map(fetchCalendar);

const getEvents = (callback) => {
	Promise.all(calendarPromises)
	  .then(function(results) {
			 callback(calendar);
	  })
	  .catch(function(err) {
	    console.log("Failed:", err);
	  });
}

export { getEvents, calendarUrls };
