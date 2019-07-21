import React, { Component } from 'react';

import Header from '../../../Components/Navigation/Header';
import Modal from '../../../Components/Modal/Modal';

import './UserBoarding.scss';

class UserBoarding extends Component {
    state ={
        showModal: false,
        showdenominationModal: false,
        showUserModal: false,
        showverifyModal:false,
        formdata: '',
        userdata: '',
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
    formSubmit = (ev) => {
        ev.preventDefault();
        if(this.state.userdata === "individual"){
            this.setState({ showUserModal: true });
        } else if( this.state.userdata === "denomination"){
            this.setState({ showdenominationModal: true });
        }else{
            return;
        }
    }
    userOption = (ev) => {
        this.setState({ userdata: ev.target.value })
    }
    showDenominationModal = (ev) =>{
        ev.preventDefault();
        this.setState({ 
            showdenominationModal: true,
            showModal: false
        });
    }
    render(){
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
                                <form className="text-center" onSubmit={this.formSubmit}>
                                    <div className="form-group mt-5" onChange={this.userOption.bind(this)}>
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
                                                        <div className="form-group mt-5 text-left">
                                                            <label>Email address</label>
                                                            <input type="email" className="form-control" name="email" required />
                                                        </div>
                                                        <div className="form-group mt-3 text-left">
                                                            <label>Denomination's Address</label>
                                                            <input type="text" name='hq-address' className="form-control" required />
                                                        </div>
                                                        <div className="form-group mt-3 text-left">
                                                            <label>Phone Number</label>
                                                            <input type="text" name='phone-number' className="form-control" required />
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
                                                            <label>Upload a profile photo</label>
                                                            <input type="file" className="form-control" name="profile-img" />
                                                        </div>
                                                        <div className="form-group mt-5 text-left">
                                                            <label>Full Name</label>
                                                            <input type="text" className="form-control" name="full-name" required />
                                                        </div>
                                                        <div className="form-group mt-5 text-left">
                                                            <label>Username</label>
                                                            <input type="text" className="form-control" name="username" required />
                                                        </div>
                                                        <div className="form-group mt-5 text-left">
                                                            <label>Phone Number</label>
                                                            <input type="text" className="form-control" name="phone-number" required />
                                                        </div>
                                                        <div className="form-group mt-3 text-left">
                                                            <label>Select your Branch</label>
                                                            <select name='branch' className="form-control" required>
                                                                <option>--choose branch--</option>
                                                                <option>Eko atlantic</option>
                                                                <option>Ajao Estate</option>
                                                            </select>
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
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
    
}

export default UserBoarding;