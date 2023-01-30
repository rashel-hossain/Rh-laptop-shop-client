import React from 'react';
import AdvertisedProducts from '../AdvertisedProducts/AdvertisedProducts';
import Banner from '../Banner/Banner';
import BigOffer from '../BigOffer/BigOffer';
import ClientMeeting from '../ClientMeeting/ClientMeeting';
import ContactForm from '../ContactUs/ContactForm';
import HomeCategories from '../HomeCategories/HomeCategories';
import Reviews from '../UserReview/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BigOffer></BigOffer>
            <AdvertisedProducts></AdvertisedProducts>
            <HomeCategories></HomeCategories>
            <ClientMeeting></ClientMeeting>
            <Reviews></Reviews>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;