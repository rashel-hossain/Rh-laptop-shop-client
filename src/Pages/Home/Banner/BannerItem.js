import React from 'react';
import './BannerItem.css'

const BannerItem = ({ slide }) => {
    const { id, image, prev, next } = slide;

    return (

        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className="carousel-img">
                <img src={image} alt='' className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                <h2 className='text-4xl font-bold text-white'>
                    Welcome To <br /> RH-Laptop-Shop
                </h2>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
                <p className='text-xl text-white'>There are many variations of Laptop available, We provide the best service have setisfied products in our customer.</p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
                <button className="btn btn-active btn-secondary mr-5">New Arrivel</button>
                <button className="btn btn-outline btn-secondary">Explore Us</button>
            </div>

            <div className="absolute flex justify-center transform -translate-y-1/2 left-24 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle btn-secondary">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;