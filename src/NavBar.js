import React from 'react';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';

export class NavBar extends React.Component {
  render() {
    return (
    <div className="Navigation">
      <div className="navLine"></div>
      <Navbar inverse collapseOnSelect
        className="mainNav"
        fixedTop
        default>
        <Navbar.Header>
          <Navbar.Toggle />
          <Navbar.Brand>
            <a href="/">Jessica Prieto</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/#about-me" className="navItem">
              About Me</NavItem>
            <NavItem eventKey={2} href="/#projects" className="navItem">
              Projects</NavItem>
            <NavItem eventKey={3} href="/#blog" className="navItem">
              Blog</NavItem>
            <NavItem eventKey={4} href="/#instagram" className="navItem">
              Instagram
            </NavItem>
            <NavItem eventKey={5} href="/#contact" className="navItem">
              Contact Info
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="navLine"></div>
  </div>);
    }
}