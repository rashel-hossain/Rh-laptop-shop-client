import React from 'react';

const AdvertisedProduct = ({ advertise }) => {
    const { image, productTitle, reSellPrice, orginalPrice, productDescription } = advertise;

    console.log(advertise, 'advertised')
    return (
        <div>
            <div className="card bg-base-100 shadow-xl image-full">
                <figure><img src={image} alt="" /></figure>
                <div className="card-body">
                    <h1 className='text-3xl font-bold'>{productTitle}</h1>
                    <p>{productDescription}</p>
                    <p className='text-md font-bold'><span className='text-green-500 text-3xl font-bold'>${reSellPrice}</span> <span className='text-white text-lg line-through'>${orginalPrice}</span></p>
                    <div className="card-actions justify-end">
                        <button type="button" class="btn bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
                            Pre-Order Now
                        </button>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default AdvertisedProduct;