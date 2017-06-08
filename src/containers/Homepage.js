import React, { Component } from 'react';
import { Row, Col, CardPanel, CardTitle, Card, MediaBox } from 'react-materialize';

class Homepage extends Component {
  render() {

    const jumbotronStyle = {
      paddingBottom: '150px',
      boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)"
    }

    return (
      <div>
        <div>
          <Row>
            <Card className="teal lighten-4 black-text"
            	header={<CardTitle image={require('../images/cover-photo.jpg')}></CardTitle>}
            	actions={[<a href='/calendar'>COOL! Show me the Timetable!</a>]}>
                <h2>Peer-Assisted Learning (PAL)</h2>
                <p>PAL involves experienced students running weekly study sessions/workshops for their peers to help with learning and academic transition. FREE Weekly one-hour workshops are open to all enrolled students!</p>
            </Card>
            <Row>
              <Col s={12} m={5}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/qBLR1y8ADzQ" frameborder="0" allowfullscreen></iframe>
              </Col>
              <Col s={12} m={7}>
                <CardPanel>
                  <span> <h4>PAL will help you:</h4>
                    <ul>
                      <li>Achieve better grades</li>
                      <li>Understand and revise lecture content on weekly basis</li>
                      <li>Get tips and hints from students who've done the units before</li>
                      <li>Stay organised and meet new people</li>
                      <li>Understand "what to learn" and "how to learn it"</li>
                    </ul>
                  </span>
                </CardPanel>
              </Col>
            </Row>
          </Row>
        </div>
      </div>
    );
  }
}

export default Homepage;
