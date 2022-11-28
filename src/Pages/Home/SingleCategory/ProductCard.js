import React from 'react';
import { FaUserCheck } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { MdMarkEmailRead } from 'react-icons/md';

const ProductCard = ({ brand, setProducts }) => {
    const { image, productTitle, sellerName, reSellPrice, orginalPrice, yearsOfUses, location, email } = brand;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} className="h-64" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{productTitle}</h2>
                <p className='font-bold text-blue-500 flex items-center'><FaUserCheck className='mr-2' />{sellerName}</p>

                <div className='flex'>
                    <p className='text-green-500 font-bold text-2xl'>${reSellPrice}</p>
                    <p className='text-red-500 font-bold line-through'>${orginalPrice}</p>
                    <p className='font-bold'>Used: <span>{yearsOfUses}</span> Year</p>
                </div>

                <div  >
                    <p className='flex items-center'><MdMarkEmailRead className='mr-2' /> {email}</p>
                    <p className='flex items-center'><HiLocationMarker className='mr-2' /> {location}</p>
                </div>

                <div className="card-actions justify-center ">
                    {/* <Link to={`/bookNow/${_id}`} className='w-full'><button className="btn btn-wide justify-center items-center w-full">Book Now</button></Link> */}

                    <label
                        htmlFor="booking-modal"
                        className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white w-full"
                        onClick={() => setProducts(brand)}
                    >Book Now</label>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;