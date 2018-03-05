import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
// import { Grid, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

class MicrosoftAtlanta extends React.Component {
  render() {
    return (
      <div className="portfolioEntry MicrosoftAtlanta" style={{ textAlign: 'center' }}>

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
            <Col xs={12} className="noPadding"><img src="/microsoft-atlanta/Microsoft-Atlanta-banner-lrg.jpg" alt="Thriftbooks banner" /></Col>
          </Row>

          <br /><br />

          {/* <ButtonGroup>
            <Button bsStyle="success">Thriftbooks</Button>
            <Button>BookClubHub</Button>
          </ButtonGroup>*/}

          <br /><br /><br />

          <Row className="show-grid">
            <Col xs={12} className="ms-red txtSection txtAlignLeft">
              <h2>Front-end and back-end development of a content moderation web application, for use both internally and by Microsoft’s partners.</h2>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="noPadding">
              <img style={{ width: '100%' }} src="/microsoft-atlanta/Microsoft-Atlanta-moderation1.jpg" alt="Thriftbooks banner" />
            </Col>
          </Row>

          <br />

          <Row className="show-grid">
            <Col xs={12} className="ms-blue txtSection txtAlignLeft">
              <h3>Content types include text, URLs, audio, video, and 3D models.</h3>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellowin">
              {/* <video width="1460" height="822" controls>*/}
              <video width="90%" controls>
                <source src="/microsoft-atlanta/text1.mp4" type="video/mp4" />
              </video>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellow txtSection txtAlignLeft">
              <h4>Building the text moderation section.</h4>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellowin">
              {/* <video width="1460" height="822" controls>*/}
              <video width="90%" controls>
                <source src="/microsoft-atlanta/image1-zoom.mp4" type="video/mp4" />
              </video>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellow txtSection txtAlignLeft">
              <h4>Building the image moderation section. Testing the content zoom function.</h4>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellowin">
              {/* <video width="1460" height="822" controls>*/}
              <video width="90%" controls>
                <source src="/microsoft-atlanta/url2-tagging.mp4" type="video/mp4" />
              </video>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellow txtSection txtAlignLeft">
              <h4>Tagging URLs. Testing the tag selection and search interface. Verifying that content cannot be tagged with the same tag twice.</h4>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellowin">
              {/* <video width="1460" height="822" controls>*/}
              <video width="90%" controls>
                <source src="/microsoft-atlanta/video1.mp4" type="video/mp4" />
              </video>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellow txtSection txtAlignLeft">
              <h4>Testing video playback in the video section.</h4>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellowin">
              {/* <video width="1460" height="822" controls>*/}
              <video width="90%" controls>
                <source src="/microsoft-atlanta/3D.mp4" type="video/mp4" />
              </video>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellow txtSection txtAlignLeft">
              <h4>Developing the 3D model section.</h4>
            </Col>
          </Row>

        </Grid>

      </div>
    );
  }
}

export default connect(({ routes }) => ({ routes }))(MicrosoftAtlanta);
