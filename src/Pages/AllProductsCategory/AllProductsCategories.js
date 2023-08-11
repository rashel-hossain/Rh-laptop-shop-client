import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AllProductsCategory from './AllProductsCategory';

const AllProductsCategories = () => {
    // using React query / tanstackQuery load data from server api basic
    const { data: homeCategories = [] } = useQuery({
        queryKey: ['homeCategories'],
        queryFn: async () => {
            const res = await fetch('https://laptop-shop-server.vercel.app/productsCategory');
            const data = await res.json();
            return data;
        }
    });
    return (
        <div>
            <div className='text-center mb-24 mt-12'>
                <h3 className='text-3xl font-bold text-black-600 uppercase'>Available Laptop Categories: {homeCategories.length}</h3>
                <h2 className='text-2xl font-semibold mb-15'>Best Laptop of 2022</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    homeCategories.map(allcategory => <AllProductsCategory
                        key={allcategory}
                        allcategory={allcategory}
                    ></AllProductsCategory>
                    )}
            </div>
        </div>
    );
};

export default AllProductsCategories;