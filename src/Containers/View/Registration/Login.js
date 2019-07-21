import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Aux from '../../../hoc/hoc';
// import Footer from '../../../Components/Navigation/Footer';
import './Register.scss';
import {session, postContent} from '../../../config/utils';

import Logo from '../../../assets/images/big_logo.png'

export default (props) => {
    const [state,setState] = useState({}),
        [loading,setLoading] = useState(false),
    
        handleChange = (e)=>{
            setState({
                ...state,
                [e.target.id] : e.target.value
            });
        },

        login = async(e)=>{
            try {
                e.preventDefault();
                setLoading(true);
                const user = await postContent({
                    url : '/users/signin',
                    data : {...state}
                });
                
                /* 
                    If you're using redux, you can store your data in redux store, 
                    I'm storing the basic user info in session */

                session.set("id",user.id);
                session.set("email",user.email);
                session.set("token",user.token);

                alert("Login successful");
                console.log(user)
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
                                <Link to="/" title="back to homepage">
                                    <img src={Logo} className="img-fluid" alt="big-logo" />
                                </Link>
                                
                            </div>
                            <div className="col-md-6 col-lg-6 pt-5 mt-5">
                                <div className="SignUp-intro mb-5">
                                    <h3 className="f-24 c-blk">
                                        Login to your verity Account Now
                                    </h3>
                                    <p className="f-16 c-brown">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    </p>
                                </div>
                                <form className="f-16" onSubmit={login}>
                                    {loading && <h4>Please wait.....</h4>}
                                    <div className="form-group">
                                        <input 
                                            onChange={handleChange} 
                                            id="email" className="form-control SignUp-input" 
                                            placeholder="Email address" />
                                    </div>
                                    <div className="form-group mt-4">
                                        <input 
                                            onChange={handleChange} 
                                            id="password" 
                                            type="password"
                                            className="form-control SignUp-input" 
                                            placeholder="Password" />
                                    </div>
                                    <div className="form-group mt-4 text-center">
                                        <Link className="c-brand f-16 f-bold" to='/'>Forgot Password?</Link>
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
            </div>
        </Aux>
    )
}