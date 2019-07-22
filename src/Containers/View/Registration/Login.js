import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Aux from '../../../hoc/hoc';
import './Register.scss';
import Logo from '../../../assets/images/big_logo.png';
import {useForm} from '../../hooks.js';
import {useSelector, useDispatch} from 'react-redux';
import {login} from '../../action/user';

export default (props) => {
    const [loading,setLoading] = useState(false),
    {values,handleChange,handleSubmit} = useForm(submitForm),
    [display,setDisplay] = useState(""),
    dispatch = useDispatch(),
    {user,error} = useSelector(({user})=>user);

    function submitForm(){
        setLoading(true);
        dispatch(login(values));
    }
    
    useEffect(()=>{
        if(error){
            setDisplay(<h1>{error}</h1>);
        } else if(user){
            props.history.push("/admin/dashboard");
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
                            <div className="col-md-6 col-lg-6 pt-5 mt-5">
                                <div className="SignUp-intro mb-5">
                                    <h3 className="f-24 c-blk">
                                        Login to your verity Account Now
                                    </h3>
                                    <p className="f-16 c-brown">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    </p>
                                </div>
                                <form className="f-16" onSubmit={handleSubmit}>
                                    {display}
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