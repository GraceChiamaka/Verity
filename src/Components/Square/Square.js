import React from 'react';
import './Square.scss';

const square = (props) => {
    return (
            <div className="Square-container" onClick={props.show} >
                <div className="Square">{props.children}</div>
            </div>
    )
}

export default square;