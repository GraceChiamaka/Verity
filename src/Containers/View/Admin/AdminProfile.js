import React, {Component} from 'react';
import Header from '../../../Components/Navigation/dashboardHeader';
import CustomNav from '../../../Components/Navigation/CustomNav/CustomNav';
import Modal from '../../../Components/Modal/Modal';

import '../Admin/Admin.scss';
import '../Branch/Branch.scss';
import UserImg from '../../../assets/images/user_2.png';
import UserIcon from '../../../assets/images/user_3.png';
import  UserPost from '../../../assets/images/post_1.png';
import ProfilePic from '../../../assets/images/profile_pic.png';

class Adminprofile extends Component {
    state={
        showMessageModal: false
    }
    showMessageModal = (ev) => {
        this.setState({ showMessageModal: true })
    }
    hideModal = (ev) => {
        this.setState({ showMessageModal: false })
    }
    render(){
       
        return (
			<div className="AdminProfile">
				<Header />
                <div className="branch-bg">
                    <div className="container">
                        <CustomNav />
                    </div>
                </div>
                <main>
                    <div className="banner">
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-12 col-md-3 pos-rel">
                                    <div className="banner-img">
                                        <img src={ProfilePic} className="img-fluid" alt="Member profile" />
                                    </div>
                                </div>
                                <div className="col-12 col-md-7">
                                    <ul className="branch-tabs">
                                        <li className="branch-item active f-16 c-brand f-bold">
                                            <button className="btn border-0"> Comments <span className="comments-count">(234)</span> </button>
                                        </li>
                                        <li className="branch-item">
                                            <button className="btn border-0"> Likes <span className='likes-count'>(120)</span> </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-12 col-md-2 pt-1">
                                    <div className="banner-button">
                                        <button className="btn btn-brand text-white pull-right" onClick={this.showMessageModal}>Message</button>
                                    </div>
                                    
                                    
                                </div>
                            </div>   
                        </div>
                        {
                            this.state.showMessageModal && 
                            <Modal hide={this.hideModal} >
                                <div className="row justify-content-between px-3 pt-3">
                                    <div className="col-md-8">
                                        <div className="row">
                                            <div className="col-md-2">
                                                <img src={UserIcon} alt="" />
                                            </div>
                                            <div className="col-md-7">
                                                <p className="c-brand f-14 f-bold">david Akinbami</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="text-right">
                                            <i className="fa fa-times"></i>
                                        </div>
                                    </div>
                                    
                                </div>
                                <hr /> 
                                <form>
                                    <div className="row">
                                        <div className="col-md-12 ">
                                            <textarea className=" message-form-control" required placeholder="Write a message or attach a file"></textarea>                                                        
                                        </div>
                                        <div className="col-md-12">
                                            <div className="row mx-0 bg-light bd-grey justify-content-between">
                                                <div className="col-md-6">
                                                    <button className="btn bg-transparent border-0"><i className="fa fa-photo c-brand"></i></button>
                                                    <button className="btn bg-transparent border-0 mx-2 f-bold"><i className="fa fa-paperclip c-brand"></i></button>
                                                    <buttion className="btn c-brand bg-transparent border-0 f-bold">GIF</buttion>
                                                </div>
                                                <div classname="col-md-4">
                                                    <button className="btn btn-brand text-white">Send</button>
                                                </div>
                                            </div>
                                        </div>  
                                    </div>
                                </form>
                                
                            </Modal>
                        }
                    </div>
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-md-3 col-lg-3">
                                {/* church details */}
                                <div className="profile-details">
                                    <p className="c-blk f-15 f-bold ">Adebayo John </p>
                                    <p className="f-14 c-grey f-med">Member, Deeper Life Bible Church, Sabo Yaba</p>
                                    <p className=" mt-3 f-12 f-med c-blue">
                                        <i className="fa fa-map-marker mr-1"></i>
                                        Sabo Yaba, Lagos.
                                    </p>
                                    <p className="c-blue f-12 f-med">
                                        <i className="fa fa-calendar mr-1"></i>
                                        Joined March 2019
                                    </p>
                                </div>
                                <div className="resources-section p-3 mt-3">
                                    <h3 className="f-18">Resources</h3>
                                    <input className="form-control" placeholder="search" />
                                    <p className="f-12 c-grey f-med">Search by state, area, name...</p>
                                    <div className="resources mt-3">
                                        <li className="list-unstyled mt-2">
                                            <a className="f-16 f-med" href='/'>Messages (video)</a>
                                            <br />
                                            <span className="c-grey f-12 f-med">250 different types</span>
                                        </li>
                                        <li className="list-unstyled mt-2">
                                            <a className="f-16 f-med" href='/'>Messages (video)</a>
                                            <br />
                                            <span className="c-grey f-12 f-med">250 different types</span>
                                        </li>
                                        <li className="list-unstyled mt-2">
                                            <a className="f-16 f-med" href='/'>Messages (video)</a>
                                            <br />
                                            <span className="c-grey f-12 f-med">250 different types</span>
                                        </li>
                                        <li className="list-unstyled mt-2">
                                            <a className="f-16 f-med" href='/'>Messages (video)</a>
                                            <br />
                                            <span className="c-grey f-12 f-med">250 different types</span>
                                        </li>
                                        <li className="list-unstyled mt-2">
                                            <a className="f-16 f-med" href='/'>Messages (video)</a>
                                            <br />
                                            <span className="c-grey f-12 f-med">250 different types</span>
                                        </li>
                                        <li className="list-unstyled mt-2">
                                            <a className="f-16 f-med" href='/'>Messages (video)</a>
                                            <br />
                                            <span className="c-grey f-12 f-med">250 different types</span>
                                        </li>
                                        <li className="list-unstyled mt-2">
                                            <a className="f-16 f-med" href='/'>Messages (video)</a>
                                            <br />
                                            <span className="c-grey f-12 f-med">250 different types</span>
                                        </li>
                                        <li className="list-unstyled mt-2">
                                            <a className="f-16 f-med" href='/'>Messages (video)</a>
                                            <br />
                                            <span className="c-grey f-12 f-med">250 different types</span>
                                        </li>
                                        <li className="list-unstyled mt-2">
                                            <a className="f-16 f-med" href='/'>Messages (video)</a>
                                            <br />
                                            <span className="c-grey f-12 f-med">250 different types</span>
                                        </li>
                                        <li className="list-unstyled mt-2">
                                            <a className="f-16 f-med" href='/'>Messages (video)</a>
                                            <br />
                                            <span className="c-grey f-12 f-med">250 different types</span>
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
                                            <a className="f-14 c-brand f-med" href='/'>Adebowale Johnson</a>
                                        </li>
                                        <li className="list-unstyled mb-2">
                                            <a className="f-14 c-brand f-med" href='/'>Adebowale Johnson</a>
                                        </li>
                                        <li className="list-unstyled mb-2">
                                            <a className="f-14 c-brand f-med" href='/'>Adebowale Johnson</a>
                                        </li>
                                        <li className="list-unstyled mb-2">
                                            <a className="f-14 c-brand f-med" href='/'>Adebowale Johnson</a>
                                        </li>
                                        <li className="list-unstyled mb-2">
                                            <a className="f-14 c-brand f-med" href='/'>Adebowale Johnson</a>
                                        </li>
                                        <li className="list-unstyled mb-2">
                                            <a className="f-14 c-brand f-med" href='/'>Adebowale Johnson</a>
                                        </li>
                                        <li className="list-unstyled mb-2">
                                            <a className="f-14 c-brand f-med" href='/'>Adebowale Johnson</a>
                                        </li>
                                        <li className="list-unstyled mb-2">
                                            <a className="f-14 c-brand f-med" href='/'>Adebowale Johnson</a>
                                        </li>
                                        <li className="list-unstyled mb-2">
                                            <a className="f-14 c-brand f-med" href='/'>Adebowale Johnson</a>
                                        </li>
                                        <li className="list-unstyled mb-2">
                                            <a className="f-14 c-brand f-med" href='/'>Adebowale Johnson</a>
                                        </li>
                                        <li className="list-unstyled mb-2">
                                            <a className="f-14 c-brand f-med" href='/'>Adebowale Johnson</a>
                                        </li>
                                        <li className="list-unstyled mb-2">
                                            <a className="f-12 c-brand f-med" href='/'>Adebowale Johnson</a>
                                        </li>
                                        <a className="c-brand f-14 mt-3 f-med" href="/">
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
		);
    }
	
}

export default Adminprofile;