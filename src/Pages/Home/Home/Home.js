import React from 'react';
import Banner from '../Banner/Banner';
import HomeCategories from '../HomeCategories/HomeCategories';
import Reviews from '../UserReview/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeCategories></HomeCategories>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;