import React, {Component} from 'react';
import moment from 'moment';

import BigCalendar from 'react-big-calendar';
BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

import '../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css';
import './App.css';

import { getEvents, calendarUrls } from '../../events';

class App extends Component {
  constructor() {
    super();

    this.storedFilters = window.localStorage.getItem('filters');

    if (this.storedFilters) {
      this.parsedFilters = JSON.parse(this.storedFilters);
    }

    this.state = {
      filters: this.parsedFilters || calendarUrls.map(cal => cal.category),
      events: []
    }

    this.isFiltered = (ev) => this.state.filters.includes(ev.category);
    this.onCheckboxChange = this.onCheckboxChange.bind(this);
  }

  onCheckboxChange(e) {
    const filters = this.state.filters;
    let index;

    if (e) {
      if (e.target.checked) {
        filters.push(e.target.value);
      } else {
        index = filters.indexOf(e.target.value);
        if (index !== -1){
          filters.splice(index, 1);
        }
      }
    }

    window.localStorage.setItem('filters', JSON.stringify(filters));
    this.setState({filters: filters});

    getEvents((events) => {
      let filteredEvents = events.filter(this.isFiltered);
      this.setState({events: filteredEvents});
    });
  }

  componentDidMount() {
    this.onCheckboxChange();
  }

  eventColor(event, start, end, isSelected) {
    return { className: `rbc-event_${event.category}` }
  }

  get checkboxes(){
    return calendarUrls.map(cal => {
        const checked = this.isFiltered(cal);
        return (<div className={`checkboxGroup checkboxGroup_${cal.category}`} key={cal.url}>
          <input id={cal.category} type="checkbox" value={cal.category} onChange={this.onCheckboxChange} checked={checked} />
          <label htmlFor={cal.category}>
            {cal.category}
          </label>
        </div>);
      }
    );
  }

  render() {
    return (
      <div>
        <form className="checkboxForm">
          {this.checkboxes}
        </form>

        <div className="calendar">
          <BigCalendar
            popup
            selectable
            events={this.state.events}
            eventPropGetter={this.eventColor}
            onSelectEvent={event => console.log(event.title)}
            views={['month', 'week', 'day']}
          />
        </div>
      </div>
    )
  }
}

export default App;
