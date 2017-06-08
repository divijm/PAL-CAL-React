import React, { Component } from 'react';
import ChartistGraph from '../react-chartist';

class Charts extends Component {

  lineChartData() {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    series: [[5, 9, 7, 8, 5, 3, 5, 4]],
  };

  lineChartOptions() {
    low: 0,
    showArea: true
  }
};

export default Charts;
