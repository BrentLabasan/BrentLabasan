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

      </div>
    );
  }
}

export default Container;
