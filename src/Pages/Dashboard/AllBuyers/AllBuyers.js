import React from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const AllBuyers = () => {
    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://laptop-shop-server.vercel.app/users?role=buyer`);
            const data = await res.json();
            return data;
        }
    });

    // handleDeleteBuyer
    const handleDeleteBuyer = id => {
        fetch(`https://laptop-shop-server.vercel.app/user/${id}`, {
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
            <div>
                <h2 className='text-3xl'>All Buyers List</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Index</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, i) =>
                                    <tr key={user._id}>
                                        <th>{i + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        {/* <td><button className='btn btn-sm btn-primary'>Verify</button></td> */}
                                        <td>{user?.role !== 'admin' && <button onClick={() => handleDeleteBuyer(user._id)} className='btn btn-error btn-sm'>Delete</button>}</td>
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

export default AllBuyers;