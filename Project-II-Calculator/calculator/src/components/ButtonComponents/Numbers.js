import React from 'react';
import NumberButton from './NumberButton';
import Action from './Action'
import './Button.css';
import ActionButton from './ActionButton';

const text = [
    {
        text: '/'
    },
    {
        text: 7
    },
    {
        text: 8
    },
    {
        text: 9
    },
    {
        text: 'x'
    },
    {
        text: 4
    },
    {
        text: 5
    },
    {
        text: 6
    },
    {
        text: '-'
    },
    {
        text: 1
    },
    {
        text: 2
    },
    {
        text: 3
    },
    {
        text: '+'
    },
    {
        text: '='
    },
];

function Numbers() {
    return (
        <div className='master-button-container'>
            <div className='clear'>clear</div>
            {text.map(textFromMap => {
                return <NumberButton textProp={textFromMap} />

            })}
            <div className='clear'>0</div>
        </div>
    );
}

export default Numbers;