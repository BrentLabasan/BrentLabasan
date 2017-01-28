import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
// import { Grid, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

class About extends React.Component {
  render() {
    return (
      <div className="portfolioEntry ThriftBooks" style={{ textAlign: 'center' }}>
        <Grid>

          <Row className="show-grid">

            <Col xs={12} className="CF3D26 txtSection txtAlignLeft">
              <Col xs={3}>
                <h2>About</h2>
              </Col>
              <Col xs={9}>
                <h4>Hi there! My name is Brent Labasan and I am a Seattle based web developer who has worked with a variety of technologies such as Angular, React, and ASP.NET MVC.</h4>
              </Col>
            </Col>

          </Row>

          <br /><br />

          <Row className="show-grid">

            <Col xs={12} className="CF3D26 txtSection txtAlignLeft">
              <Col xs={3}>
                <h2>Work</h2>
              </Col>
              <Col xs={9}>
                <h4>I've worked at a variety of companies big and small, from startups, to digital marketing agencies, to retail sites.</h4>
              </Col>
            </Col>

          </Row>

          <br /><br />

          <Row className="show-grid">

            <Col xs={12} className="CF3D26 txtSection txtAlignLeft">
              <Col xs={3}>
                <h2>Education</h2>
              </Col>
              <Col xs={9}>
                <h4>I graduated from the University of Washington with a BS in Informatics, with concentrations in Human-Computer Interaction and Information Architecture. Basically, front-end and back-end.</h4>
              </Col>
            </Col>

          </Row>

          <br /><br />

          <Row className="show-grid">

            <Col xs={12} className="CF3D26 txtSection txtAlignLeft">
              <Col xs={3}>
                <h2>Hobbies</h2>
              </Col>
              <Col xs={9}>
                <h4>I like to program, even after I get home from work.
                  <br />
                I also like making music in my spare time.</h4>

                <iframe width="100%" height="300" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/185420013&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
              </Col>
            </Col>

          </Row>

        </Grid>

      </div>
    );
  }
}

export default connect(({ routes }) => ({ routes }))(About);
