import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCheck } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { MdMarkEmailRead } from 'react-icons/md';

const ProductCard = ({ brand, setProducts }) => {
    const { _id, image, productTitle, sellerName, reSellPrice, orginalPrice, yearsOfUses, location, email } = brand;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{productTitle}</h2>
                <p className='font-bold text-blue-500'><FaUserCheck /> {sellerName}</p>

                <div className='flex'>
                    <p className='text-green-500 font-bold text-2xl'>${reSellPrice}</p>
                    <p className='text-red-500 font-bold'>${orginalPrice}</p>
                    <p className='font-bold'>Used: <span>{yearsOfUses}</span> Year</p>
                </div>

                <div className=''>
                    <p><MdMarkEmailRead /> {email}</p>
                    <p><HiLocationMarker /> {location}</p>
                </div>

                <div className="card-actions justify-center ">
                    {/* <Link to={`/bookNow/${_id}`} className='w-full'><button className="btn btn-wide justify-center items-center w-full">Book Now</button></Link> */}

                    <label
                        htmlFor="booking-modal"
                        className="btn btn-primary text-white w-full"
                        onClick={() => setProducts(brand)}
                    >Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;