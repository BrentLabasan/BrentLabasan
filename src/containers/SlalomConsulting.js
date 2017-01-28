import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
// import { Grid, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

class SlalomConsulting extends React.Component {
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
            <Col xs={12} className="noPadding"><img src="/slalom-consulting/Slalom-Consulting-banner-lrg.jpg" alt="Thriftbooks banner" /></Col>
          </Row>

          <br /><br />

          {/* <ButtonGroup>
            <Button bsStyle="success">Thriftbooks</Button>
            <Button>BookClubHub</Button>
          </ButtonGroup>*/}

          <br /><br /><br />

          <Row className="show-grid">
            <Col xs={12} className="CF3D26 txtSection txtAlignLeft">
              <Col xs={4}>
                <h2>Madison Performance Group</h2>
              </Col>
              <Col xs={8}>
                <h4>Front-end development of a new employee recognition web application, using AngularJS and MVC5.</h4>
              </Col>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="noPadding">
              <img style={{ width: '100%' }} src="/slalom-consulting/MadisonPerformanceGroup-homepage.jpg" alt="Madison Performance Group homepage screenshot" />
            </Col>
          </Row>

          <br />

          <Row className="show-grid">
            <Col xs={12} className="F3A326 txtSection txtAlignLeft">
              <h3>Implemented AngularJS views, routing, and directives to integrate a single page user experience.</h3>
            </Col>
          </Row>

          <br />

          <Row className="show-grid">
            <Col xs={12} className="F3A326 txtSection txtAlignLeft">
              <h3>Primary test author and tester for the client facing portion of the web application. Types of testing included manual, exploratory, regression, Selenium, and cross browser testing.</h3>
            </Col>
          </Row>

          <br />

          <Row className="show-grid">
            <Col xs={12} className="CF3D26 txtSection txtAlignLeft">
              <Col xs={4}>
                <h2>McKesson Corporation</h2>
              </Col>
              <Col xs={8}>
                <h4 style={{ padding: '40px', fontSize: '20px' }}>Built web services and UI for a new module on a mature Healthcare software management suite. Resolved business concerns about inefficient medical insurance claim management by providing a more automated, streamlined and user friendly system for processing insurance claims.</h4>
              </Col>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="noPadding">
              <img style={{ width: '100%' }} src="/slalom-consulting/McKesson-manageClaimAssignmentsPayerStatusRules.jpg" alt="McKesson manage claim assignments payer status rules screenshot" />
            </Col>
          </Row>

          <br />

          <Row className="show-grid">
            <Col xs={12} className="F3A326 txtSection txtAlignLeft">
              <h3>Implemented and tested an ASP.NET MVC4 Web API</h3>
            </Col>
          </Row>

          <br />

          <Row className="show-grid">
            <Col xs={12} className="F3A326 txtSection txtAlignLeft">
              <h3>Programmed with JavaScript and Angular on the front-end and C# for the back-end.</h3>
            </Col>
          </Row>

          <br />

          <Row className="show-grid">
            <Col xs={12} className="F3A326 txtSection txtAlignLeft">
              <h3>Developed a client side interface that utilized the Web API for a rich user experience.</h3>
            </Col>
          </Row>

          <br />

          <Row className="show-grid">
            <Col xs={12} className="F3A326 txtSection txtAlignLeft">
              <h3>Supporting operations with records numbering in the millions.</h3>
            </Col>
          </Row>

          <br />

          <Row className="show-grid">
            <Col xs={12} className="F3A326 txtSection txtAlignLeft">
              <h3>Test driven development with NUnit and Moq.</h3>
            </Col>
          </Row>

          <br />

