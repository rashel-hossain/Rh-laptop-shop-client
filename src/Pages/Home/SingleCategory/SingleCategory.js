import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../../ProductBookings/BookingModal/BookingModal';
import ProductCard from './ProductCard';

const SingleCategory = () => {
    const brands = useLoaderData();
    console.log(brands);
    const [products, setProducts] = useState(null);

    return (
        <div className="mt-24">
            <div className='text-center mb-24'>
                <h3 className='text-3xl font-bold text-black-600 uppercase'>Meet our Laptop Categories</h3>
                <h2 className='text-2xl font-semibold mb-15'>Best Laptop of 2022</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    brands.map(brand => <ProductCard
                        key={brand._id}
                        brand={brand}
                        setProducts={setProducts}
                    ></ProductCard>
                    )
                }
            </div>
            {
                products &&
                <BookingModal
                    products={products}
                    setProducts={setProducts}
                ></BookingModal>
            }
        </div>
    );
};

export default SingleCategory;