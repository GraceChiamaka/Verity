import React from 'react';
import { Link } from 'react-router-dom';
import Aux from '../../../hoc/hoc';
import Footer from '../../../Components/Navigation/Footer';
import './Register.scss';

import Logo from '../../../assets/images/big_logo.png'

const login = (props) => {
    return (
        <Aux>
            <div className="SignUp">
                <main className="">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-6">
                                <img src={Logo} alt="big-logo" />
                            </div>
                            <div className="col-md-6 col-lg-6 pt-5 mt-5">
                                <div className="SignUp-intro">
                                    <h3 className="f-24 c-blk">
                                        Login to your verity Account Now
                                    </h3>
                                    <p className="f-16 c-brown">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    </p>
                                </div>
                                <form className="f-16">
                                    <div className="form-group">
                                        <input className="form-control SignUp-input" placeholder="Full Name" />
                                    </div>
                                    <div className="form-group mt-4">
                                        <input className="form-control SignUp-input" placeholder="Password" />
                                    </div>
                                    <div className="form-group mt-4 text-center">
                                        <Link className="c-brand f-16 f-bold">Forgot Password?</Link>
                                    </div>
                                    <div className="form-group mt-5 text-center">
                                        <button className="SignUp-btn">LogIn</button>
                                    </div>
                                    
                                    <div className="form-group mt-3 mb-5 text-center">
                                        <p className="c-brown">Don’t have an account?<Link to="/register" className="c-red f-bold ml-1">SignUp</Link> </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </Aux>
    )
}


export default login;