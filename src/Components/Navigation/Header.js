import React from 'react';
import { Nav, Navbar }from 'react-bootstrap';

import Aux from '../../hoc/hoc';
import Logo from '../../assets/images/s4.png'
import './Header.scss';

const header = (props) => {
    return (
        <Aux>
            <div className="container f-quick">
                <Navbar bg="transparent" expand="lg">
                  <Navbar.Brand href="/">
                    <img src={Logo} alt="logo" />
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto header-link ">
                      <Nav.Link className="c-brand f-16 f-bold nav-border" href="/login">Login</Nav.Link>
                      <Nav.Link className="c-red f-16 f-bold" href="/register">Sign Up</Nav.Link>
                      
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
            </div>
        </Aux>
    )
}
export default header;