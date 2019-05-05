import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavItem, Button, Form, FormControl, NavDropdown } from 'react-bootstrap';

import Aux from '../../hoc/hoc';
import '../../assets/scss/_base.scss';
import './DashboardHeader.scss';

import Logo from '../../assets/images/s4.png';
import UserPhoto from '../../assets/images/user.png';

const dashboardHeader = (props) => {
    return (
        <Aux>
            <header className="DashboardHeader f-quick bg-white">
                <div className="container f-quick">
                    <Navbar bg="transparent" expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto header-link ">
                                <Nav.Link className="c-brand f-16 f-bold" href="/login">
                                    <i className="fa fa-home c-blue mr-1"></i>
                                    <span className="f-16 f-bold c-blue">Home</span>
                                </Nav.Link>
                                <Nav.Link className="c-red f-16 f-bold" href="/register">
                                    <i className="fa fa-bell-o mr-1 c-blue"></i>
                                    <span className="f-16 f-bold c-blue">Notifications</span>
                                </Nav.Link>
                                <Nav.Link className="c-red f-16 f-bold" href="/register">
                                    <i className="fa fa-envelope-o mr-1 c-blue"></i>
                                    <span className="f-16 f-bold c-blue">Messages</span>
                                </Nav.Link>
                            </Nav>
                            <Nav className="m-auto header-link ">
                                <Navbar.Brand href="/">
                                    <img src={Logo} alt="logo" />
                                </Navbar.Brand>
                            </Nav>
                            <Nav className="ml-auto header-link ">
                                <form class="form-inline my-2 my-lg-0 mr-2">
                                    <input class="form-control mr-sm-2" type="search" placeholder="Search verity" aria-label="Search" />
                                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </form>
                                <img src={UserPhoto} className="user-img img-fluid" alt="user" />
                                <span className="blue-dot"></span>
                            </Nav>
                      </Navbar.Collapse>
                    </Navbar>
                </div>
            </header>
        </Aux>
    )
}
export default dashboardHeader;