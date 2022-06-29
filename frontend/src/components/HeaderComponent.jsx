import React, { Component } from "react";
import logo from "../../src/logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./header.css";

import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar
          bg="dark"
          variant="dark"
          sticky="top"
          expand="sm"
          collapseOnSelect
        >
          <div className="topleft">
            {" "}
            <Navbar.Brand>
              <img src={logo} width="40px" height="40px" /> E-psy
            </Navbar.Brand>
          </div>
          <div className="topRight">
            <Navbar.Toggle className="coloring" />
            <Navbar.Collapse>
              <Nav>
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="Crud">
                  <NavDropdown.Item href="#">Doctors</NavDropdown.Item>
                  <NavDropdown.Item href="#Crud/Patients">
                    Patients
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/add-doctor">
                    Add Doctor
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/add-patient">
                    Add Patient
                  </NavDropdown.Item>
                </NavDropdown>

                {/* Yahya's part */}
                <NavDropdown title="yahyas part">
                  <NavDropdown.Item>
                    {" "}
                    <Link to="/add-suivi" className="text-sm text-red-600">
                      Add Suivi
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/edit-profile" className="text-sm text-red-600">
                      Edit profile
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/my-doctors" className="text-sm text-red-600">
                      My Doctors
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/my-suivis" className="text-sm text-red-600">
                      My Suivis
                    </Link>
                  </NavDropdown.Item>
                  {/* <NavDropdown.Divider />
              <NavDropdown.Item href="/add-doctor">Add Doctor</NavDropdown.Item>
              <NavDropdown.Item href="/add-patient">Add Patient</NavDropdown.Item> */}
                </NavDropdown>
                <Nav.Link href="#about-us">About Us</Nav.Link>
                <Nav.Link href="#contact-us">Contact Us</Nav.Link>
                <Nav.Link href="#logout">Logout</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default HeaderComponent;
