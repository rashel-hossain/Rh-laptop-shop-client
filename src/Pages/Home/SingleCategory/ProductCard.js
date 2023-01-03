import { format } from 'date-fns';
import React from 'react';
import { FaUserCheck } from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { MdMarkEmailRead } from 'react-icons/md';
import { FaRegClock } from 'react-icons/fa';
import toast from 'react-hot-toast';

const ProductCard = ({ brand, setProducts }) => {
    const { _id, image, productTitle, sellerName, reSellPrice, orginalPrice, yearsOfUses, location, email, postDate } = brand;


    // isReported True: handleReportedItems
    const handleReportedItems = id => {
        fetch(`https://laptop-shop-server.vercel.app/reportedproducts/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success(`Reported succesfully`);
            })
        console.log(id);
    }

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} className="h-64" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{productTitle}</h2>
                <div className='flex justify-between'>
                    <p className='font-bold text-blue-500 flex items-center'><FaUserCheck className='mr-2' />{sellerName}</p>
                    <button
                        onClick={() => handleReportedItems(_id)}
                        className='bg-blue-400 text-white rounded-full px-2'
                    >Report to admin</button>
                </div>

                <div className='flex'>
                    <p className='text-green-500 font-bold text-2xl'>${reSellPrice}</p>
                    <p className='text-red-500 font-bold line-through'>${orginalPrice}</p>
                    <p className='font-bold'>Used: <span>{yearsOfUses}</span> Year</p>
                </div>

                <div>
                    <p className='flex items-center'><MdMarkEmailRead className='mr-2' /> {email}</p>
                    <div className='flex justify-between'>
                        <p className='flex items-center'><HiLocationMarker className='mr-2' /> {location}</p>
                    </div>
                    {
                        brand?.postDate &&
                        <p className='flex items-center'><FaRegClock className='mr-2' />
                            {
                                format(new Date(brand?.postDate), 'pp PP')
                            }
                        </p>
                    }
                </div>

                <div className="card-actions justify-center ">
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