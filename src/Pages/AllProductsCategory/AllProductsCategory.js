import React from 'react';
import { Link } from 'react-router-dom';


const AllProductsCategory = ({ allcategory }) => {
    const { _id, image, brandName, sellerName, reSellPrice, orginalPrice, yearsOfUses, location, email } = allcategory;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{brandName}</h2>
                {/* <p>{description.slice(0, 99) + '...Read More'}</p> */}
                <p className='text-bold text-red-400'>{sellerName}</p>
                <div className='flext justify-between'>
                    <p className='text-green-500 font-bold'>${reSellPrice}</p>
                    <p className='text-red-500 font-bold'>${orginalPrice}</p>
                </div>
                <p>Uses: {yearsOfUses} Year</p>
                <p>Location: {location}</p>
                <p>Email: {email}</p>
                <div className="card-actions justify-center ">
                    <Link to={`/singleCategory/${_id}`} className='w-full'><button className="btn btn-wide justify-center items-center w-full">Book Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default AllProductsCategory;