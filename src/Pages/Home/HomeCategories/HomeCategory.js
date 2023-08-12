import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

const HomeCategory = ({ category }) => {
    const { _id, title, brandName, description, img } = category;

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={img} alt="Loading..." /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold">{title}</h2>
                <p>{description?.slice(0, 99) + '...Read More'}</p>
                <div className="card-actions justify-center ">
                    <Link to={`/category/${_id}`} className='w-full'>
                        <button
                            className="btn bg-gradient-to-r from-primary to-info hover:to-blue-300 text-white w-full">
                            Buy Now<FontAwesomeIcon icon={faArrowRightLong} className='font-semibold text-lg px-2' />{brandName}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeCategory;