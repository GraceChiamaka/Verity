import React from 'react';
import {Link} from 'react-router-dom';
import Aux from '../../../hoc/hoc';
import Header from '../../../Components/Navigation/Header';
import Footer from '../../../Components/Navigation/Footer';
import Square from '../../../Components/Square/Square';
import './Home.scss';

import Pyro from '../../../assets/images/Group_10.png'

const home = (props) => {
    
    return (
        <Aux>
            <div className="Home">
                <Header />
                <main className="mt-6e mb-6e">
                    <div className="intro">
                        <h3 className="f-20 c-red text-center f-bold">Verity Christian Faith Ministry</h3>
                        <h2 className="mt-3 f-52 f-bold c-brand text-center">
                            A Social & Communication <br />
                            Platform For The Christian Faith
                        </h2>
                        <p className="c-brand f-20 text-center">
                            To make a donation to the welfare to help those in need 
                            <Link to="/onboarding">
                                <i className="fa fa-long-arrow-right c-red ml-3"></i>
                            </Link>
                        </p>
                    </div>
                    <div className="info text-center">
                        <img src={Pyro} className="w-50" alt="info square" />
                    </div>
                    <Square>
                    </Square>
                </main>
                <Footer />
            </div>
            
        </Aux>
    )
}
export default home;