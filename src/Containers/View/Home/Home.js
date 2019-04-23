import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Aux from '../../../hoc/hoc';
import Header from '../../../Components/Navigation/Header';
import Footer from '../../../Components/Navigation/Footer';
import Square from '../../../Components/Square/Square';
import Modal from '../../../Components/Modal/Modal';
import './Home.scss';
import '../../../assets/scss/_base.scss';


class Home extends Component {
    state ={
        showModal: false,
        showNextModal: false,
    }
    showModal = (ev) => {
        console.log(ev.target);
        this.setState({ showModal:true });
        console.log(this.state.showModal)
    }
    hideModal = (ev) => {
        this.setState({ showModal:false });
    }
    showNextModal = (ev) =>{
        console.log('you want to change modal content');
        this.setState({ 
            showNextModal: true,
            showModal: false
        })
    }

    render(){
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
                        {
                            this.state.showModal ? 
                            <Modal show={this.showSquareModal} hide={this.hideModal}>
                                <div className="modal-content">
                                    <h3 className='text-center c-brand f-bold'>Welcome to the church organisation Platform</h3>
                                    <p className="text-center f-20 c-brown f-med">Please select an option for you to enter</p>
                                    <form>
                                        <div className="form-group mt-5">
                                            <div className="form-check form-check-inline mr-5e">
                                                <input className="form-check-input " type="radio" name="inlineRadioOptions" id="individaul" value="individual" />
                                                <label className="form-check-label f-16 f-med" htmlFor="individual">Individual</label>
                                            </div>
                                            <div className="form-check form-check-inline mr-5e">
                                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="denomination" value="denomination" />
                                                <label className="form-check-label f-16 c-red f-med" htmlFor="denomination">denomination</label>
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
                            </Modal>
                            : null
                        }
                        {
                            this.state.showNextModal ?
                            <Modal>
                                <div className="modal-content">
                                <h3 className='text-center c-brand f-bold'>Welcome to the church organisation Platform</h3>
                                <p className="text-center f-20 c-brown f-med">Please select an option for you to enter</p>
                                <form>
                                    <div className="form-group mt-5">
                                        <div className="form-check form-check-inline mr-5e">
                                            <input className="form-check-input " type="radio" name="inlineRadioOptions" id="individaul" value="individual" />
                                            <label className="form-check-label f-16 f-med" htmlFor="individual">Individual</label>
                                        </div>
                                        <div className="form-check form-check-inline mr-5e">
                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="denomination" value="denomination" />
                                            <label className="form-check-label f-16 c-red f-med" htmlFor="denomination">denomination</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="forum" value="forum" />
                                            <label className="form-check-label f-16 f-med" htmlFor="forum">Forum</label>
                                        </div>
                                    </div>
                                    <div className="form-group mt-5 text-center">
                                        <button type='submit' className="btn btn-brand text-white" onClick={this.showNextModal}>Select</button>
                                    </div>
                                </form>                        
                                </div>
                            </Modal>
                            : null
                        }
                            
                            <Square>
                                <span>Belivers’ Fellowship Platform/Network</span>
                            </Square>
                            <Square show={this.showModal} onClick={this.fellowship}>
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
                                <Square>
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
    
}
export default Home;