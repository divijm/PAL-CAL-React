import React, { Component } from 'react';
import { Collapsible, CollapsibleItem, Tabs, Tab } from 'react-materialize';
import ChartistGraph from 'react-chartist';
import Charts from '../components/Charts'

class About extends Component {
  constructor(props) {
    super(props);
    this.state = { updateGraph: 0 }
  }

  render() {
    return (
      <div>
        <div>
          Students who attend PAL not only get to understand the unit better and be more organised but also are achieving better grades. The program is evaluated on regular basis and below are some results:
        </div>

        <Collapsible popout>

        	<CollapsibleItem header='ECON111' icon='arrow_drop_down'>
            <Tabs onChange={() => this.setState({ updateGraph: this.state.updateGraph + 1 })} className='tab-demo z-depth-1'>
            	<Tab title="Session 1, 2017" active> <Charts forceUpdate={this.state.updateGraph} /> </Tab>
              <Tab title="Session 2, 2016">Test 2</Tab>
              <Tab title="Session 1, 2016">Test 3</Tab>
            </Tabs>
        		Lorem ipsum dolor sit amet.
        	</CollapsibleItem>

        	<CollapsibleItem header='ACCG100' icon='arrow_drop_down'>
            <Tabs onChange={() => this.setState({ updateGraph: this.state.updateGraph + 1 })} className='tab-demo z-depth-1'>
              <Tab title="Session 1, 2017" active> <Charts forceUpdate={this.state.updateGraph} /> </Tab>
              <Tab title="Session 2, 2016">Test 2</Tab>
              <Tab title="Session 1, 2016">Test 3</Tab>
            </Tabs>
        		Lorem ipsum dolor sit amet.
        	</CollapsibleItem>

        	<CollapsibleItem header='ACCG224' icon='arrow_drop_down'>
            <Tabs onChange={() => this.setState({ updateGraph: this.state.updateGraph + 1 })} className='tab-demo z-depth-1'>
              <Tab title="Session 1, 2017" active> <Charts forceUpdate={this.state.updateGraph} /> </Tab>
              <Tab title="Session 2, 2016">Test 2</Tab>
              <Tab title="Session 1, 2016">Test 3</Tab>
            </Tabs>
        		Lorem ipsum dolor sit amet.
        	</CollapsibleItem>

          <CollapsibleItem header='BUSL250' icon='arrow_drop_down'>
            <Tabs onChange={() => this.setState({ updateGraph: this.state.updateGraph + 1 })} className='tab-demo z-depth-1'>
              <Tab title="Session 1, 2017" active> <Charts forceUpdate={this.state.updateGraph} /> </Tab>
              <Tab title="Session 2, 2016">Test 2</Tab>
              <Tab title="Session 1, 2016">Test 3</Tab>
            </Tabs>
        		Lorem ipsum dolor sit amet.
        	</CollapsibleItem>

          <CollapsibleItem header='ACST201' icon='arrow_drop_down'>
            <Tabs onChange={() => this.setState({ updateGraph: this.state.updateGraph + 1 })} className='tab-demo z-depth-1'>
              <Tab title="Session 1, 2017" active> <Charts forceUpdate={this.state.updateGraph} /> </Tab>
              <Tab title="Session 2, 2016">Test 2</Tab>
              <Tab title="Session 1, 2016">Test 3</Tab>
            </Tabs>
        		Lorem ipsum dolor sit amet.
        	</CollapsibleItem>

        </Collapsible>
      </div>
    )
  }
}

export default About;
