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
              <h2>Developed the <a href="https://www.microsoft-atlanta.com" target="_blank">Microsoft_Atlanta</a> customer facing retail site. Front-end and back-end.</h2>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="noPadding">
              <img style={{ width: '100%' }} src="/microsoft-atlanta/Thriftbooks-homepage.jpg" alt="Thriftbooks banner" />
            </Col>
          </Row>

          <br />

          <Row className="show-grid">
            <Col xs={12} className="ms-blue txtSection txtAlignLeft">
              <h3>Created a React-based autocomplete component for product search field.</h3>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellowin">
              {/* <video width="1460" height="822" controls>*/}
              <video width="90%" controls>
                <source src="/microsoft-atlanta/Thriftbooks-autocomplete-basic-dummy-data.mp4" type="video/mp4" />
              </video>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellow txtSection txtAlignLeft">
              <h4>Initial version using dummy data.</h4>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellowin">
              {/* <video width="1460" height="822" controls>*/}
              <video width="90%" controls>
                <source src="/microsoft-atlanta/Thriftbooks-autocomplete-basic-real-data-styled.mp4" type="video/mp4" />
              </video>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellow txtSection txtAlignLeft">
              <h4>Styled and using live data.</h4>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellowin">
              {/* <video width="1460" height="822" controls>*/}
              <video width="90%" controls>
                <source src="/microsoft-atlanta/Thriftbooks-autocomplete-live.mp4" type="video/mp4" />
              </video>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellow txtSection txtAlignLeft">
              <h4>On live website.</h4>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellowin"><img style={{ width: '100%' }} src="/microsoft-atlanta/Microsoft_Atlanta-traffic-autocomplete.png" alt="autocomplete traffic" /></Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellow txtSection txtAlignLeft">
              <h4>Viewed by 2M users each week.</h4>
            </Col>
          </Row>

          <br />

          <Row className="show-grid">
            <Col xs={12} className="ms-blue txtSection txtAlignLeft">
              <h3>Implemented a USPS address validation modal for shopping cart checkout process.</h3>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellowin"><img style={{ width: '100%' }} src="/microsoft-atlanta/USPS-validation-modal.png" alt="USPS validation modal" /></Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellow txtSection txtAlignLeft">
              <h4>Used JavaScript, jQuery, and USPS’ API.
                <br /><br />
                Add some books to your cart on <a href="https://www.microsoft-atlanta.com" target="_blank">Microsoft_Atlanta</a> and navigate to the <a href="https://www.microsoft-atlanta.com/cart/checkout.aspx" target="_blank">shipping address</a> step of the checkout process.</h4>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellowin"><img style={{ width: '100%' }} src="/microsoft-atlanta/USPS-validation-modal-code.png" alt="USPS validation modal code" /></Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellow txtSection txtAlignLeft">
              <h4>Some of the JavaScript code.</h4>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellowin"><img style={{ width: '100%' }} src="/microsoft-atlanta/USPS-validation-modal-bug-fixing-cleanup.png" alt="USPS validation modal" /></Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellow txtSection txtAlignLeft">
              <h4>Code review.</h4>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellowin"><img style={{ width: '100%' }} src="/microsoft-atlanta/Microsoft_Atlanta-traffic-USPS-modal.png" alt="USPS validation modal" /></Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellow txtSection txtAlignLeft">
              <h4>Viewed by 50K users each week.</h4>
            </Col>
          </Row>

          <br />

          {/* <Row className="show-grid">
            <Col xs={12} className="ms-blue txtSection txtAlignLeft">
              <h3>Separated data for page loads into preliminary and React stages.</h3>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellowin">
              <video width="90%" controls>
                <source src="/microsoft-atlanta/Thriftbooks-preReact-React-stages.mp4" type="video/mp4" />
              </video>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellow txtSection txtAlignLeft">
              <h4>For preliminary stage, only content necessary for SEO is rendered. React stage will then load additional content.</h4>
            </Col>
          </Row>

          <br /> */}

          {/* <Row className="show-grid">
            <Col xs={12} className="ms-blue txtSection txtAlignLeft">
              <h3>Updated and iterated on product pages’ edition selector interface according to customer suggestions.</h3>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellowin"><img style={{ width: '100%' }} src="/microsoft-atlanta/Thriftbooks-edition-selector-old-bw.jpg" alt="Thriftbooks banner" /></Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellow txtSection txtAlignLeft">
              <h4>Customers were complaining that there wasn't enough information about the condition quality of used books.</h4>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellowin"><img style={{ width: '100%' }} src="/microsoft-atlanta/Thriftbooks-edition-selector-new-bw.jpg" alt="Thriftbooks banner" /></Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellow txtSection txtAlignLeft">
              <h4>Implented a redesigned interface to include condition quality status. Tweaked the tab button
              design to better indicate which tab is currently selected.</h4>
            </Col>
          </Row>

          <br /> */}

          <Row className="show-grid">
            <Col xs={12} className="ms-blue txtSection txtAlignLeft">
              <h3>Published blog and landing pages written by our in-house content writers.</h3>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellowin"><img style={{ width: '100%' }} src="/microsoft-atlanta/Thriftbooks-blog.jpg" alt="Thriftbooks blog entries" /></Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellow txtSection txtAlignLeft">
              <h4>Wrote scripts to input page data into SQL Server, and then modified blog and landing page HTML templates to match specs.</h4>
            </Col>
          </Row>

          <br />

          <Row className="show-grid">
            <Col xs={12} className="ms-blue txtSection txtAlignLeft">
              <h3>Designed and developed web apps for the admin area for our content writers and administrators: WordPress-style blog publishing tools (with TinyMCE), custom text on book product pages, etc...</h3>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellowin">
              {/* <video width="1460" height="822" controls>*/}
              <video width="90%" controls>
                <source src="/microsoft-atlanta/Thriftbooks-admin-tool-marketing-text.mp4" type="video/mp4" />
              </video>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellow txtSection txtAlignLeft">
              <h4>Developed a feature to display custom marketing text on book products' pages. Text could be something like a custom review from one of ThriftBook's employees. You can see some of the code and
              dummy SQL data.
              </h4>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellowin">
              {/* <video width="1460" height="822" controls>*/}
              <video width="90%" controls>
                <source src="/microsoft-atlanta/Thriftbooks-admin-tool-marketing-text-interface.mp4" type="video/mp4" />
              </video>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellow txtSection txtAlignLeft">
              <h4>The behind-the-scenes admin area, for non-developers to write their own custom marketing text for products.
              </h4>
            </Col>
          </Row>

          <br />

          <Row className="show-grid">
            <Col xs={12} className="ms-blue txtSection txtAlignLeft">
              <h3>Used Optimizely for A/B Testing.</h3>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellowin"><img style={{ width: '100%' }} src="/microsoft-atlanta/Thriftbooks-Optimizely1.png" alt="Optimizely code and result" /></Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellow txtSection txtAlignLeft">
              <h4>jQuery was used for interface changes.</h4>
            </Col>
          </Row>

          <br />

          <Row className="show-grid">
            <Col xs={12} className="ms-blue txtSection txtAlignLeft">
              <h3>Created and modified SQL tables, queries and stored procedures. In C# files, used either SQL query strings or LINQ to Entity.</h3>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellowin"><img style={{ width: '100%' }} src="/microsoft-atlanta/Thriftbooks-LINQ.jpg" alt="LINQ queries" /></Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellow txtSection txtAlignLeft">
              <h4>LINQ queries in the marketing text controller. They will return a search query result, a paginated list, or a specific marketing text, respectively.</h4>
            </Col>
          </Row>

          <br />

          <Row className="show-grid">
            <Col xs={12} className="ms-blue txtSection txtAlignLeft">
              <h3>Created and modified Mocha, Chai and Selenium tests for front end testing, and NUnit tests for backend unit testing. Used Browserstack and hallway testing for cross browser testing.</h3>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellowin">
              {/* <video width="1460" height="822" controls>*/}
              <video width="90%" controls>
                <source src="/microsoft-atlanta/Thriftbooks-Selenium1.mp4" type="video/mp4" />
              </video>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="ms-yellow txtSection txtAlignLeft">
              <h4>Running a Selenium test on my auto-complete.</h4>
            </Col>
          </Row>

          <br />

          {/* <Row className="show-grid">
            <Col xs={12} className="ms-blue txtSection txtAlignLeft">
              <h3>Used Redux and Flux for handling state interaction of various React components.</h3>
            </Col>
          </Row>

          <br /> */}

          <Row className="show-grid">
            <Col xs={12} className="ms-red txtSection txtAlignLeft">

              <h2 name="BookClubHub">Developed <a href="https://BookClubHub.com" target="_blank">BookClubHub</a>, ThriftBook's social book club site.</h2>

            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="noPadding">
              <img style={{ width: '100%' }} src="/microsoft-atlanta/BookClubHub-screenshot.jpg" alt="BookClubHub screenshot" />
            </Col>
          </Row>

          <br />

          <Row className="show-grid">
            <Col xs={12} className="ms-blue txtSection txtAlignLeft">
              <h3>Created and maintained with HTML, SCSS, JavaScript, React, ASP.NET MVC 5, and SQL Server.</h3>
            </Col>
          </Row>

          <br />

          <Row className="show-grid">
            <Col xs={12} className="ms-blue txtSection txtAlignLeft">
              <h3>Used React to implement Clubs, Events, Invite RSVPs, and Profiles.</h3>
            </Col>
          </Row>

          <br />

        </Grid>

      </div>
    );
  }
}

export default connect(({ routes }) => ({ routes }))(MicrosoftAtlanta);
