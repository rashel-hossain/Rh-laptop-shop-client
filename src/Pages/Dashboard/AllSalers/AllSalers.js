import React from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const AllSalers = () => {
    const { data: users, isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users?role=seller`);
            const data = await res.json();
            return data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }

    // handleDeleteSeller
    const handleDeleteSeller = id => {
        fetch(`http://localhost:5000/user/${id}`, {
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

    // handleVerify seller
    const handleVerify = id => {
        fetch(`http://localhost:5000/sellerVerified/${id}`, {
            method: 'PUT',
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch();
                toast.success(`Verified succesfull`);
            })
    }

    return (
        <div>
            <div>
                <h2 className='text-3xl'>All Sellers</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Index</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, i) =>
                                    <tr key={user._id}>
                                        <th>{i + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>

                                        <td>{user?.role !== 'admin' &&
                                            <>
                                                {
                                                    user?.isVerified ? <button className='btn btn-sm btn-primary'>Verified</button> :
                                                        <button
                                                            onClick={() => handleVerify(user._id)}
                                                            className='btn btn-sm btn-primary'>Verify</button>
                                                }
                                                <button
                                                    onClick={() => handleDeleteSeller(user._id)}
                                                    className='btn btn-error btn-sm ml-3'>Delete</button>
                                            </>
                                        }
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default AllSalers;