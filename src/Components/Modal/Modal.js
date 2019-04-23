import React from 'react';
import Aux from '../../hoc/hoc';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.scss';

const modal = (props) => {
    return (
        <Aux>
            <Backdrop hide={props.hide} />
            <div className="Modal">
                {props.children}
            </div>
        </Aux>
        
    )
}

export default modal;