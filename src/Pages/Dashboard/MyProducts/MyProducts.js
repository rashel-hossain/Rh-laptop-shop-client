import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import toast from 'react-hot-toast'

const MyProducts = () => {
    const { user } = useContext(AuthContext);

    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://laptop-shop-server.vercel.app/myproducts?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });

    // console.log('55555', users)

    // isAdvertiseds
    const handleAdvertiseds = id => {
        fetch(`https://laptop-shop-server.vercel.app/advertiseds/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('advertiseds successfully');
                refetch();
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleDeleteProduct = id => {
        fetch(`https://laptop-shop-server.vercel.app/myproduct/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
                toast.success('Delete successfully')
            })
    }

    return (
        <div>
            <h2 className='text-3xl'>My Products</h2>
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
                            users.map((user, i) =>
                                <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={user.image} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{user.productTitle}</td>
                                    <td>{user.reSellPrice}</td>

                                    <td>
                                        {
                                            user?.isAdvertiseds ?
                                                < button className='btn btn-primary btn-sm ml-3'>Advertised</button>
                                                :
                                                <button onClick={() => handleAdvertiseds(user._id)}
                                                    className='btn btn-success btn-sm ml-3'>Advertise</button>
                                        }
                                        <button
                                            onClick={() => handleDeleteProduct(user._id)}
                                            className='btn btn-error btn-sm ml-3'>Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyProducts;