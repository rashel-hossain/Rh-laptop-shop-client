import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ brand }) => {
    const { _id, image, productTitle, sellerName, reSellPrice, orginalPrice, yearsOfUses, location, email } = brand;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{productTitle}</h2>
                <p>Seller Name: {sellerName}</p>
                <p>Re-selle Price: ${reSellPrice}</p>
                <p>Orginal Price: ${orginalPrice}</p>
                <p>Uses: {yearsOfUses}Year</p>
                <p>Loacation: {location}</p>
                <p>Email: {email}</p>
                <div className="card-actions justify-center ">
                    <Link to={`/bookNow/${_id}`} className='w-full'><button className="btn btn-wide justify-center items-center w-full">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;