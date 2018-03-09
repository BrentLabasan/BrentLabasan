import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
// import { Grid, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

class RequestAStellarATM extends React.Component {
  render() {
    return (
      <div className="portfolioEntry RequestAStellarATM" style={{ textAlign: 'center' }}>

        <Grid>

          {/* <Row className="show-grid">
            <Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
            <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
          </Row>

          <Row className="show-grid">
            <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
            <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
            <Col xsHidden md={4}><code>&lt;{'Col xsHidden md={4}'} /&gt;</code></Col>
          </Row>

          <Row className="show-grid">
            <Col xs={6} xsOffset={6}><code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code></Col>
          </Row>

          <Row className="show-grid">
            <Col md={6} mdPush={6}><code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code></Col>
            <Col md={6} mdPull={6}><code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code></Col>
          </Row>*/}

          <Row className="show-grid">
            <Col xs={12} className="noPadding"><img src="/request-a-stellar-atm/RequestAStellarATM-banner-large.png" alt="Thriftbooks banner" /></Col>
          </Row>

          <br /><br />

          {/* <ButtonGroup>
            <Button bsStyle="success">Thriftbooks</Button>
            <Button>BookClubHub</Button>
          </ButtonGroup>*/}

          <br /><br /><br />

          <Row className="show-grid">
            <Col xs={12} className="ms-red txtSection txtAlignLeft">
              <h2>
                Developed a <a href="http://RequestAStellarATM.com" target="_blank">web app</a> that allows users to donate Stellar Lumens (IBM-partnered cryptocurrency) towards funding cryptocurrency ATMs in underbanked locations.
              </h2>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="noPadding">
              <img style={{ width: '100%' }} src="/request-a-stellar-atm/intro.png" alt="Thriftbooks banner" />
            </Col>
          </Row>

          <br />

          <Row className="show-grid">
            <Col xs={12} className="ms-blue txtSection txtAlignLeft">
              <h3>Instead of sending fiat currency to a middleman organization, users send Lumens to a dedicated public address, which allow users to transparently see all transactions coming in and out. </h3>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellowin txtSection txtAlignLeft">
              <img style={{ width: '40%', margin: '40px 0' }} src="/request-a-stellar-atm/coordinates.png" alt="Thriftbooks banner" />
            </Col>
          </Row>

        </Grid>

      </div>
    );
  }
}

export default connect(({ routes }) => ({ routes }))(RequestAStellarATM);
