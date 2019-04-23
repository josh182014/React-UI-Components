import React from 'react';
import './Card.css';

import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
    return (
    <div className="card-container">
        <a className='anchor' href='https://www.reactjs.org'>
            <CardBanner></CardBanner>
            <CardContent></CardContent>
        </a>
    </div>
    );
};


export default CardContainer;