import React from 'react';
import './Button.css';

const ActionButton = props => {
    return (
      <div className='clear'>
        {props.text}
      </div>
    );
  };

export default ActionButton;