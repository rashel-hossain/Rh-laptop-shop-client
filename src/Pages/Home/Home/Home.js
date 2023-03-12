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
        <section>
            <Banner></Banner>
            <div className='max-w-[1280px] mx-auto'>
                <HomeCategories></HomeCategories>
                <BigOffer></BigOffer>
                <AdvertisedProducts></AdvertisedProducts>
                <ClientMeeting></ClientMeeting>
                <Reviews></Reviews>
                <ContactForm></ContactForm>
            </div>
        </section>

    );
};

export default Home;