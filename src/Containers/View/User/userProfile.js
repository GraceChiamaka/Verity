import React, { Component } from 'react';

import Header from '../../../Components/Navigation/dashboardHeader';
import CustomNav from '../../../Components/Navigation/CustomNav/CustomNav';
import Modal from '../../../Components/Modal/Modal';

import '../Admin/Admin.scss';
import './UserProfile.scss';

import user from '../../../assets/images/user_1.png';

class UserProfile extends Component{
    state={
        showModal: false,
        showUserModal: false,
        showEmailModal:false,
        showPasswordModal: false
    }
    hideModal = () => {
        this.setState({ 
            showUserModal: false,
            showEmailModal: false,
            showPasswordModal:false
        });
    }

    showUserModal = () => {
        this.setState({ showUserModal: true });
    }
    showEmailModal =()=>{
        this.setState({ showEmailModal: true });
    }
    showPasswordModal = () => {
        this.setState({ showPasswordModal: true });
    }


    render(){
        return (
            <div className="User">
                <Header />
                <main>
                    <div className="container mt-3 px-0">
                        <CustomNav />
                        <div className="row mt-3 justify-content-center">
                            <div className="col-md-3 col-lg-3 ">
                                <div className="bd-grey">
                                    <div className="user-section">
                                        <div className="user-block"></div>
                                            <img src={user} alt='user big' />
                                        <div className="user-details text-center">
                                            <p className="f-14 f-bold c-blk">Akintunde Williams</p>
                                            <p className="f-12 f-med c-grey">Administrative officer for Deeper Life <br /> Bible Church</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9 col-lg-9 pt-0">
                                <section className="user-card">
                                    <div className="card p-5 personal-data">
                                        <div className="row">
                                            <div className="col-md-9">
                                                <h3>Personal details</h3>
                                            </div>
                                            <div className="col-md-3">
                                                <button className="btn bg-transparent border-0 float-right" title="edit" onClick={this.showUserModal}><i className="fa fa-pencil"></i></button>
                                                {
                                                    this.state.showUserModal &&
                                                    <Modal show={this.showUserModal} hide={this.hideModal} className="t-30">
                                                        <div className="text-right pr-3 pt-3">
                                                            <i className="fa fa-times" onClick={this.hideModal}></i>
                                                        </div>
                                                        <div className="modal-content">
                                                            <h3 className='text-center c-brand f-bold f-20'>Update Personal details</h3>
                                                            <p className="text-center f-20 c-brown f-med f-14">Fill the form for to update your personal data</p>
                                                            <form className="personal-data-form" >
                                                                <div className="form-group mt-5" >
                                                                    <label htmlFor="">Full Name</label>
                                                                    <input type="text" className="form-control" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label htmlFor="">Phone Number</label>
                                                                    <input type="text" className="form-control" required />
                                                                </div>
                                                                <div className="form-group">
                                                                    <label htmlFor="">Username</label>
                                                                    <input type="text" className="form-control"/>
                                                                </div>

                                                                <div className="form-group mt-5 text-center">
                                                                    <button type='submit' className="btn btn-brand text-white text-center px-5 mx-auto" >Update</button>
                                                                </div>
                                                            </form>                        
                                                        </div>
                                                    </Modal>
                                                }
                                            </div>
                                        </div>
                                        
                                        <div className="row mt-5 justify-content-center">
                                            <div className="container">
                                                <div className="col-md-10">
                                                    <div className="row">
                                                        <div className="col-md-3">
                                                            <p>
                                                                <strong>Name</strong>
                                                            </p>
                                                            <p><strong>Phone Number </strong></p>
                                                            <p><strong>Username</strong></p>
                                                        </div>
                                                        <div className="col-md-7">
                                                            <p>Chuck Rhoades</p>
                                                            <p>0807 834 7782</p>
                                                            <p>Attorney General of the State of New York</p>
                                                        </div>
                                                    </div> 
                                                </div>
                                            </div>                                        
                                        </div>
                                    </div>
                                
                                </section> 
                                <section className="user-email-card mt-3">
                                    <div className="card p-5 email-data">
                                        <div className="row">
                                            <div className="col-md-9">
                                                <h3>Email Addresses</h3>
                                            </div>
                                            <div className="col-md-2">
                                                <button className="btn bg-transparent border-0 float-right" title="edit" 
                                                    onClick={this.showEmailModal}><i className="fa fa-pencil"></i></button>
                                            </div>
                                            {
                                                this.state.showEmailModal &&
                                                <Modal show={this.showEmailModal} hide={this.hideModal}>
                                                    <div className="text-right pr-3 pt-3">
                                                            <i className="fa fa-times" onClick={this.hideModal}></i>
                                                        </div>
                                                        <div className="modal-content">
                                                            <h3 className='text-center c-brand f-bold f-20'>Enter new Email Address</h3>
                                                            <p className="text-center f-20 c-brown f-med f-14">Fill the form for to update your email</p>
                                                            <form className="email-form" >
                                                                <div className="form-group mt-5" >
                                                                    <label htmlFor="">Email</label>
                                                                    <input type="email" className="form-control" required />
                                                                </div>
                                                                <div className="form-group mt-5 text-center">
                                                                    <button type='submit' className="btn btn-brand text-white text-center px-5 mx-auto" >Update</button>
                                                                </div>
                                                            </form>                        
                                                        </div>
                                                </Modal>
                                            }
                                        </div>
                                        
                                        <div className="row mt-5 justify-content-center">
                                            <div className="container">
                                                <div className="col-md-10">
                                                    <div className="row">
                                                        <div className="col-md-3">
                                                            <p><strong>Email</strong></p>
                                                        </div>
                                                        <div className="col-md-7">
                                                            <p className="c-brand">chuckrhoadesag@gmail.com</p>
                                                        </div>
                                                    </div> 
                                                </div>
                                            </div>                                        
                                        </div>
                                    </div>
                                
                                </section> 

                                <section className="user-pwd-card mt-3">
                                    <div className="card p-5 pd-data">
                                        <div className="row">
                                            <div className="col-md-9">
                                                <h3>Password</h3>
                                            </div>
                                            <div className="col-md-2">
                                                <button className="btn bg-transparent border-0 float-right" title="edit"
                                                    onClick={this.showPasswordModal}><i className="fa fa-pencil"></i></button>
                                                {
                                                this.state.showPasswordModal &&
                                                <Modal show={this.showPasswordModal} hide={this.hideModal}>
                                                    <div className="text-right pr-3 pt-3">
                                                            <i className="fa fa-times" onClick={this.hideModal}></i>
                                                        </div>
                                                        <div className="modal-content">
                                                            <h3 className='text-center c-brand f-bold f-20'>Change your Password</h3>
                                                            <p className="text-center f-20 c-brown f-med f-14">Fill the form for to update your password</p>
                                                            <form className="change-pwd-form" >
                                                                <div className="form-group mt-5" >
                                                                    <label htmlFor="">New Password</label>
                                                                    <input type="password" className="form-control" required />
                                                                </div>
                                                                <div className="form-group mt-5 text-center">
                                                                    <button type='submit' className="btn btn-brand text-white text-center px-5 mx-auto" >Update</button>
                                                                </div>
                                                            </form>                        
                                                        </div>
                                                </Modal>
                                            }
                                            </div>
                                        </div>
                                        
                                        <div className="row mt-5 justify-content-center">
                                            <div className="container">
                                                <div className="col-md-10">
                                                    <div className="row">
                                                        <div className="col-md-3">
                                                            <p><strong>Password</strong></p>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <p>
                                                                <span className="pwd-dot"></span>
                                                                <span className="pwd-dot"></span>
                                                                <span className="pwd-dot"></span>
                                                                <span className="pwd-dot"></span>
                                                                <span className="pwd-dot"></span>
                                                                <span className="pwd-dot"></span>
                                                                <span className="pwd-dot"></span>
                                                                <span className="pwd-dot"></span>
                                                            </p>
                                                        </div>
                                                    </div>   
                                                </div>
                                            </div>                                        
                                        </div>
                                    </div>
                                
                                </section> 
                            </div>
                        </div>
                    </div>

                </main>
            </div>
            
        )
    } 
};

export default UserProfile;
