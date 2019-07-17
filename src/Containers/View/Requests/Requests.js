import React, { Component } from 'react';

import Aux from '../../../hoc/hoc';
import Header from '../../../Components/Navigation/dashboardHeader'; 
import Modal from '../../../Components/Modal/Modal';
import '../../../assets/scss/_base.scss';
import '../Branch/Branch.scss';
import '../../../assets/scss/_table.scss';
import './Requests.scss';


class Requests extends Component {
    state = {
        showModal: false,
    }
    showModal = (ev) => {
        this.setState({ showModal:true });
    }
    hideModal = (ev) => {
        this.setState({ showModal:false });
    }
    render(){
        return (
            <Aux>
                <Header />
                <div className="group-bg pos-rel">
                    <div className="dark-overlay"></div>
                    <div className="container pos-rel">

                        <div className="custom-text text-white text-center mt-5">
                            <h1 className="">Your Requests</h1>
                            <p className="f-16 f-med">
                                Frontier for growth in the development of local expertise in the subsea of oil
                                and gas <br /> industry and that Brisktrode will play a key role in driving this agenda.
                            </p>
                            {/* <button className="change-group--btn ">Change Photo</button> */}
                        </div>
                    </div>
                </div>
                <main>
                    {
                        this.state.showModal &&
                        <Modal hide={this.hideModal} show={this.showModal}>
                            <div className="text-right pr-3 pt-3">
                                    <i className="fa fa-times" onClick={this.hideModal}></i>
                                </div>
                                <div className="modal-content">
                                    <h3 className='text-center c-brand f-bold f-20'>New Request Form</h3>
                                    <p className="text-center f-20 c-brown f-med f-14">Please fill the form for a new request</p>
                                    <form className="request-form" >
                                        <div className="form-group mt-5" >
                                            <label htmlFor="">Church Branch</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                          <label htmlFor=""></label>
                                          <select name="" id="" className="form-control">
                                              <option value="">Select request type</option>
                                              <option value="">Baptisimal Certificate</option>
                                              <option value="">Marriage Certificate</option>
                                          </select>
                                          
                                        </div>
                                        <div className="form-group mt-5 text-center">
                                            <button type='submit' className="btn btn-brand text-white text-center px-5 mx-auto" >Submit</button>
                                        </div>
                                    </form>                        
                                </div>
                        </Modal>
                    }
                   
                    <div className="container mt-6e px-0">
                        <div className="row justify-content-end">
                            <div className="col-md-4">
                                <button className="btn btn-brand text-white pull-right" onClick={this.showModal}> New Request</button>
                            </div>
                        </div>
                        <div className="row mt-3 justify-content-center">
                            <div className=" col-lg-12 pt-0">
                                <section className="requests mb-6">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>s/n</th>
                                                <th colSpan="2">Title</th>
                                                <th colSpan="2">Branch</th>
                                                <th colSpan="2">Request Type</th>
                                                <th colSpan="4">description</th>
                                                <th colSpan="2">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td data-label="s/n">1</td>
                                                <td data-label="Title" colSpan="2">Baptisimal Certificate</td>
                                                <td data-label="Branch" colSpan="2">Ajao Estate</td>
                                                <td data-label="Request Type" colSpan="2">Certificate</td>
                                                <td data-label="Description" colSpan="4">
                                                    As you go through life you'll see 
                                                    There is so much that we Don't understand 
                                                
                                                </td>
                                                <td data-label="Status" colSpan="2" className="text-success">
                                                    <strong>Approved</strong> 
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td colSpan="2">Baptisimal Certificate</td>
                                                <td colSpan="2">Ajao Estate</td>
                                                <td colSpan="2">Certificate</td>
                                                <td colSpan="4">
                                                    As you go through life you'll see 
                                                    There is so much that we Don't understand 
                                                
                                                </td>
                                                <td colSpan="2"  className="text-warning">
                                                    <strong>Pending</strong> 
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td colSpan="2">Baptisimal Certificate</td>
                                                <td colSpan="2">Ajao Estate</td>
                                                <td colSpan="2">Certificate</td>
                                                <td colSpan="4">
                                                    As you go through life you'll see 
                                                    There is so much that we Don't understand 
                                                    
                                                </td>
                                                <td colSpan="2" className="text-danger">
                                                    <strong>Rejected</strong> 
                                                </td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                    
                                </section> 
                            </div>
                        </div>
                    </div>

                </main>
            </Aux>
        );
    }
    
}

export default Requests;