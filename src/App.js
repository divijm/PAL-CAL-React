import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import logo from './images/logo.svg';
import './styles/App.css';
import Calendar from './components/Calendar'
import Charts from './components/Charts'
import ChartistGraph from 'react-chartist';

// var lineChartData = {
//   labels: [1, 2, 3, 4, 5, 6, 7, 8],
//   series: [
//     [5, 9, 7, 8, 5, 3, 5, 4]
//   ]
// }
// var lineChartOptions = {
//   low: 0,
//   showArea: true
// }

// var chart = new Chartist.Line('.ct-chart', {
//   labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
//   series: [
//     [30, 32, 33, 40, 55, 65, 66, 69, 73, 90],
//     [25, 29, 33, 41, 53, 58, 62, 65, 71, 88],
//     [30, 32, 39, 42, 48, 54, 64, 70, 73, 82],
//     [35, 39, 42, 44, 52, 60, 69, 70, 73, 84]

class App extends Component {

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

        <Calendar
         />

         <br/>
         <br/>
         <hr/>

        <ChartistGraph data={lineChartData} options={lineChartOptions} type={'Line'} />

     </div>
    );
  }
};

export default App;
