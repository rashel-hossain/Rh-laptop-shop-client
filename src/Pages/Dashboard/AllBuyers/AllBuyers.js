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


            {/* ********* Daisy Ui Raw Table template ********** */}

            {/* <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://i.pinimg.com/originals/e2/7c/87/e27c8735da98ec6ccdcf12e258b26475.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                            </td>

                            <th>
                                <button className="btn btn-error btn-sm">Delete</button>
                            </th>
                        </tr>
                    </tbody>

                </table>
            </div> */}
        </div>
    );
};

export default AllBuyers;