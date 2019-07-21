import React from 'react';
import { Link } from 'react-router-dom';

import Aux from '../../../hoc/hoc';
import Header from '../../../Components/Navigation/Header';
import Footer from '../../../Components/Navigation/Footer';
import Square from '../../../Components/Square/Square';
import './OnBoarding.scss';

const onboarding = (props)=>{
    return (
        <Aux>
            <div className="OnBoarding">
                <Header />
                <main className="mt-6e mb-6e">
                    <div className="intro">
                        <h3 className="f-20 c-red text-center f-bold">Verity Christian Faith Ministry</h3>
                        <h2 className="mt-3 f-52 f-bold c-brand text-center">
                            A Social & Communication <br />
                            Platform For The Christian Faith
                        </h2>
                        <p className="c-red f-20 text-center">
                            To make a donation to the welfare to help those in need 
                            <Link to="/register">
                                <i className="fa fa-long-arrow-right c-red ml-3"></i>
                            </Link>
                        </p>
                    </div>
                    <div className="info text-center">
                        <a href="/register">
                            <Square>
                                <span>Signup</span>
                            </Square>
                        </a>
                        
                        <Square>
                            <span>Church Organisation Flatform</span>
                        </Square>
                        <Square>
                            <span>Biblical Research (Search Engine)</span>
                        </Square>
                        <Square>
                            <span>Registry Directory Event Locator</span>
                        </Square>
                        <div className="mt-4">
                            <Square>
                                <span className="">
                                    Welfare
                                </span>
                            </Square>
                            <Square className="mb-5e">
                                <span>Devotional Online Store</span>
                            </Square>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </Aux>
    )
}

export default onboarding;