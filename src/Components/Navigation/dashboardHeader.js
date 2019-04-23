import React from 'react';
import { NavLink } from 'react-router-dom';
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
                    <nav className="navbar navbar-expand-lg navbar-light bg-white">
                        <NavLink className="c-blue mr-5" to='/'>
                            <i className="fa fa-home fa-2x c-blue mr-1"></i>
                            <span className="f-14 f-bold">Home</span>
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link f-18 mr-5" to="">
                                        <i className="fa fa-bell-o fa-2x mr-1 c-blue"></i>
                                        <span className="f-14 f-bold c-blue">Notifications</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link f-18 navbar-brand mr-5" to="/register">
                                        <i className="fa fa-envelope-o fa-2x mr-1 c-blue"></i>
                                        <span className="f-14 f-bold c-blue">Messages</span>
                                    </NavLink>
                                </li>
                                
                            </ul>
                            <ul className="navbar-nav mr-auto">
                                <NavLink>
                                    <img src={Logo} alt="logo" />
                                </NavLink>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <form class="form-inline my-2 my-lg-0 mr-2">
                                    <input class="form-control mr-sm-2" type="search" placeholder="Search verity" aria-label="Search" />
                                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </form>
                                <img src={UserPhoto} className="user-img" alt="user" />
                                <span className="blue-dot"></span>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </Aux>
    )
}
export default dashboardHeader;