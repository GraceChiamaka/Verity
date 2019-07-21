import React, {Component} from 'react';

import Header from '../../../Components/Navigation/dashboardHeader';
import CustomNav from '../../../Components/Navigation/CustomNav/CustomNav';
import Modal from '../../../Components/Modal/Modal';
import '../Admin/Admin.scss';
import '../Branch/Branch.scss';

import UserImg from '../../../assets/images/user_2.png';
import UserIcon from '../../../assets/images/user_3.png';
import UserPost from '../../../assets/images/post_1.png';


class Group extends Component {
    state={
        topicModal: false
    }
    showTopicModal = (ev) => {
        console.log('show')
        this.setState({ topicModal: true});
    }
    hideModal= () => {
        this.setState({ topicModal: false })
    }
    render(){
        return (
            <div className="Group">
                <Header />
                <div className="group-bg pos-rel">
                    <div className="dark-overlay"></div>
                    <div className="container pos-rel">
                        <CustomNav />

                        <div className="custom-text text-white text-center mt-5">
                            <h3 className="f-24">Customise Your Group</h3>
                            <p className="f-16 f-med">
                                Frontier for growth in the development of local expertise in the subsea of oil
                                and gas <br /> industry and that Brisktrode will play a key role in driving this agenda.
                            </p>
                            <button className="change-group--btn ">Change Photo</button>
                        </div>
                    </div>
                </div>
                <main>
                {
					this.state.topicModal && 
					<Modal hide={this.hideModal} >
						<div className="modal-header bg-light">
							<h4>Create a Topic</h4>
							<i className="fa fa-times" onClick={this.hideModal}></i>
						</div>
						<div className="modal-body">
							<form>
								<div className="form-group">
									<label className='f-med'>Name your Topic</label>
									<input className="form-control bg-transparent h-40" required placeholder="Enter the name of your topic" />
								</div>
								
								<div className="modal-footer bg-light">
									<button className="btn btn-brand text-white">Create</button>
								</div>
							</form>
						</div>				
					</Modal>
				}
                    <div className="banner h-140">
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-md-5 col-lg-3 pt-2">
                                    <p className="f-18 f-bold">
                                        Group Title 
                                        <span className="c-brand"> (Secret Group)</span>
                                    </p>
                                </div>
                                <div className="col-md-5 col-lg-3 pt-1">
                                    <button className="btn btn-brand text-white" onClick={this.showTopicModal}>Create Topic</button>
                                    <button className="group-status-btn ml-2">Joined <i className="fa fa-caret-down"></i></button>
                                </div>
                            </div>   
                        </div>
                    </div>
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-md-3 col-lg-3">
                            
                                <div className="resources-section p-3 mt-3">
                                    
                                    <input className="form-control" placeholder="search group" />
                                    
                                    <div className="resources mt-3">
                                        <li className="list-unstyled mt-2">
                                            <a className="f-16 f-med" href='/group'>About</a>
                                        </li>
                                        <li className="list-unstyled mt-2">
                                            <a className="f-16 f-med" href='/group-bg'>discussion</a>
                                        </li>
                                        <li className="list-unstyled mt-2">
                                            <a className="f-16 f-med" href='/group'>Events</a>
                                        </li>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6 col-lg-6">
                                <section className="posts mt-4">
                                    <section className="create-post p-3">
                                        <div className="media">
                                            <img src={UserImg} className="mr-3" alt="logged in user" />
                                            <div className="media-body">
                                                <input type="text" className="create-post-input f-14 f-bold" placeholder='Create a post...' />
                                                <div className="uploads mt-3">
                                                    <input type="file" className="upload-input" />
                                                    <button className="btn btn-upload c-brand f-12 f-bold">
                                                        <i className="fa fa-image mr-1"></i>
                                                        Images/Videos
                                                    </button>
                                                    <button className="btn tag-friends c-brand f-bold ml-3">
                                                        <i className="fa fa-tag c-brand mr-1"></i>
                                                        Tag Members
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section className='old-post bg-white border p-4'>
                                        <div className="post-header">
                                            <div className="row justify-content-between">
                                                <div className="col-9 col-md-7 col-lg-7">
                                                    <div className="row">
                                                        <div className="col-4 col-md-3 col-lg-3 pr-0">
                                                            <img src={UserImg} className="img-fluid " alt='logged in user' />
                                                        </div>
                                                        <div className="col-7 col-md-9 col-lg-6 pl-0">
                                                            <p className='c-brand f-14 f-bold mb-0'>David Akinbami</p>
                                                            <p className="c-grey f-12 f-med">4 hrs Ago</p>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                                <div className="col-3 col-md-2 col-lg-3">
                                                    <button className="btn bg-transparent border-0 pull-right">
                                                        <i className="fa fa-ellipsis-h f-16 c-blue"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <p className=" f-12 f-med">
                                                    Frontier for growth in the development of local expertise in the subsea of oil
                                                    and gas industry and that Brisktrode will play a key role in driving this agenda.
                                                    Frontier for growth in the development of local expertise in the subsea of oil
                                                    and gas industry and that Brisktrode will play a key role in driving this agenda.
                                                    Frontier for growth in the development of local expertise in the subsea of oil
                                                    and gas industry and that Brisktrode will play a key role in driving this agenda.
                                                </p>
                                                <img src={UserPost} className="w-100" alt='user post' />
                                            </div>
                                            <div className=" mt-3 px-3">
                                                <div className="row justify-content-between">
                                                    <div className="col-9 col-lg-6">
                                                        <span className="post-likes c-blue f-14 mr-3 f-bold">
                                                            <i className="fa fa-heart-o mr-2"></i>
                                                            20 likes
                                                        </span> 
                                                        <span className="post-comment c-blue f-14 f-bold">
                                                            <i className="fa fa-comment-o mr-2"></i>
                                                            12 comments
                                                        </span>
                                                    </div>
                                                    <div className="col-3 col-lg-3">
                                                        <i className="fa fa-bookmark c-blue pull-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comment-box mt-4">
                                                <div className="row">
                                                    <div className="col-2 col-md-2 pr-0">
                                                        <img src={UserIcon} className="img-fluid" alt="" />
                                                    
                                                    </div>
                                                    <div className="col-10 col-md-10 pl-0">
                                                        <div className="input-group mb-3">
                                                            <input type="text" className="form-control border-right-0" placeholder="Comment..." 
                                                                aria-label="Comment..." aria-describedby="basic-addon2" />
                                                            <div className="input-group-append">
                                                                <span className="input-group-text border-left-0" id="basic-addon2">
                                                                    <i className="fa fa-image c-blue"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section className='old-post bg-white border p-4'>
                                        <div className="post-header">
                                            <div className="row justify-content-between">
                                                <div className="col-9 col-md-7 col-lg-7">
                                                    <div className="row">
                                                        <div className="col-4 col-md-3 col-lg-3 pr-0">
                                                            <img src={UserImg} className="img-fluid " alt='logged in user' />
                                                        </div>
                                                        <div className="col-7 col-md-9 col-lg-6 pl-0">
                                                            <p className='c-brand f-14 f-bold mb-0'>David Akinbami</p>
                                                            <p className="c-grey f-12 f-med">4 hrs Ago</p>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                                <div className="col-3 col-md-2 col-lg-3">
                                                    <button className="btn bg-transparent border-0 pull-right">
                                                        <i className="fa fa-ellipsis-h f-16 c-blue"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <p className=" f-12 f-med">
                                                    Frontier for growth in the development of local expertise in the subsea of oil
                                                    and gas industry and that Brisktrode will play a key role in driving this agenda.
                                                    Frontier for growth in the development of local expertise in the subsea of oil
                                                    and gas industry and that Brisktrode will play a key role in driving this agenda.
                                                    Frontier for growth in the development of local expertise in the subsea of oil
                                                    and gas industry and that Brisktrode will play a key role in driving this agenda.
                                                </p>
                                                <img src={UserPost} className="w-100" alt='user post' />
                                            </div>
                                            <div className=" mt-3 px-3">
                                                <div className="row justify-content-between">
                                                    <div className="col-9 col-lg-6">
                                                        <span className="post-likes c-blue f-14 mr-3 f-bold">
                                                            <i className="fa fa-heart-o mr-2"></i>
                                                            20 likes
                                                        </span> 
                                                        <span className="post-comment c-blue f-14 f-bold">
                                                            <i className="fa fa-comment-o mr-2"></i>
                                                            12 comments
                                                        </span>
                                                    </div>
                                                    <div className="col-3 col-lg-3">
                                                        <i className="fa fa-bookmark c-blue pull-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comment-box mt-4">
                                                <div className="row">
                                                    <div className="col-2 col-md-2 pr-0">
                                                        <img src={UserIcon} className="img-fluid" alt="" />
                                                    
                                                    </div>
                                                    <div className="col-10 col-md-10 pl-0">
                                                        <div className="input-group mb-3">
                                                            <input type="text" className="form-control border-right-0" placeholder="Comment..." 
                                                                aria-label="Comment..." aria-describedby="basic-addon2" />
                                                            <div className="input-group-append">
                                                                <span className="input-group-text border-left-0" id="basic-addon2">
                                                                    <i className="fa fa-image c-blue"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section className='old-post bg-white border p-4'>
                                        <div className="post-header">
                                            <div className="row justify-content-between">
                                                <div className="col-9 col-md-7 col-lg-7">
                                                    <div className="row">
                                                        <div className="col-4 col-md-3 col-lg-3 pr-0">
                                                            <img src={UserImg} className="img-fluid " alt='logged in user' />
                                                        </div>
                                                        <div className="col-7 col-md-9 col-lg-6 pl-0">
                                                            <p className='c-brand f-14 f-bold mb-0'>David Akinbami</p>
                                                            <p className="c-grey f-12 f-med">4 hrs Ago</p>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                                <div className="col-3 col-md-2 col-lg-3">
                                                    <button className="btn bg-transparent border-0 pull-right">
                                                        <i className="fa fa-ellipsis-h f-16 c-blue"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <p className=" f-12 f-med">
                                                    Frontier for growth in the development of local expertise in the subsea of oil
                                                    and gas industry and that Brisktrode will play a key role in driving this agenda.
                                                    Frontier for growth in the development of local expertise in the subsea of oil
                                                    and gas industry and that Brisktrode will play a key role in driving this agenda.
                                                    Frontier for growth in the development of local expertise in the subsea of oil
                                                    and gas industry and that Brisktrode will play a key role in driving this agenda.
                                                </p>
                                                <img src={UserPost} className="w-100" alt='user post' />
                                            </div>
                                            <div className=" mt-3 px-3">
                                                <div className="row justify-content-between">
                                                    <div className="col-9 col-lg-6">
                                                        <span className="post-likes c-blue f-14 mr-3 f-bold">
                                                            <i className="fa fa-heart-o mr-2"></i>
                                                            20 likes
                                                        </span> 
                                                        <span className="post-comment c-blue f-14 f-bold">
                                                            <i className="fa fa-comment-o mr-2"></i>
                                                            12 comments
                                                        </span>
                                                    </div>
                                                    <div className="col-3 col-lg-3">
                                                        <i className="fa fa-bookmark c-blue pull-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comment-box mt-4">
                                                <div className="row">
                                                    <div className="col-2 col-md-2 pr-0">
                                                        <img src={UserIcon} className="img-fluid" alt="" />
                                                    
                                                    </div>
                                                    <div className="col-10 col-md-10 pl-0">
                                                        <div className="input-group mb-3">
                                                            <input type="text" className="form-control border-right-0" placeholder="Comment..." 
                                                                aria-label="Comment..." aria-describedby="basic-addon2" />
                                                            <div className="input-group-append">
                                                                <span className="input-group-text border-left-0" id="basic-addon2">
                                                                    <i className="fa fa-image c-blue"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <section className='old-post bg-white border p-4'>
                                        <div className="post-header">
                                            <div className="row justify-content-between">
                                                <div className="col-9 col-md-7 col-lg-7">
                                                    <div className="row">
                                                        <div className="col-4 col-md-3 col-lg-3 pr-0">
                                                            <img src={UserImg} className="img-fluid " alt='logged in user' />
                                                        </div>
                                                        <div className="col-7 col-md-9 col-lg-6 pl-0">
                                                            <p className='c-brand f-14 f-bold mb-0'>David Akinbami</p>
                                                            <p className="c-grey f-12 f-med">4 hrs Ago</p>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                                <div className="col-3 col-md-2 col-lg-3">
                                                    <button className="btn bg-transparent border-0 pull-right">
                                                        <i className="fa fa-ellipsis-h f-16 c-blue"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="mt-4">
                                                <p className=" f-12 f-med">
                                                    Frontier for growth in the development of local expertise in the subsea of oil
                                                    and gas industry and that Brisktrode will play a key role in driving this agenda.
                                                    Frontier for growth in the development of local expertise in the subsea of oil
                                                    and gas industry and that Brisktrode will play a key role in driving this agenda.
                                                    Frontier for growth in the development of local expertise in the subsea of oil
                                                    and gas industry and that Brisktrode will play a key role in driving this agenda.
                                                </p>
                                            </div>
                                            <div className=" mt-3 px-3">
                                                <div className="row justify-content-between">
                                                    <div className="col-9 col-lg-6">
                                                        <span className="post-likes c-blue f-14 mr-3 f-bold">
                                                            <i className="fa fa-heart-o mr-2"></i>
                                                            20 likes
                                                        </span> 
                                                        <span className="post-comment c-blue f-14 f-bold">
                                                            <i className="fa fa-comment-o mr-2"></i>
                                                            12 comments
                                                        </span>
                                                    </div>
                                                    <div className="col-3 col-lg-3">
                                                        <i className="fa fa-bookmark c-blue pull-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comment-box mt-4">
                                                <div className="row">
                                                    <div className="col-2 col-md-2 pr-0">
                                                        <img src={UserIcon} className="img-fluid" alt="" />
                                                    
                                                    </div>
                                                    <div className="col-10 col-md-10 pl-0">
                                                        <div className="input-group mb-3">
                                                            <input type="text" className="form-control border-right-0" placeholder="Comment..." 
                                                                aria-label="Comment..." aria-describedby="basic-addon2" />
                                                            <div className="input-group-append">
                                                                <span className="input-group-text border-left-0" id="basic-addon2">
                                                                    <i className="fa fa-image c-blue"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                </section>
                            </div>
                            <div className="col-md-3 col-lg-3">
                                <div className="church-branches mt-3 bg-white p-3">
                                    <h3 className="f-18">Members</h3>
                                    <input className="form-control" placeholder="Search member" />
                                    <div className="branches mt-3">
                                        <li className="list-unstyled mb-2">
                                            <a className="f-14 c-brand f-med" href='/group'>Adebowale Johnson</a>
                                        </li>
                                        <li className="list-unstyled mb-2">
                                            <a className="f-14 c-brand f-med" href='/group'>Adebowale Johnson</a>
                                        </li>
                                        <li className="list-unstyled mb-2">
                                            <a className="f-14 c-brand f-med" href='/group'>Adebowale Johnson</a>
                                        </li>
                                        <li className="list-unstyled mb-2">
                                            <a className="f-14 c-brand f-med" href='/group'>Adebowale Johnson</a>
                                        </li>
                                        <li className="list-unstyled mb-2">
                                            <a className="f-14 c-brand f-med" href='/group'>Adebowale Johnson</a>
                                        </li>
                                        <li className="list-unstyled mb-2">
                                            <a className="f-14 c-brand f-med" href='/group'>Adebowale Johnson</a>
                                        </li>
                                        <li className="list-unstyled mb-2">
                                            <a className="f-14 c-brand f-med" href='/group'>Adebowale Johnson</a>
                                        </li>
                                        <li className="list-unstyled mb-2">
                                            <a className="f-14 c-brand f-med" href='/group'>Adebowale Johnson</a>
                                        </li>
                                        <li className="list-unstyled mb-2">
                                            <a className="f-14 c-brand f-med" href='/group'>Adebowale Johnson</a>
                                        </li>
                                        <li className="list-unstyled mb-2">
                                            <a className="f-14 c-brand f-med" href='/group'>Adebowale Johnson</a>
                                        </li>
                                        <li className="list-unstyled mb-2">
                                            <a className="f-14 c-brand f-med" href='/group'>Adebowale Johnson</a>
                                        </li>
                                        <li className="list-unstyled mb-2">
                                            <a className="f-12 c-brand f-med" href='/group'>Adebowale Johnson</a>
                                        </li>
                                        <a className="c-brand f-14 mt-3 f-med" href='/group'>
                                            <i className="fa fa-plus mr-2"></i>
                                            Add member
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>            
                </main>
            </div>
        )
    }
    
};

export default Group;