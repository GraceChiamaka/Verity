import React from 'react';
import { Nav, Navbar, Dropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

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
                    <Navbar bg="transparent" expand="lg" >
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto header-link ">
                                <NavLink className="c-brand f-16 f-bold nav-link" to="/">
                                    <i className="fa fa-home c-blue mr-1 f-24"></i>
                                    <span className="f-16 f-bold c-blue">Home</span>
                                </NavLink>
                                <NavLink className="c-red f-16 f-bold nav-link mx-4" to="/register">
                                    <i className="fa fa-bell-o mr-1 c-blue f-24"></i>
                                    <span className="f-16 f-bold c-blue">Notifications</span>
                                </NavLink>
                                <NavLink className="c-red f-16 f-bold nav-link" to="/register">
                                    <i className="fa fa-envelope-o mr-1 c-blue f-24"></i>
                                    <span className="f-16 f-bold c-blue">Messages</span>
                                </NavLink>
                            </Nav>
                            <Nav className="m-auto header-link ">
                                <Navbar.Brand to="/">
                                    <img src={Logo} alt="logo" />
                                </Navbar.Brand>
                            </Nav>
                            <Nav className="ml-auto header-link ">
                                <form className="form-inline my-2 my-lg-0 mr-2">
                                    <input className="form-control mr-sm-2" type="search" placeholder="Search verity" aria-label="Search" />
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </form>
                                <Dropdown className="dashboard-nav--dropdown">
                                    <Dropdown.Toggle variant="transparent" id="dropdown-basic" type="link">
                                        <img src={UserPhoto} className="user-img img-fluid" alt="user" />
                                        <span className="blue-dot"></span>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Link to="/requests" className="text-dark dropdown-item">Requests</Link>
                                        
                                        <Link to="/" className="text-dark dropdown-item">Log Out</Link>
                                        <Link to="/userProfile" className="text-dark dropdown-item">Profile</Link>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav>
                      </Navbar.Collapse>
                    </Navbar>
                </div>
            </header>
        </Aux>
    )
}
export default dashboardHeader;