import React from 'react';
import './BannerItem.css'
import { Link } from 'react-router-dom';

const Banner = () => {

    return (
        <section className="min-h-screen w-full bg-slate-300 bg-cover bg-center backdrop-brightness-200">
            <div className="banner min-h-screen flex items-center justify-evenly">
                <div>
                    <h2 className='text-4xl font-bold text-red-500'>
                        Welcome To<br />RH-Laptop-Shop
                    </h2>
                    <p className='text-xl text-black mt-10'>Here three variations of Laptop MacBook, HP and Samsung<br />A customer place the order click Buy Your Best Laptop section.<br />
                        And Customer paid their order payment by Visa card.
                    </p>
                    <Link className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white mt-10" to='/allProductsCategories'>Get Explore All</Link>
                </div>
                <div>
                    <img src='https://i.ibb.co/2YYMG3G/big-sale-preview.png' alt='loading please...' />
                </div>
            </div>
        </section>
    );
};

export default Banner;