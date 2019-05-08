import React, {Component} from 'react';

import Header from '../../../Components/Navigation/dashboardHeader';
import CustomNav from '../../../Components/Navigation/CustomNav/CustomNav';
import Modal from '../../../Components/Modal/Modal';
import '../Admin/Admin.scss';
import '../Branch/Branch.scss';

import user from '../../../assets/images/user_1.png';
import UserImg from '../../../assets/images/user_2.png';
import UserIcon from '../../../assets/images/user_3.png';
import  UserPost from '../../../assets/images/post_1.png';
import redeemgroup from '../../../assets/images/group-4.png';
import club from '../../../assets/images/group-2.png';
import youth from '../../../assets/images/group-1.png';
import churchGroup from '../../../assets/images/group-3.png';
import Camera from '../../../assets/images/camera.png';
class Network extends Component{
	state={
		groupModal: false
	}
	hideModal = (ev) => {
        this.setState({ groupModal: false })
    }
	showGroupModal= (ev) =>{
		this.setState({ groupModal: true })
	}
	render(){
		return (
			<div className="GeneralNetwork">
				<Header />
				<main>
				{
					this.state.groupModal && 
					<Modal hide={this.hideModal} className="modal-lg" >
						<div className="modal-header bg-light">
							<h4>Create a Group</h4>
							<i className="fa fa-times" onClick={this.hideModal}></i>
						</div>
						<div className="modal-body">
							<form>
								<div className="form-group">
									<label className='f-med'>Name of Group</label>
									<input className="form-control bg-transparent h-40" required placeholder="Enter the name of your group" />
								</div>
								<div className="form-group">
									<label className="f-med">Group deescription</label>
									<textarea className="form-control bg-transparent h-100"  placeholder="Enter the your group description, rules and regulation" required>
									</textarea>
								</div>
								<div className="form-group">
									<label className="f-med">Add People</label>
									<input className="form-control bg-transparent  h-40" required placeholder="Add people by names, email address" />
								</div>
								<div className="form-group">
									<div className="row">
										<div className="col-md-8">
											<p className="f-med">Select Privacy</p>
											<div className="form-check">
                                                <input className="form-check-input " type="radio" name="privacy" id="secret" value="secret" required />
                                                <label className="form-check-label f-16 f-med" htmlFor="secret">Secret <span className="f-12 f-light">( Enter group description, Rules and Regulations... )</span></label>
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="privacy" id="private" value="private" />
                                                <label className="form-check-label f-16 f-med" htmlFor="private">Private <span className ="f-12 f-light	">( Enter group description, Rules and Regulations... )</span></label>
                                            </div>
                                            <div className="form-check ">
                                                <input className="form-check-input" type="radio" name="privacy" id="public" value="public" />
                                                <label className="form-check-label f-16 f-med" htmlFor="public">public <span className="f-12 f-light">( Enter group description, Rules and Regulations... )</span></label>
                                            </div>
										</div>
										<div className="col-md-4">
											<div className="group-photo text-right">
												<label className="f-med">Upload Image</label>
												<br	/>
												<input type="file" className="upload-group-photo-input" required />
												<button className="upload-photo-btn"><img src={Camera} alt="camera" /></button>
											</div>
											
										</div>
									</div>
									
								</div>
								<div className="modal-footer bg-light">
									<button className="btn btn-brand text-white">Create</button>
								</div>
							</form>
						</div>				
					</Modal>
				}
					<div className="container mt-3">
						<CustomNav />
						<div>
							<div className="new-tab-container mt-3">
								<div className="container ">
									<div className="row justify-content-center">
										<div className="col-lg-7 pos-rel">
											<ul className="new-tabs">
												<li className="new-tabs-item active f-16 c-brand f-bold">
													<a href='network'> General  </a>
												</li>
												<li className="new-tabs-item">
													<a href='/denomination'> denomination </a>
												</li>
											</ul>
										</div>
									</div>
									<div className="row justify-content-bewteen mt-5">
										<div className="col-md-3 col-lg-3">
											<div className="bd-grey bg-white">
												<div className="user-section">
													<div className="network-block"></div>
													<img src={user} alt='user big' />
													<div className="user-details text-center">
														<p className="f-14 f-bold c-blk">Akintunde Williams</p>
														<p className="f-12 f-med c-grey">Administrative officer for Deeper Life 
															<br /> Bible Church
														</p>
														<hr />
													</div>
												</div>
												<section className="user-stats p-2">
													<div className="clearfix f-14 f-med">
														<span className="pull-left c-brown">Followers</span>
														<span className="pull-right c-brand">32</span>
													</div>
													<div className="clearfix f-14 f-med">
														<span className="pull-left c-brown">Followìng</span>
														<span className="pull-right c-brand">32</span>
													</div>
													<div className="clearfix f-14 f-med">
														<span className="pull-left c-brown">Post</span>
														<span className="pull-right c-brand">32</span>
													</div>
													<div className="clearfix f-14 f-med">
														<span className="pull-left c-brown">Groups</span>
														<span className="pull-right c-brand">32</span>
													</div>
												</section>
											</div>
											<div className="mt-5 bg-white p-3">
												<p className="">
													<a  className="c-brand f-med f-14" onClick={this.showGroupModal}>Create a Group</a>
												</p>
												<p className="mb-0">
													<a href="/network" className="c-brand f-med f-14">Post a Topic</a>
												</p>
											</div>
										</div>
										<div className="col-md-6 col-lg-6">
											<section className="posts">
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
											<section className="friend-suggestions bg-white p-2">
												<h3 className="c-brown f-16">
													People you may know
												</h3>
												<div className="row mt-3">
													<div className="col-12 col-lg-3">
														<img src={UserImg} className="w-40" alt="user" />
													</div>
													<div className="col-12 col-lg-6 px-0">
														<p className="f-12 f-med c-brand mb-0">David Akinbami</p>
														<span className="f-10 f-med c-grey">Deeper Life Bible Church</span>
													</div>
													<div className="col-12 col-lg-3  px-0">
														<p className="c-brand f-14 f-med">Follow</p>
													</div>
												</div>

												<div className="row mt-3">
													<div className="col-lg-3">
														<img src={UserImg} className="w-40" alt="user" />
													</div>
													<div className="col-lg-6 px-0">
														<p className="f-12 f-med c-brand mb-0">David Akinbami</p>
														<span className="f-10 f-med c-grey">Deeper Life Bible Church</span>
													</div>
													<div className=" col-lg-3  px-0">
														<p className="c-brand f-14 f-med">Follow</p>
													</div>
												</div>

												<div className="row mt-3">
													<div className="col-lg-3">
														<img src={UserImg} className="w-40" alt="user" />
													</div>
													<div className="col-lg-6 px-0">
														<p className="f-12 f-med c-brand mb-0">David Akinbami</p>
														<span className="f-10 f-med c-grey">Deeper Life Bible Church</span>
													</div>
													<div className=" col-lg-3  px-0">
														<p className="c-brand f-14 f-med">Follow</p>
													</div>
												</div>
												<div className="row mt-3">
													<div className="col-lg-3">
														<img src={UserImg} className="w-40" alt="user" />
													</div>
													<div className="col-lg-6 px-0">
														<p className="f-12 f-med c-brand mb-0">David Akinbami</p>
														<span className="f-10 f-med c-grey">Deeper Life Bible Church</span>
													</div>
													<div className=" col-lg-3  px-0">
														<p className="c-brand f-14 f-med">Follow</p>
													</div>
												</div>

												

												<div className="text-center c-brand f-med mt-3 mb-3">
													View all
												</div>
											</section>
											<section className="group-suggestions mt-3 bg-white p-3">

												<h3 className="f-16">Groups you may like to join</h3>

												<div className="row mt-3">
													<div className=" col-lg-3">
														<img src={redeemgroup} className="w-40" alt="user" />
													</div>
													<div className="col-lg-6 px-0">
														<p className="f-12 f-bold c-brand mb-0">Redeem Youth Church</p>
														<span className="f-10 f-bold c-grey">Deeper Life Bible Church</span>
													</div>
													<div className="col-lg-3  px-0 text-right pr-2">
														<p className="c-brand f-14 f-med">Join</p>
													</div>
												</div>
												<div className="row mt-3">
													<div className="col-lg-3">
														<img src={club} className="w-40" alt="user" />
													</div>
													<div className="col-lg-6 px-0">
														<p className="f-12 f-bold c-brand mb-0">700 club</p>
														<span className="f-10 f-bold c-grey">Deeper Life Bible Church</span>
													</div>
													<div className="col-lg-3  px-0 text-right pr-2">
														<p className="c-brand f-14 f-med">Join</p>
													</div>
												</div>
												<div className="row mt-3">
													<div className="col-lg-3">
														<img src={churchGroup} className="w-40" alt="user" />
													</div>
													<div className="col-lg-6 px-0">
														<p className="f-12 f-bold c-brand mb-0">Youth for Christ</p>
														<span className="f-10 f-bold c-grey">Deeper Life Bible Church</span>
													</div>
													<div className="col-lg-3 px-0 pr-2 text-right">
														<p className="c-brand f-14 f-med">Join</p>
													</div>
												</div>
												<div className="row mt-3">
													<div className="col-lg-3">
														<img src={youth} className="w-40" alt="user" />
													</div>
													<div className="col-lg-6 px-0">
														<p className="f-12 f-bold c-brand mb-0"> Women Prayer Ministry</p>
														<span className="f-10 f-bold c-grey">Deeper Life Bible Church</span>
													</div>
													<div className="col-lg-3  px-0 text-right pr-2">
														<p className="c-brand f-14 f-med">Join</p>
													</div>
												</div>
												<div className="text-center f-bold c-brand my-3">
													View All
												</div>
												
											</section>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		)
	}
}

export default Network;
