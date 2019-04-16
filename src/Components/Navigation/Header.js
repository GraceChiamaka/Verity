import React from 'react';
import { NavLink } from 'react-router-dom';
import Aux from '../../hoc/hoc';
import Logo from '../../assets/images/s4.png'
import '../../assets/scss/_base.scss';

const header = (props) => {
    return (
        <Aux>
            <div className="container f-quick">
                <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                    <NavLink className="navbar-brand" to='/'>
                        <img src={Logo} alt="logo" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link c-brand f-18 f-bold" to="/login">Login </NavLink>
                            </li>
                            <li className="nav-item  bd-left--brand">
                                <NavLink className="nav-link f-18 c-red f-bold" to="/register">Sign Up</NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </nav>
            </div>
        </Aux>
    )
}
export default header;