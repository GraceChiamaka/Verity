import React from 'react';
import { Nav, Navbar }from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
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
                      <NavLink className="c-brand f-16 f-bold nav-border nav-link" to="/login">Login</NavLink>
                      <NavLink className="c-red f-16 f-bold nav-link" to="/register">Sign Up</NavLink>
                      
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
            </div>
        </Aux>
    )
}
export default header;