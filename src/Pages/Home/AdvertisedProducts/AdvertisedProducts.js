import React from 'react';
import Loading from '../../Shared/Loading/Loading';
import AdvertisedProduct from './AdvertisedProduct';
import { useQuery } from '@tanstack/react-query';

const AdvertisedProducts = () => {

    const { data: advertiseds = [], isLoading } = useQuery({
        queryKey: ['advertiseds'],
        queryFn: async () => {
            const res = await fetch(`https://laptop-shop-server.vercel.app/advertiseds`);
            const data = await res.json();
            return data;
        }
    });
    // console.log(advertiseds, 'advertised9999')

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='px-4 md:px-0'>
            {
                advertiseds.length > 0 &&
                <div className="mt-24">
                    <div className='text-center mb-16'>
                        <h3 className='text-3xl font-bold text-black-600 uppercase'>Advertised Products</h3>
                        <h2 className='text-2xl font-semibold mb-15'>New Re-Sell Laptop of 2022</h2>
                    </div>
                    <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            advertiseds.map(advertise => <AdvertisedProduct
                                key={advertise._id}
                                advertise={advertise}

                            ></AdvertisedProduct>
                            )
                        }
                    </div>


                </div>
            }
        </div>
    );
};

export default AdvertisedProducts;