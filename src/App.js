import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import logo from './images/logo.svg';
import './styles/App.css';
import ChartistGraph from 'react-chartist';
import Calendar from './components/Calendar';
import Homepage from './containers/Homepage.js';
import About from './containers/About';
// import Footer from './containers/Footer';
import Leaders from './containers/Leaders';
import { Navbar, NavItem, Row, Col, Modal, Button } from 'react-materialize';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <Navbar brand='PAL CAL' right className='blue darken-1'>
              <NavItem><Link to="/calendar">Calendar</Link></NavItem>
              <NavItem><Link to="/about">About PAL</Link></NavItem>
              <NavItem><Link to="/leaders">PAL Leaders</Link></NavItem>
            </Navbar>
          </div>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/calendar" component={Calendar} />
            <Route exact path="/about" component={About} />
            <Route exact path="/leaders" component={Leaders} />
          </Switch>
        </div>
      </Router>
    );
  }
};

export default App;
