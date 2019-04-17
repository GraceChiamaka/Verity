import React from 'react';
import { Link } from 'react-router-dom';
import Aux from '../../hoc/hoc';
import Logo from '../../assets/images/s4.png';
import '../../assets/scss/_base.scss';

const footer = (props) => {
    return (
        <Aux>
            <footer className="footer bd-red">
                <div className="container">
                    <div className="row justify-content-between ">
                        <div className="col-md-2 col-lg-3">
                            <a className="dis-block" href="/">
                                <img src={Logo} alt="logo" />
                            </a>
                            
                        </div>
                        <div className="col-md-4 col-lg-3 pt-4">
                            <i className="fa fa-copyright c-brand"></i>
                            <span className="f-14 c-brand f-med">2018 all rights reserved</span>
                        </div>
                        <div className="col-md-5 col-lg-4 pt-4">
                            <p>
                                <span className="c-brand f-14 f-med">Connect with us on:</span>

                                <i className="fa fa-facebook-square c-red ml-3 f-16"></i>
                                <i className="fa fa-twitter c-red mx-3 f-16"></i>
                                <i className="fa fa-instagram c-red f-16"></i>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </Aux>
    )
}
export default footer;