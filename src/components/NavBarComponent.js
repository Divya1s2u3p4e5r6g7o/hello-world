import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import About from './About';
import Contact from './Contact';
import Home from './Home';

export default class NavBarComponent extends Component {
    render() {
        return (
          <Router>
            <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant={"dark"}>
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
            <Nav.Link as={Link} to={"/contacts"}>Contacts</Nav.Link>

            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    <div>
    <Routes>
          <Route  exact path="/about">
            <About/>
          </Route>
          <Route exact  path="/contacts">
            <Contact/>
          </Route>
          <Route exact  path="/home">
            <Home/>
          </Route>
        </Routes>
    </div>
    </Router>
        );
    }
}


