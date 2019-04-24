import React from 'react';
import './CustomNav.scss';

const nav = (props) => {
	return (
			<div className='CustomNav'>
				<div className="custom-nav">
                    <ol className=' bg-white f-14 list-unstyled mt-3'>
                        <li class="custom-nav--list">
                            <a href="#" className="f-bold">Believer's Fellowship / Network</a>
                        </li>
                        <li class="custom-nav--list"><a href="#" className="f-bold active">Church Orgainsation Flatform</a></li>
                        <li class="custom-nav--list"><a href="#" className="f-bold">Biblical Search / Devotional</a></li>
                        <li class="custom-nav--list"><a href="#" className="f-bold">Online Store</a></li>
                        <li class="custom-nav--list"><a href="#" className="f-bold">Directry/Event Locator</a></li>
                        <li class="custom-nav--list"><a href="#" className="f-bold">Welfare</a></li>
                    </ol>
                </div>
			</div>
		);
}

export default nav;