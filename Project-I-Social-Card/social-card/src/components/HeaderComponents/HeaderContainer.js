import React from 'react';
import './Header.css';

import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const CardContainer = () => {
    return (
    <div className="card-container">
        <ImageThumbnail />
        <div className='header-container'>
            <HeaderTitle />
            <HeaderContent />
        </div>
    </div>
    );
};


export default CardContainer;