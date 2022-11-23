import React from 'react';
import img1 from '../../../assets/Banner/slide4.jpeg'
import img2 from '../../../assets/Banner/slide5.jpeg'

import BannerItem from './BannerItem';


const bannerData = [
    {
        image: img1,
        prev: 2,
        id: 1,
        next: 2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        next: 1
    },

]

const Banner = () => {

    return (
        <div>
            <div className="carousel  ">
                {
                    bannerData.map(slide => <BannerItem
                        key={slide.id}
                        slide={slide}
                    ></BannerItem>)
                }
            </div>
        </div>

        // 3:22
    );
};

export default Banner;