import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

class ThriftBooks extends React.Component {
  render() {
    return (
      <div className="portfolioEntry ThriftBooks" style={{ textAlign: 'center' }}>

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
            <Col xs={12} className="noPadding"><img src="/thriftbooks/Thriftbooks-banner-lrg.jpg" alt="Thriftbooks banner" /></Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="F3A326 txtSection txtAlignLeft">
              <h2>Developed ThriftBook's customer facing retail site.</h2>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="noPadding"><img style={{ width: '100%' }} src="/thriftbooks/Thriftbooks-homepage.jpg" alt="Thriftbooks banner" /></Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="F7CF87 txtSection txtAlignLeft">
              <h2>Updated and iterated on book pages’ edition selector interface according to customer suggestions.</h2>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="F7CF87 txtSection txtAlignLeft">
              <h2>Separated data for page loads into preliminary and React stages. For preliminary stage, only content necessary for SEO is rendered. React stage will then load additional content.</h2>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="F7CF87 txtSection txtAlignLeft">
              <h2>Created a React-based autocomplete component for product search field.</h2>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="F7CF87 txtSection txtAlignLeft">
              <h2>Used Redux and Flux for handling state interaction of various React components.</h2>
            </Col>
          </Row>

        </Grid>

      </div>
    );
  }
}

export default connect(({ routes }) => ({ routes }))(ThriftBooks);