          {/* <Row className="show-grid">
            <Col xs={12} className="F3A326 txtSection txtAlignLeft">
              <h3>Created a React-based autocomplete component for product search field.</h3>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="F7CF87in">
              <video width="90%" controls>
                <source src="/thriftbooks/Thriftbooks-autocomplete-basic-dummy-data.mp4" type="video/mp4" />
              </video>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="F7CF87 txtSection txtAlignLeft">
              <h4>Initial version using dummy data.</h4>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="F7CF87in">
              <video width="90%" controls>
                <source src="/thriftbooks/Thriftbooks-autocomplete-basic-real-data-styled.mp4" type="video/mp4" />
              </video>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="F7CF87 txtSection txtAlignLeft">
              <h4>Styled and using live data.</h4>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="F7CF87in">
              <video width="90%" controls>
                <source src="/thriftbooks/Thriftbooks-autocomplete-live.mp4" type="video/mp4" />
              </video>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="F7CF87 txtSection txtAlignLeft">
              <h4>On live website.</h4>
            </Col>
          </Row>

          <br />

          <Row className="show-grid">
            <Col xs={12} className="F3A326 txtSection txtAlignLeft">
              <h3>Implemented a USPS address validation modal for shopping cart checkout process.</h3>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="F7CF87in"><img style={{ width: '100%' }} src="/thriftbooks/USPS-validation-modal.png" alt="USPS validation modal" /></Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="F7CF87 txtSection txtAlignLeft">
              <h4>Used JavaScript, jQuery, and USPS’ API.
                <br /><br />
                Add some books to your cart on <a href="https://www.thriftbooks.com" target="_blank">ThriftBooks</a> and navigate to the <a href="https://www.thriftbooks.com/cart/checkout.aspx" target="_blank">shipping address</a> step of the checkout process.</h4>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="F7CF87in"><img style={{ width: '100%' }} src="/thriftbooks/USPS-validation-modal-code.png" alt="USPS validation modal code" /></Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="F7CF87 txtSection txtAlignLeft">
              <h4>Some of the JavaScript code.</h4>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="F7CF87in"><img style={{ width: '100%' }} src="/thriftbooks/USPS-validation-modal-bug-fixing-cleanup.png" alt="USPS validation modal" /></Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="F7CF87 txtSection txtAlignLeft">
              <h4>Code review.</h4>
            </Col>
          </Row>

          <br />

          {/* <Row className="show-grid">
            <Col xs={12} className="F3A326 txtSection txtAlignLeft">
              <h3>Separated data for page loads into preliminary and React stages.</h3>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="F7CF87in">
              <video width="90%" controls>
                <source src="/thriftbooks/Thriftbooks-preReact-React-stages.mp4" type="video/mp4" />
              </video>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="F7CF87 txtSection txtAlignLeft">
              <h4>For preliminary stage, only content necessary for SEO is rendered. React stage will then load additional content.</h4>
            </Col>
          </Row>

          <br /> */}

