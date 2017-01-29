import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
// import { Grid, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

class Contact extends React.Component {
  render() {
    return (

      <div className="portfolioEntry ThriftBooks" style={{ textAlign: 'center' }}>

        <Grid>

          <Row className="show-grid">

            <Col xs={12} className="CF3D26 txtSection txtAlignLeft">
              <Col xs={3}>
                <h2>Contact</h2>
              </Col>
              <Col xs={9}>
                <h4>Want to chat about web development jobs or consulting?</h4>
                <h4>Send me a message at <a href="mailto:BrentLabasan@gmail.com?Subject=Insert%Subject%20Here" target="_top">BrentLabasan@gmail.com</a></h4>
              </Col>
            </Col>

          </Row>

        </Grid>

      </div>
    );
  }
}

export default connect(({ routes }) => ({ routes }))(Contact);
