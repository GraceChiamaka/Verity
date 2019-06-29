import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Aux from '../../../hoc/hoc';
import Footer from '../../../Components/Navigation/Footer';
import './Register.scss';
import {session,postContent} from '../../../config/utils';

import Logo from '../../../assets/images/big_logo.png'

function Register(props){
    const [state,setState] = useState({}),
        [loading,setLoading] = useState(false),
        handleChange = (e)=>{
            setState({
                ...state,
                [e.target.id] : e.target.value
            });
        },

        register = async(e)=>{
            try {
                e.preventDefault();
                setLoading(true);
                const user = await postContent({
                    url : '/users/signup',
                    data : {...state}
                });
                
                /* 
                    If you're using redux, you can store your data in redux store, 
                    I'm storing the basic user info in session */

                session.set("id",user.id);
                session.set("email",user.email);
                session.set("token",user.token);

                console.log(user);
                alert("Registration successful");
                setLoading(false);
                /* Redirect user to route where they chose their user type (Individual, denomination...) */
            } catch ({message}) {
                alert(message);
                setLoading(false);
            }
        };

    return (
        <Aux>
            <div className="SignUp">
                <main className="">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-6">
                                <img src={Logo} className="img-fluid" alt="big-logo" />
                            </div>
                            <div className="col-md-6 col-lg-6 pt-5">
                                <div className="SignUp-intro">
                                    <h3 className="f-24">
                                        Create Your Account On Verity Now
                                    </h3>
                                    <p className="f-16">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    </p>
                                </div>
                                <form className="f-16" onSubmit={register}>
                                    {loading && <h4>Please wait.....</h4>}
                                    {/* <div className="form-group">
                                        <input className="form-control SignUp-input" placeholder="Full Name" />
                                    </div> */}
                                    <div className="form-group mt-4">
                                        <input 
                                            onChange={handleChange}
                                            id="email"
                                            className="form-control SignUp-input" 
                                            placeholder="Email Address" />
                                    </div>
                                    <div className="form-group mt-4">
                                        <input 
                                            onChange={handleChange}
                                            id="password"
                                            className="form-control SignUp-input" 
                                            type="password"
                                            placeholder="Password" />
                                    </div>
                                    {/* <div className="form-group mt-4">
                                        <input className="form-control SignUp-input" placeholder="Phone Number" />
                                    </div>
                                    <div className="form-group mt-4">
                                        <input className="form-control SignUp-input" placeholder="Denomination" />
                                    </div> */}
                                    <div className="form-group mt-4 text-center">
                                        <button className="SignUp-btn">Sign Up</button>
                                    </div>
                                    <div className="form-group mt-3 mb-5 text-center">
                                        <p>Already Have an Account? <Link to= "/login" className="c-red">Login</Link> </p>
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

export default Register;