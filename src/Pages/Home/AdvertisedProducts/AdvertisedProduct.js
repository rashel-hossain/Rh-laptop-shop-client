import React from 'react';

const AdvertisedProduct = ({ advertise }) => {
    const { image, productTitle, reSellPrice, orginalPrice } = advertise;

    console.log(advertise, 'advertised')
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={image} alt="" /></figure>
                <div className="card-body">
                    <h1 className='text-3xl font-bold'>{productTitle}</h1>
                    <p>When Jayden first arrives at the Galactic Academy...</p>
                    <p className='text-md font-bold'><span>${reSellPrice}</span> <span className='text-red-500 line-through'>${orginalPrice}</span></p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default AdvertisedProduct;