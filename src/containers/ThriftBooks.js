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
          <br />
          <Row className="show-grid">
            <Col xs={12} className="CF3D26 txtSection txtAlignLeft">
              <h2>Developed ThriftBook's customer facing retail site.</h2>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="noPadding"><img style={{ width: '100%' }} src="/thriftbooks/Thriftbooks-homepage.jpg" alt="Thriftbooks banner" /></Col>
          </Row>
          <br />

          <Row className="show-grid">
            <Col xs={12} className="F3A326 txtSection txtAlignLeft">
              <h3>Updated and iterated on product pages’ edition selector interface according to customer suggestions.</h3>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="noPadding"><img style={{ width: '100%' }} src="/thriftbooks/Thriftbooks-edition-selector-old-bw.jpg" alt="Thriftbooks banner" /></Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="F7CF87 txtSection txtAlignLeft">
              <h4>Customers were complaining that there wasn't enough information about the condition quality of used books.</h4>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="noPadding"><img style={{ width: '100%' }} src="/thriftbooks/Thriftbooks-edition-selector-new-bw.jpg" alt="Thriftbooks banner" /></Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="F7CF87 txtSection txtAlignLeft">
              <h4>Implented a redesigned interface to include condition quality status. Tweaked the tab button
              design to better indicate which tab is currently selected.</h4>
            </Col>
          </Row>

          <br />

          <Row className="show-grid">
            <Col xs={12} className="F3A326 txtSection txtAlignLeft">
              <h3>Separated data for page loads into preliminary and React stages. For preliminary stage, only content necessary for SEO is rendered. React stage will then load additional content.</h3>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="noPadding">
              <video width="1460" height="822" controls>
                <source src="/thriftbooks/Thriftbooks-preReact-React-stages.mp4" type="video/mp4" />
              </video>
            </Col>
          </Row>

          <br />
          
          <Row className="show-grid">
            <Col xs={12} className="F3A326 txtSection txtAlignLeft">
              <h3>Created a React-based autocomplete component for product search field.</h3>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="F3A326 txtSection txtAlignLeft">
              <h3>Used Redux and Flux for handling state interaction of various React components.</h3>
            </Col>
          </Row>

        </Grid>

      </div>
    );
  }
}

export default connect(({ routes }) => ({ routes }))(ThriftBooks);
