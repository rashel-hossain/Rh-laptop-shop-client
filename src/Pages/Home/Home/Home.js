import React from 'react';
import AdvertisedProducts from '../AdvertisedProducts/AdvertisedProducts';
import Banner from '../Banner/Banner';
import ContactForm from '../ContactUs/ContactForm';
import HomeCategories from '../HomeCategories/HomeCategories';
import Reviews from '../UserReview/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertisedProducts></AdvertisedProducts>
            <HomeCategories></HomeCategories>
            <Reviews></Reviews>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;