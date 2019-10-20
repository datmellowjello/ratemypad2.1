import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";
import { Nav, NavDropdown, Button, Form, FormControl } from "react-bootstrap";

class Newnav extends Component {
  render() {
    return (
      <span inline className="nav-bar">
        <Navbar bg="light" expand="lg" style={{ width: 400 }}>
          <Navbar.Brand href="#home">Rate My Pad</Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="#link">Add a Place</Nav.Link>
              <NavDropdown title="Options" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Home</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar>
      </span>
    );
  }
}

export default Newnav;
