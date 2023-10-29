import React from 'react';
import { Navbar, NavDropdown, Nav, Container, Form } from 'react-bootstrap';
import styled from 'styled-components';

function NavigationBar({ isDarkMode, toggleDarkMode }) {
  const navbarBackground = isDarkMode ? 'dark' : 'info';
  const switchLabel = isDarkMode ? 'Light Mode' : 'Dark Mode';

  
  return (
    <Navbar collapseOnSelect expand="sm" className={`bg-${navbarBackground}`} >
      <Container >
        <Navbar.Brand style={{ color : 'white'}}>Ari Nyman</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-toggle"/>
        <Navbar.Collapse id="navbar-toggle">
          <Nav className={`me-auto`}>
          <NavDropdown title={<span style={{ color : 'white'}}>Field</span>} id="nav-dropdown">
              <NavDropdown.Item>Information Technology (under construction)</NavDropdown.Item>
              <NavDropdown.Item>Civil Engineering (under construction)</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={<span style={{ color : 'white'}}>Projects</span>} id="nav-dropdown">
              <NavDropdown.Item>Information Technology (under construction)</NavDropdown.Item>
              <NavDropdown.Item>Civil Engineering (under construction)</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="form-switch">
            <Form.Check
              type="switch"
              id="darkModeSwitch"
              label={switchLabel}
              checked={isDarkMode}
              onChange={toggleDarkMode}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;