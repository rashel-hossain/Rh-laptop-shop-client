import React from 'react';
import './BannerItem.css'


const Banner = () => {

    return (
        <section className="min-h-screen w-full bg-cover bg-center rounded-xl" style={{ backgroundImage: "url('https://i.ibb.co/2jfzb83/slide4.jpg')" }}>
            <div className="min-h-screen flex items-center m-4">
                <div>
                    <h2 className='text-4xl font-bold text-red-500'>
                        Welcome To <br /> RH-Laptop-Shop
                    </h2>
                    <p className='text-xl text-black'>There are many variations of Laptop available, We provide <br /> The best service have setisfied products in our customer.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white mt-2">Get Explore</button>
                </div>
            </div>

        </section>


    );
};

export default Banner;