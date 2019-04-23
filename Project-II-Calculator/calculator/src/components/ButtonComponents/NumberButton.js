import React from 'react';
import './Button.css';


const NumberButton = props => {
    return (
        <div className='button-container'>
            <p>{props.textProp.text}</p>
        </div>
    );
};

export default NumberButton;