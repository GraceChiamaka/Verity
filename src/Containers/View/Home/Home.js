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
        showdenominationModal: false,
        showUserModal: false,
        showverifyModal:false
    }
    showModal = (ev) => {
        this.setState({ showModal:true });
    }
    hideModal = (ev) => {
        this.setState({ 
            showModal:false,
            showdenominationModal: false,
            showUserModal: false,
            showVerifyModal: false
         });
    }
    showDenominationModal = (ev) =>{
        ev.preventDefault();
        this.setState({ 
            showdenominationModal: true,
            showModal: false
        });
    }
    showUserProfileModal = (ev) => {
        ev.preventDefault();
        this.setState({
            showdenominationModal: false,
            showUserModal: true
        });
    }
    showVerificationModal= (ev) => {
        ev.preventDefault();
        this.setState({
            showUserModal: false,
            showVerifyModal: true
        })
    }


    render(){
        return (
            <Aux>
                <div className="Home">
                    <Header showResponsiveNavbar={this.showMinNavbar} navbarState={this.state.showMinNavbar} />
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
                            this.state.showModal && 
                            <Modal show={this.showModal} hide={this.hideModal}>
                                <div className="text-right pr-3 pt-3">
                                    <i className="fa fa-times" onClick={this.hideModal}></i>
                                </div>
                                <div className="modal-content">
                                    <h3 className='text-center c-brand f-bold f-20'>Welcome to the church organisation Platform</h3>
                                    <p className="text-center f-20 c-brown f-med f-14">Please select an option for you to enter</p>
                                    <form onSubmit={this.showDenominationModal}>
                                        <div className="form-group mt-5">
                                            <div className="form-check form-check-inline mr-5e">
                                                <input className="form-check-input " type="radio" name="inlineRadioOptions" id="individaul" value="individual" required />
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
                            </Modal>
                        }
                        {
                            this.state.showdenominationModal && 
                            <Modal className="modal-lg" hide={this.hideModal}>
                                <div className="row">
                                   
                                    <div className="col-md-6 col-lg-6">
                                        <div className="hidden-close text-right pr-3 pt-3">
                                            <i className="fa fa-times" onClick={this.hideModal}></i>
                                        </div>
                                        <div className="modal-row py-5 px-3">
                                            <h3 className='text-center c-brand f-bold f-20'>Create a profile for your denomination</h3>
                                            <p className="text-center f-20 c-brown f-med f-14">Please fill the short form below</p>
                                            <form className="onboarding-form" onSubmit={this.showUserProfileModal}>
                                                <div className="form-group mt-5 text-left">
                                                    <label>Denomination Name</label>
                                                    <input type="text" className="form-control" name="name" required />
                                                    <span className="f-12">(Enter the name of your denomination)</span>
                                                </div>
                                                <div className="form-group mt-3 text-left">
                                                    <label>Headquarter's Address</label>
                                                    <input type="text" name='hq-address' className="form-control" required />
                                                </div>
                                                <div className="form-group mt-3 text-left">
                                                    <label>Description</label>
                                                    <textarea className="form-control" name="description" ></textarea>
                                                </div>
                                                <div className="form-group mt-5 text-center">
                                                    <button type='submit' className="btn btn-brand text-white">Create</button>
                                                </div>
                                            </form>           
                                        </div>
                                        
                                    </div>
                                    <div className="col-md-6 col-lg-6">
                                        <div className="church-bg">
                                            <div className="text-right pr-3 pt-3">
                                                <i className="fa fa-times" onClick={this.hideModal}></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Modal>
                        }
                        {
                            this.state.showUserModal && 
                            <Modal hide={this.hideModal} className="modal-lg">
                                <div className="row">
                                        <div className="col-md-6 col-lg-6">
                                            <div className="modal-row py-5 px-3">
                                                <h3 className='text-center c-brand f-bold f-20'>Create a profile for yourself</h3>
                                                <p className="text-center f-20 c-brown f-med f-14">Please fill the short form below</p>
                                                <form className="onboarding-form" onSubmit={this.showVerificationModal}>
                                                    <div className="form-group mt-5 text-left">
                                                        <label>Denomination Name</label>
                                                        <input type="text" className="form-control" name="name" required />
                                                        <span className="f-12">(Enter the name of your denomination)</span>
                                                    </div>
                                                    <div className="form-group mt-3 text-left">
                                                        <label>Select your Branch</label>
                                                        <select name='branch' className="form-control" required>
                                                            <option></option>
                                                            <option>Eko atlantic</option>
                                                            <option>Ajao Estate</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group mt-3 text-left">
                                                        <label>Description</label>
                                                        <textarea className="form-control" name="description" ></textarea>
                                                    </div>
                                                    <div className="form-group mt-5 text-center">
                                                        <button type='submit' className="btn btn-brand text-white">Create</button>
                                                    </div>
                                                </form>           
                                            </div>
                                            
                                        </div>
                                        <div className="col-md-6 col-lg-6 ">
                                            <div className="church-bg">
                                                <div className="text-right pr-3 pt-3">
                                                    <i className="fa fa-times" onClick={this.hideModal}></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </Modal>
                        }
                        {
                            this.state.showVerifyModal && 
                            <Modal hide={this.hideModal}>
                                <div className="text-right pr-3 pt-3">
                                    <i className="fa fa-times" onClick={this.hideModal}></i>
                                </div>
                                <div className="row">
                                        <div className="col-lg-12">
                                            <div className="modal-row py-5 px-3">
                                                <h3 className='text-center c-brand f-bold f-20'>Welcome to church organisation Platform</h3>
                                                <p className="text-center f-20 c-brown f-med f-14">Please fill in your username and verification cove sent to you </p>
                                                <form className="onboarding-form" >
                                                    <div className="form-group mt-5 text-left">
                                                        <label>Enter your Username</label>
                                                        <input type="text" className="form-control" name="name" required />
                                                    </div>
                                                    <div className="form-group mt-3 text-left">
                                                        <label>Enter your Verification Code</label>
                                                        <input name='branch' className="form-control" required />
                                                    </div>
                                                    <div className="form-group mt-5 text-center">
                                                        <button type='submit' className="btn btn-brand text-white">Create</button>
                                                    </div>
                                                </form>           
                                            </div>
                                        </div>
                                    </div>
                            </Modal>
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