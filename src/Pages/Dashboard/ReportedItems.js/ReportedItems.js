import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const ReportedItems = () => {
    const { data: products, isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`https://laptop-shop-server.vercel.app/reportedproducts`);
            const data = await res.json();
            return data;
        }
    });

    const handleDeleteProduct = id => {
        fetch(`https://laptop-shop-server.vercel.app/reportedproducts/${id}`, {
            method: 'DELETE',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
                toast.success(`Deleted succesfully`);
            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-3xl'>Reported Items</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, i) =>
                                <tr key={product._id}>
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={product.image} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{product.productTitle}</td>
                                    <td>{product.reSellPrice}</td>

                                    <td>{product?.role !== 'admin' &&
                                        <button
                                            onClick={() => handleDeleteProduct(product._id)}
                                            className='btn btn-error btn-sm ml-3'>Delete</button>
                                    }
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportedItems;