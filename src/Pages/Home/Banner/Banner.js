import React from 'react';
import './BannerItem.css'


const Banner = () => {

    return (
        <section className={`hero lg:h-[500px]`} style={{ backgroundImage: "url('https://i.ibb.co/2jfzb83/slide4.jpg')" }}>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse justify-end transform -translate-y-1/2 top-1/4">

                    <div>
                        <h2 className='text-4xl font-bold text-red-500'>
                            Welcome To <br /> RH-Laptop-Shop
                        </h2>
                        <p className='text-xl text-black'>There are many variations of Laptop available, We provide <br /> The best service have setisfied products in our customer.</p>
                        <button className="btn btn-primary">Get Explore</button>
                    </div>
                </div>
            </div>

        </section>


    );
};

export default Banner;