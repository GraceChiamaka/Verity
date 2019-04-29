import React from 'react';

import Header from '../../../Components/Navigation/dashboardHeader';
import CustomNav from '../../../Components/Navigation/CustomNav/CustomNav';
import '../Admin/Admin.scss';
import './Branch.scss';
import user from '../../../assets/images/user_1.png';
import ChurchLogo from '../../../assets/images/church_logo.png';
import UserImg from '../../../assets/images/user_2.png';
import  UserPost from '../../../assets/images/post_1.png';
import Church from '../../../assets/images/church.png';

const branch = (props) => {
    return (
        <div className="Branch">
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
                            <div className="col-lg-3 pos-rel">
                                <div className="banner-img">
                                    <img src={Church} alt='deeper life church' />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <ul className="branch-tabs">
                                    <li className="branch-item active f-16 c-brand f-bold">
                                        <a> Posts <span className="post-count">(234)</span> </a>
                                    </li>
                                    <li className="branch-item">
                                        <a> Members<span className='member-count'>(120)</span> </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-2 pt-1">
                                <button className="btn btn-brand text-white">Message</button>
                            </div>
                        </div>   
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-3">
                            {/* church details */}
                            <div className="church-details">
                                <p className="c-grey f-14 f-med mb-0">Deeper Life Bible Church, </p>
                                <p className="f-14 c-grey f-med">Montgomery Road Sabo, Yaba.</p>
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
                        <div className="col-lg-6">
                            <section className="posts mt-4">
                                <section className="create-post p-3">
                                    <div class="media">
                                        <img src={UserImg} class="mr-3" alt="logged in user" />
                                        <div class="media-body">
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
                                            <div className="col-lg-7">
                                                <div className="row">
                                                    <div className="col-lg-3 pr-0">
                                                        <img src={UserImg} alt='logged in user' />
                                                    </div>
                                                    <div className="col-lg-6 pl-0">
                                                        <p className='c-brand f-14 f-bold mb-0'>David Akinbami</p>
                                                        <p className="c-grey f-12 f-med">4 hrs Ago</p>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div className="col-lg-3">
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
                                                <div className="col-lg-6">
                                                    <span className="post-likes c-blue f-14 mr-3 f-bold">
                                                        <i className="fa fa-heart-o mr-2"></i>
                                                        20 likes
                                                    </span> 
                                                    <span className="post-comment c-blue f-14 f-bold">
                                                        <i className="fa fa-comment-o mr-2"></i>
                                                        12 comments
                                                    </span>
                                                </div>
                                                <div className="col-lg-3">
                                                    <i className="fa fa-bookmark c-blue pull-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comment-box mt-4">
                                            <div className="row">
                                                <div className="col-lg-1 pr-0">
                                                    <img src={UserImg} className="w-75" />
                                                   
                                                </div>
                                                <div className="col-lg-11 pl-0">
                                                     <div class="input-group mb-3">
                                                        <input type="text" class="form-control border-right-0" placeholder="Comment..." 
                                                            aria-label="Comment..." aria-describedby="basic-addon2" />
                                                        <div class="input-group-append">
                                                            <span class="input-group-text border-left-0" id="basic-addon2">
                                                                <i className="fa fa-image c-blue"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='old-post bg-white border p-4 mt-3'>
                                    <div className="post-header">
                                        <div className="row justify-content-between">
                                            <div className="col-lg-7">
                                                <div className="row">
                                                    <div className="col-lg-3 pr-0">
                                                        <img src={UserImg} alt='logged in user' />
                                                    </div>
                                                    <div className="col-lg-6 pl-0">
                                                        <p className='c-brand f-14 f-bold mb-0'>David Akinbami</p>
                                                        <p className="c-grey f-12 f-med">4 hrs Ago</p>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div className="col-lg-3">
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
                                                <div className="col-lg-6">
                                                    <span className="post-likes c-blue f-14 mr-3 f-bold">
                                                        <i className="fa fa-heart-o mr-2"></i>
                                                        20 likes
                                                    </span> 
                                                    <span className="post-comment c-blue f-14 f-bold">
                                                        <i className="fa fa-comment-o mr-2"></i>
                                                        12 comments
                                                    </span>
                                                </div>
                                                <div className="col-lg-3">
                                                    <i className="fa fa-bookmark c-blue pull-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comment-box mt-4">
                                            <div className="row">
                                                <div className="col-lg-1 pr-0">
                                                    <img src={UserImg} className="w-75" />
                                                   
                                                </div>
                                                <div className="col-lg-11 pl-0">
                                                     <div class="input-group mb-3">
                                                        <input type="text" class="form-control border-right-0" placeholder="Comment..." 
                                                            aria-label="Comment..." aria-describedby="basic-addon2" />
                                                        <div class="input-group-append">
                                                            <span class="input-group-text border-left-0" id="basic-addon2">
                                                                <i className="fa fa-image c-blue"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className='old-post bg-white border p-4 mt-3'>
                                    <div className="post-header">
                                        <div className="row justify-content-between">
                                            <div className="col-lg-7">
                                                <div className="row">
                                                    <div className="col-lg-3 pr-0">
                                                        <img src={UserImg} alt='logged in user' />
                                                    </div>
                                                    <div className="col-lg-6 pl-0">
                                                        <p className='c-brand f-14 f-bold mb-0'>David Akinbami</p>
                                                        <p className="c-grey f-12 f-med">4 hrs Ago</p>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div className="col-lg-3">
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
                                                <div className="col-lg-6">
                                                    <span className="post-likes c-blue f-14 mr-3 f-bold">
                                                        <i className="fa fa-heart-o mr-2"></i>
                                                        20 likes
                                                    </span> 
                                                    <span className="post-comment c-blue f-14 f-bold">
                                                        <i className="fa fa-comment-o mr-2"></i>
                                                        12 comments
                                                    </span>
                                                </div>
                                                <div className="col-lg-3">
                                                    <i className="fa fa-bookmark c-blue pull-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comment-box mt-4">
                                            <div className="row">
                                                <div className="col-lg-1 pr-0">
                                                    <img src={UserImg} className="w-75" />
                                                   
                                                </div>
                                                <div className="col-lg-11 pl-0">
                                                     <div class="input-group mb-3">
                                                        <input type="text" class="form-control border-right-0" placeholder="Comment..." 
                                                            aria-label="Comment..." aria-describedby="basic-addon2" />
                                                        <div class="input-group-append">
                                                            <span class="input-group-text border-left-0" id="basic-addon2">
                                                                <i className="fa fa-image c-blue"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <section className='old-post bg-white border p-4 mt-4'>
                                    <div className="post-header">
                                        <div className="row justify-content-between">
                                            <div className="col-lg-7">
                                                <div className="row">
                                                    <div className="col-lg-3 pr-0">
                                                        <img src={UserImg} alt='logged in user' />
                                                    </div>
                                                    <div className="col-lg-6 pl-0">
                                                        <p className='c-brand f-14 f-bold mb-0'>David Akinbami</p>
                                                        <p className="c-grey f-12 f-med">4 hrs Ago</p>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div className="col-lg-3">
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
                                                <div className="col-lg-6">
                                                    <span className="post-likes c-blue f-14 mr-3 f-bold">
                                                        <i className="fa fa-heart-o mr-2"></i>
                                                        20 likes
                                                    </span> 
                                                    <span className="post-comment c-blue f-14 f-bold">
                                                        <i className="fa fa-comment-o mr-2"></i>
                                                        12 comments
                                                    </span>
                                                </div>
                                                <div className="col-lg-3">
                                                    <i className="fa fa-bookmark c-blue pull-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comment-box mt-4">
                                            <div className="row">
                                                <div className="col-lg-1 pr-0">
                                                    <img src={UserImg} className="w-75" />
                                                   
                                                </div>
                                                <div className="col-lg-11 pl-0">
                                                     <div class="input-group mb-3">
                                                        <input type="text" class="form-control border-right-0" placeholder="Comment..." 
                                                            aria-label="Comment..." aria-describedby="basic-addon2" />
                                                        <div class="input-group-append">
                                                            <span class="input-group-text border-left-0" id="basic-addon2">
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
                        <div className="col-lg-3">
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
                                    <a className="c-brand f-14 mt-3 f-med">
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
};

export default branch;