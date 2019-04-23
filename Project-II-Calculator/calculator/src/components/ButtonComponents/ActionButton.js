import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
        <div className='clear'>
            <p>{props.actionProp.text}</p>
        </div>
    );
};

export default ActionButton;