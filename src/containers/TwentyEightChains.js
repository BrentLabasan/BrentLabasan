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

          <Row className="show-grid">
            <Col xs={12} className="noPadding">
              <img style={{ width: '100%' }} src="/28Chains/28Chains-banner-screenshot.jpg" alt="Madison Performance Group homepage screenshot" />
            </Col>
          </Row>

          <br />

          <Row className="show-grid">
            <Col xs={12} className="F3A326 txtSection txtAlignLeft">
              <h3>There are various features to help you commit to your goal daily.</h3>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="F7CF87in"><img style={{ width: '100%' }} src="/28Chains/28Chains-chainCollage.jpg" alt="28Chains chain collage" /></Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="F7CF87 txtSection txtAlignLeft">
              <h4>I track my habit building activity by 28 day periods. The higher your consistency, the stronger the chain.</h4>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="F7CF87in"><img style={{ width: '100%' }} src="/28Chains/28Chains-JournalAdvice.jpg" alt="28Chains journal advice" /></Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="F7CF87 txtSection txtAlignLeft">
              <h4>You can journal your daily activity, and there is a separate field for writing down advice that you would want other people working on the same habit to know.</h4>
            </Col>
          </Row>

          <br />

          <Row className="show-grid">
            <Col xs={12} className="F3A326 txtSection txtAlignLeft">
              <h3>HTML, CSS, JavaScript, React, Bootstrap on the front end. Heroku, Node, Firebase (NoSQL), and Mocha + Chai  on the back end.</h3>
            </Col>
          </Row>

        </Grid>
      </div>
    );
  }
}

export default connect(({ routes }) => ({ routes }))(TwentyEightChains);
