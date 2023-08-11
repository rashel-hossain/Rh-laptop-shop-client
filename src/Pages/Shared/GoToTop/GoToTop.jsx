import React from 'react';
import ScrollToTop from 'react-scroll-to-top';

const GoToTop = () => {
    return (
        <div>
            <ScrollToTop
                smooth
                top="500"
                color='#0088CC'
            />
        </div>
    );
};

export default GoToTop;