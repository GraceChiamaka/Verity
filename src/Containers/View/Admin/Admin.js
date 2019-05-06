import React from 'react';
import Header from '../../../Components/Navigation/dashboardHeader';
import CustomNav from '../../../Components/Navigation/CustomNav/CustomNav';
import './Admin.scss';

import user from '../../../assets/images/user_1.png';
import ChurchLogo from '../../../assets/images/church_logo.png';
import UserImg from '../../../assets/images/user_2.png';
import UserIcon from '../../../assets/images/user_3.png';
import  UserPost from '../../../assets/images/post_1.png';

const admin = (props) => {
    return (
        <div className="Admin">
            <Header />
            <main>
                <div className="container mt-3 px-0">
                    <CustomNav />
                    <div className="row wrapper mt-3 justify-content-center">
                        <div className="col-md-3 col-lg-3">
                            <div className="bd-grey">
                                <div className="user-section">
                                    <div className="user-block"></div>
                                        <img src={user} className="img-fluid" alt='user big' />
                                    <div className="user-details text-center">
                                        <p className="f-14 f-bold c-blk">Akintunde Williams</p>
                                        <p className="f-12 f-med c-grey">Administrative officer for Deeper Life <br /> Bible Church</p>
                                    </div>
                                </div>
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
                            <section className="posts">
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
                        <div className="col-md-3 col-lg-3">
                            <div className="church-section text-center">
                                <img src={ChurchLogo} className="img-fluid" alt="church logo" />
                                <p className="f-16 c-bold c-brand">Deeper Life Bible Church</p>
                            </div>
                            <div className="church-branches mt-3 bg-white p-3">
                                <h3 className="f-18">Branches</h3>
                                <input className="form-control" placeholder="search" />
                                <p className="f-12 c-grey f-med">Search by state, area, name...</p>
                                <div className="branches mt-3">
                                    <li className="list-unstyled">
                                        <a className="f-12 c-brand f-med" href='/'>Deeper Life Bible Church, Gbagaba</a>
                                    </li>
                                    <li className="list-unstyled mt-2">
                                        <a className="f-12 c-brand f-med" href='/'>Deeper Life Bible Church, Gbagaba</a>
                                    </li>
                                    <li className="list-unstyled mt-2">
                                        <a className="f-12 c-brand f-med" href='/'>Deeper Life Bible Church, Gbagaba</a>
                                    </li>
                                    <li className="list-unstyled mt-2">
                                        <a className="f-12 c-brand f-med" href='/'>Deeper Life Bible Church, Gbagaba</a>
                                    </li>
                                    <li className="list-unstyled mt-2">
                                        <a className="f-12 c-brand f-med" href='/'>Deeper Life Bible Church, Gbagaba</a>
                                    </li>
                                    <li className="list-unstyled mt-2">
                                        <a className="f-12 c-brand f-med" href='/'>Deeper Life Bible Church, Gbagaba</a>
                                    </li>
                                    <a className="c-brand f-14 mt-3 f-med" href="/">
                                        <i className="fa fa-plus mr-2"></i>
                                        Add branch
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>   
    );
};

export default admin;