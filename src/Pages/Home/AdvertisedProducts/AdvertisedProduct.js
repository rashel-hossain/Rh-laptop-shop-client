import React from 'react';

const AdvertisedProduct = ({ advertise }) => {
    const { image, productTitle, reSellPrice, orginalPrice } = advertise;

    console.log(advertise, 'advertised')
    return (
        <div>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h1>{productTitle}</h1>
                <p>Desscription</p>
                <p><span>{reSellPrice}</span> <span>{orginalPrice}</span></p>
            </div>

        </div>
    );
};

export default AdvertisedProduct;