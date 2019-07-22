import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Aux from '../../../hoc/hoc';
import Footer from '../../../Components/Navigation/Footer';
import './Register.scss';
import config from '../../../config';

import Logo from '../../../assets/images/big_logo.png';
import {useForm} from '../../hooks.js';
import {useSelector, useDispatch} from 'react-redux';
import {register} from '../../action/user';

function Register(props){
    const [loading,setLoading] = useState(false),
        {values,handleChange,handleSubmit} = useForm(
            submitForm,
            {redirect_url:config.FRONTEND_URL+'/verify/email'}
        ),
        [display,setDisplay] = useState(""),
        dispatch = useDispatch(),
        {user,error} = useSelector(({user})=>user);

    function submitForm(){
        setLoading(true);
        dispatch(register(values));
    }

    useEffect(()=>{
        if(error){
            setDisplay(<h1>{error}</h1>);
        } else if(user){
            props.history.push("/login");
        } else if(loading){
            setDisplay(<h1>Diplay progress here</h1>);
        }
    },[user,error]);

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
                            <div className="col-md-6 col-lg-6 pt-5">
                                <div className="SignUp-intro">
                                    <h3 className="f-24">
                                        Create Your Account On Verity Now
                                    </h3>
                                    <p className="f-16">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    </p>
                                </div>
                                <form className="f-16" onSubmit={handleSubmit}>
                                    {display}
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