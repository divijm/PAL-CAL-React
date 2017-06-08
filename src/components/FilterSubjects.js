import React, { Component } from 'react';
import { Row, Input } from 'react-materialize';
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
        <div>
          <h1>{this.props.events}</h1>
        </div>
        <div>
          <Row>
        		<Input type='checkbox' value='ECON111' onChange={this.handleCheckboxChange.bind(this)} label='ECON111' />
            <Input type='checkbox' value='ACCG100' onChange={this.handleCheckboxChange.bind(this)} label='ACCG100' defaultValue='checked' />
            <Input type='checkbox' value='ACCG224' onChange={this.handleCheckboxChange.bind(this)} label='ACCG224' />
            <Input type='checkbox' value='BUSL250' onChange={this.handleCheckboxChange.bind(this)} label='BUSL250' />
            <Input type='checkbox' value='ACST201' onChange={this.handleCheckboxChange.bind(this)} label='ACST201' />
          </Row>
        </div>
      </div>
    )
  }
};

export default FilterSubjects;
