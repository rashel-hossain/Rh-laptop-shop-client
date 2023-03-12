import React from 'react';
import './BannerItem.css'

const Banner = () => {

    return (
        <section id="contact" className="min-h-screen w-full bg-cover bg-center rounded-md backdrop-brightness-200" >
            <div className="banner min-h-screen flex items-center justify-evenly m-4">
                <div>
                    <h2 className='text-5xl font-bold text-green-500 mb-5'>
                        Welcome To <br /> RH-Laptop-Shop
                    </h2>
                    <p className='text-xl text-black mb-4'>There are many variations of Laptop available, We provide <br /> The best service have setisfied products in our customer.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white mt-2">Get Explore</button>
                </div>

                <div className='test'>
                    <img src='https://res.cloudinary.com/ddex1kbr7/image/upload/v1678604637/istockphoto-847387492-612x612-removebg-preview_cnnawl.png' alt='loading please...' />
                </div>
            </div>
        </section>
    );
};

export default Banner;