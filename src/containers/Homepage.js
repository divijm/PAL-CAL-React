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
            <Card className="blue lighten-5 black-text"
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
                  <p>PAL/PASS sessions are designed to deepen your understanding of the unit content while acquiring transferable study skills. In these sessions, you will develop study techniques, improve communication skills and group interaction skills.</p>

                  <p>PAL/PASS leaders structure the sessions to ensure a collaborative learning environment. The PAL/PASS leader’s role is not to teach or provide you with the answers, but to enable you to develop the skills to find the answers yourself.</p>

                  <span> <h4>PAL will help you:</h4>
                    <ul>
                      <li>Achieve better grades</li>
                      <li>Build self-confidence by learning how to review and question unit material in a supportive peer-based environment.</li>
                      <li>Develop learning strategies that can be applied to other subjects throughout your university experience.</li>
                      <li>Get tips and hints from experienced students who have previously completed the units.</li>
                      <li>Stay organised and meet new people</li>
                      <li>Make friends, network and become part of a supportive learning community.</li>
                      <li>Understand "what to learn" and "how to learn it"</li>
                      <li><em>Fact: Students who attend consistently produce higher results than those who do not attend.</em></li>
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
