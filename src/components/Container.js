import React, { PropTypes } from 'react';
import { Grid, Navbar, NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Container extends React.Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    return (
      <div className="wrapper">
        <Navbar className="main-nav">
          <LinkContainer to="/">
            <Navbar.Brand>BRENTLABASAN</Navbar.Brand>
          </LinkContainer>
          <Nav>

            {/* <LinkContainer to="/" onlyActiveOnIndex>
              <NavItem eventKey={1}>Home</NavItem>
            </LinkContainer>*/}

            {/* <LinkContainer to="/account">
              <NavItem eventKey={2}>Account</NavItem>
            </LinkContainer>*/}

            <NavDropdown eventKey={1} title="Portfolio" id="basic-nav-dropdown">
              <MenuItem eventKey={1.1} href="/portfolio/thriftbooks">ThriftBooks</MenuItem>
              <MenuItem eventKey={1.2} href="/portfolio/slalom-consulting">Slalom Consulting</MenuItem>
              <MenuItem eventKey={1.3} href="/portfolio/intersect">Intersect</MenuItem>
              <MenuItem eventKey={1.4} href="/portfolio/metia">Metia</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={1.5} href="/portfolio/28Chains">28Chains</MenuItem>
            </NavDropdown>

          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="/resume">Resume</NavItem>
            <NavItem eventKey={2} href="/about">About</NavItem>
            <LinkContainer to="/contact">
              <NavItem eventKey={3}>Contact</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar>

        <Grid className="content">
          {this.props.children}
        </Grid>

        <a href="https://github.com/lynndylanhurley/redux-auth">
          <img
            style={{ position: 'absolute', top: 0, right: 0, border: 0 }}
            src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67"
            alt="Fork me on GitHub"
            data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"
          />
        </a>
      </div>
    );
  }
}

export default Container;
