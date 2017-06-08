import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';
import { Card, CardTitle, Row, Col } from 'react-materialize';

class Leaders extends Component {
  render() {
    return (
      <div>
        <h1>PAL Leaders</h1>
          <Row>
            <Col s={12} m={6} l={4}>
              <Card header={<CardTitle reveal image={require("../images/thuglyf.png")} waves='light'/>}
            		title="Divij Mehra"
            		reveal={<p>Yee cheerio maaaaate!</p>}>
              </Card>
            </Col>

            <Col s={12} m={6} l={4}>
              <Card header={<CardTitle reveal image={require("../images/shouhei.jpg")} waves='light'/>}
                title="Shouhei Yamauchi"
                reveal={<p>It's showtime baby! You know how it is dawwwg!</p>}>
              </Card>
            </Col>

            <Col s={12} m={6} l={4}>
              <Card header={<CardTitle reveal image={require("../images/alex2.jpg")} waves='light'/>}
                title="Alex Rapley"
                reveal={<p>Coooked as eh!</p>}>
              </Card>
            </Col>

            <Col s={12} m={6} l={4}>
              <Card header={<CardTitle reveal image={require("../images/marlon.jpg")} waves='light'/>}
                title="Marlon Dimaano"
                reveal={<p>Damn Gurrrrrlllll!</p>}>
              </Card>
            </Col>

            <Col s={12} m={6} l={4}>
              <Card header={<CardTitle reveal image={require("../images/firman.jpg")} waves='light'/>}
                title="Firman Cahyandi"
                reveal={<p>Kiss me Katut!</p>}>
              </Card>
            </Col>

            <Col s={12} m={6} l={4}>
              <Card header={<CardTitle reveal image={require("../images/jess3.png")} waves='light'/>}
                title="Jess Tada"
                reveal={<p>What's in the box today? What's in the box toddaaaaaaaay?</p>}>
              </Card>
            </Col>

          </Row>

      </div>
    )
  };
}

export default Leaders;
