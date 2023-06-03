import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link, NavLink} from 'react-router-dom';
import "../../Styles/navbar.css"

const NavBar = () => {
  return(
    <Navbar className='navbar' style={{backgroundColor:"#F2EFEE"}} expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link} to="/"><b className='Logobold green'>TELE</b><b className='Logobold red'> NET</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink className='nav-link'  to="/">Home</NavLink>
            <NavLink className='nav-link' to ="/about-us">About Us</NavLink>
            <NavDropdown  title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to="/CCTV">CCTV Camera</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item  as={Link} to="/GPS">Vehicle tracking</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item  as={Link} to="/security">Security</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item  as={Link} to="/automation">Home Automation</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item  as={Link} to="/network">Networking</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item  as={Link} to="/smartboards">Smart Board</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link  as={Link} to="/one-stop-solution">One Stop Solution</Nav.Link>
            <Nav.Link  as={Link} to="/contact-us">Contact Us</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default NavBar;