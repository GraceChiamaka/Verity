import React from 'react';

import Aux from '../../../hoc/hoc';
import Header from '../../../Components/Navigation/dashboardHeader';

import './UserBoarding.scss';

const userBoarding = (props) => {
    return(
        <div className="UserBoarding">
            <Header />
            <main className="">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <div>
                                <h1 className='text-center c-brand f-bold f-52'>Welcome to the church organisation Platform</h1>
                                <p className="text-center c-brown f-med f-24 mt-3">Please select an option for you to enter</p>
                            </div>
                            <form className="text-center">
                                <div className="form-group mt-5">
                                    <div className="form-check form-check-inline mr-5e">
                                        <input className="form-check-input " type="radio" name="inlineRadioOptions" 
                                            id="individaul" value="individual"
                                            required />
                                        <label className="form-check-label f-16 f-med" htmlFor="individual">Individual</label>
                                    </div>
                                    <div className="form-check form-check-inline mr-5e">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="denomination" value="denomination" />
                                        <label className="form-check-label f-16 c-red f-med" htmlFor="denomination">Denomination</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="forum" value="forum" />
                                        <label className="form-check-label f-16 f-med" htmlFor="forum">Forum</label>
                                    </div>
                                </div>
                                <div className="form-group mt-5 text-center">
                                    <button type='submit' className="btn btn-brand text-white" >Select</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default userBoarding;