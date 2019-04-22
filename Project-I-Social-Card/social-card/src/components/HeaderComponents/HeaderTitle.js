import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return (
        <div className='headertitle'>
            <p><strong>Lambda School</strong></p>
            <p>@LambdaSchool</p>
            <div className='dot'></div>
            <p>26 jan</p>
        </div>
    );
};

export default HeaderTitle;