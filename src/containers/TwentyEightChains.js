import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
// import { Grid, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

class TwentyEightChains extends React.Component {
  render() {
    return (
      <div className="portfolioEntry ThriftBooks" style={{ textAlign: 'center' }}>
        <Grid>

          <Row className="show-grid">
            <Col xs={12} className="noPadding"><img src="/28Chains/28Chains-banner-lrg.jpg" alt="28Chains banner" /></Col>
          </Row>

          <br /><br />

          <br /><br /><br />

          <Row className="show-grid">
            <Col xs={12} className="CF3D26 txtSection txtAlignLeft">
              <Col xs={3}>
                <h3>ABOUT</h3>
              </Col>
              <Col xs={9}>
                <h4><a href="https://28Chains.com" target="_blank">28Chains</a> is a web app I'm developing to track and journal the various habits that I am building.</h4>
              </Col>
            </Col>
          </Row>

          <br />

          <Row className="show-grid">
            <Col xs={12} className="F3A326 txtSection txtAlignLeft">
              <h3>There are various features to help you commit to your goal daily.</h3>
            </Col>
          </Row>

        </Grid>
      </div>
    );
  }
}

export default connect(({ routes }) => ({ routes }))(TwentyEightChains);
