import React from 'react';
import './Header.css';

import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
    return (
    <div className="main-header-container">
        <ImageThumbnail />
        <div className='header-container'>
            <HeaderTitle />
            <HeaderContent />
        </div>
    </div>
    );
};


export default HeaderContainer;