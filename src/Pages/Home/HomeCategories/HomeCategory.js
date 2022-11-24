import React from 'react';
import { Link } from 'react-router-dom';

const HomeCategory = ({ category }) => {
    const { title, description, img } = category;


    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description.slice(0, 99) + '...Read More'}</p>
                <div className="card-actions justify-center ">
                    <Link className='w-full'><button className="btn btn-wide justify-center items-center w-full">Explore Laptop</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HomeCategory;