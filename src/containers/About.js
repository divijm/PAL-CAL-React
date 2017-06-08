import React, { Component } from 'react';
import { Collapsible, CollapsibleItem, Tabs, Tab } from 'react-materialize';
import ChartistGraph from 'react-chartist';
import Charts from '../components/Charts'

class About extends Component {
  render() {
    return (
      <div>
        <div>
          Students who attend PAL not only get to understand the unit better and be more organised but also are achieving better grades. The program is evaluated on regular basis and below are some results:
        </div>

        <Collapsible popout>
        	<CollapsibleItem header='ECON111' icon='filter_drama'>
            <div>
              <Tabs className='tab-demo z-depth-1'>
            		<Tab title="Test 1" active><Charts /></Tab>
            		<Tab title="Test 2">Test 2</Tab>
            		<Tab title="Test 3">Test 3</Tab>
            		<Tab title="Test 4">Test 4</Tab>
              </Tabs>
            </div>
        		Lorem ipsum dolor sit amet.
        	</CollapsibleItem>
        	<CollapsibleItem header='ACCG100' icon='place'>
        		Lorem ipsum dolor sit amet.
        	</CollapsibleItem>
        	<CollapsibleItem header='ACCG224' icon='whatshot'>
        		Lorem ipsum dolor sit amet.
        	</CollapsibleItem>
          <CollapsibleItem header='BUSL250' icon='whatshot'>
        		Lorem ipsum dolor sit amet.
        	</CollapsibleItem>
          <CollapsibleItem header='ACST201' icon='whatshot'>
        		Lorem ipsum dolor sit amet.
        	</CollapsibleItem>
        </Collapsible>


      </div>
    )
  }
}

export default About;
