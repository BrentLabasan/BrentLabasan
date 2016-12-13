import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

class ThriftBooks extends React.Component {
  render() {
    return (
      <div className="portfolioEntry ThriftBooks" style={{ textAlign: 'center' }}>

        {/* <div style={{ overflow: 'hidden' }}>
          <img src="/thriftbooks/Thriftbooks-banner.jpg" alt="Thriftbooks banner" />
        </div>

        <div className="F3A326 txtSection txtAlignLeft height200">
          <h2>Developed ThriftBook's customer facing retail site.</h2>
        </div>*/}

        <Grid fluid>
          <Row className="show-grid">
            <Col xs={10} sm={12} md={12} lg={12}><img src="/thriftbooks/Thriftbooks-banner.jpg" alt="Thriftbooks banner" /></Col>
          </Row>

          <Row className="show-grid">

            {/* <Col xs={10} className="F3A326"><h2>Developed ThriftBook's customer facing retail site.</h2></Col>*/}
          </Row>


        </Grid>

      </div>
    );
  }
}

export default connect(({ routes }) => ({ routes }))(ThriftBooks);