          {/* <Row className="show-grid">
            <Col xs={12} className="F3A326 txtSection txtAlignLeft">
              <h3>Updated and iterated on product pages’ edition selector interface according to customer suggestions.</h3>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="F7CF87in"><img style={{ width: '100%' }} src="/thriftbooks/Thriftbooks-edition-selector-old-bw.jpg" alt="Thriftbooks banner" /></Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="F7CF87 txtSection txtAlignLeft">
              <h4>Customers were complaining that there wasn't enough information about the condition quality of used books.</h4>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="F7CF87in"><img style={{ width: '100%' }} src="/thriftbooks/Thriftbooks-edition-selector-new-bw.jpg" alt="Thriftbooks banner" /></Col>
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
              <h3>Published blog and landing pages written by our in-house content writers.</h3>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="F7CF87in"><img style={{ width: '100%' }} src="/thriftbooks/Thriftbooks-blog.jpg" alt="Thriftbooks blog entries" /></Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="F7CF87 txtSection txtAlignLeft">
              <h4>Wrote scripts to input page data into SQL Server, and then modified blog and landing page HTML templates to match specs.</h4>
            </Col>
          </Row>

          <br />

          <Row className="show-grid">
            <Col xs={12} className="F3A326 txtSection txtAlignLeft">
              <h3>Designed and developed web apps for the admin area for our content writers and administrators: WordPress-style blog publishing tools (with TinyMCE), custom text on book product pages, etc...</h3>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="F7CF87in">
              <video width="90%" controls>
                <source src="/thriftbooks/Thriftbooks-admin-tool-marketing-text.mp4" type="video/mp4" />
              </video>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="F7CF87 txtSection txtAlignLeft">
              <h4>Developed a feature to display custom marketing text on book products' pages. Text could be something like a custom review from one of ThriftBook's employees. You can see some of the code and
              dummy SQL data.
              </h4>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="F7CF87in">
              <video width="90%" controls>
                <source src="/thriftbooks/Thriftbooks-admin-tool-marketing-text-interface.mp4" type="video/mp4" />
              </video>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="F7CF87 txtSection txtAlignLeft">
              <h4>The behind-the-scenes admin area, for non-developers to write their own custom marketing text for products.
              </h4>
            </Col>
          </Row>

          <br />

          <Row className="show-grid">
            <Col xs={12} className="F3A326 txtSection txtAlignLeft">
              <h3>Used Optimizely for A/B Testing.</h3>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="F7CF87in"><img style={{ width: '100%' }} src="/thriftbooks/Thriftbooks-Optimizely1.png" alt="Optimizely code and result" /></Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="F7CF87 txtSection txtAlignLeft">
              <h4>jQuery was used for interface changes.</h4>
            </Col>
          </Row>

          <br />

          <Row className="show-grid">
            <Col xs={12} className="F3A326 txtSection txtAlignLeft">
              <h3>Created and modified SQL tables, queries and stored procedures. In C# files, used either SQL query strings or LINQ to Entity.</h3>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="F7CF87in"><img style={{ width: '100%' }} src="/thriftbooks/Thriftbooks-LINQ.jpg" alt="LINQ queries" /></Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="F7CF87 txtSection txtAlignLeft">
              <h4>LINQ queries in the marketing text controller. They will return a search query result, a paginated list, or a specific marketing text, respectively.</h4>
            </Col>
          </Row>

          <br />

          <Row className="show-grid">
            <Col xs={12} className="F3A326 txtSection txtAlignLeft">
              <h3>Created and modified Mocha, Chai and Selenium tests for front end testing, and NUnit tests for backend unit testing. Used Browserstack and hallway testing for cross browser testing.</h3>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="F7CF87in">
              <video width="90%" controls>
                <source src="/thriftbooks/Thriftbooks-Selenium1.mp4" type="video/mp4" />
              </video>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="F7CF87 txtSection txtAlignLeft">
              <h4>Running a Selenium test on my auto-complete.</h4>
            </Col>
          </Row>

          <br />

          {/* <Row className="show-grid">
            <Col xs={12} className="F3A326 txtSection txtAlignLeft">
              <h3>Used Redux and Flux for handling state interaction of various React components.</h3>
            </Col>
          </Row>

          <br />

          <Row className="show-grid">
            <Col xs={12} className="CF3D26 txtSection txtAlignLeft">
              <h2>Developed <a href="https://BookClubHub.com" target="_blank">BookClubHub</a>, ThriftBook's social book club site.</h2>
            </Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} className="noPadding">
              <img style={{ width: '100%' }} src="/thriftbooks/BookClubHub-screenshot.jpg" alt="BookClubHub screenshot" />
            </Col>
          </Row>

          <br />

          <Row className="show-grid">
            <Col xs={12} className="F3A326 txtSection txtAlignLeft">
              <h3>Created and maintained with HTML, SCSS, JavaScript, React, ASP.NET MVC 5, and SQL Server.</h3>
            </Col>
          </Row>

          <br />

          <Row className="show-grid">
            <Col xs={12} className="F3A326 txtSection txtAlignLeft">
              <h3>Used React to implement Clubs, Events, Invite RSVPs, and Profiles.</h3>
            </Col>
          </Row>

          <br /> */}

        </Grid>

      </div>
    );
  }
}

export default connect(({ routes }) => ({ routes }))(SlalomConsulting);
