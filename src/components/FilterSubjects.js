import React, { Component } from 'react';
var _ = require('lodash');

class FilterSubjects extends Component {
  constructor() {
    super()
    this.state = {
      selectedSubjects: [],
    }
  };

  handleCheckboxChange(event) {
    if (event.target.checked) {
      var filteredArray = this.state.selectedSubjects
      filteredArray.push(event.target.value)
      console.log(filteredArray)
      console.log("TRUE")
      this.setState({selectedSubjects: filteredArray})
      console.log(filteredArray)
    } else {
      console.log(event.target.checked)
      var filteredArray = this.state.selectedSubjects
      _.pull(filteredArray, event.target.value)
      console.log(filteredArray)
      console.log("FALSE")
      this.setState({selectedSubjects: filteredArray})
      console.log(filteredArray)
    }
    this.props.filteredEvents(this.state.selectedSubjects)
  };

  render() {
    return (
      <div>
        <h1>{this.props.events}</h1>
        <input type="checkbox" onChange={this.handleCheckboxChange.bind(this)} value="ECON111"/>ECON111
        <input type="checkbox" onChange={this.handleCheckboxChange.bind(this)} value="ACCG100"/>ACCG100
        <input type="checkbox" onChange={this.handleCheckboxChange.bind(this)} value="ACCG224"/>ACCG224
        <input type="checkbox" onChange={this.handleCheckboxChange.bind(this)} value="BUSL250"/>BUSL250
        <input type="checkbox" onChange={this.handleCheckboxChange.bind(this)} value="ACST201"/>ACST201
      </div>
    )
  }
};

export default FilterSubjects;
