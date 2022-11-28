import React from 'react';
import { useQuery } from '@tanstack/react-query';
// import toast from 'react-hot-toast';

const AllSalers = () => {
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users?role=${users?.role}`);
            // const res = await fetch('http://localhost:5000/users'); // Good status
            const data = await res.json();
            return data;
        }
    });
    console.log('ki somossha??', users)

    // handleDeleteSeller
    const handleDeleteSeller = () => {

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
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, i) => <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    {/* <td><button className='btn btn-sm btn-primary'>Verify</button></td> */}
                                    <td>{user?.role !== 'admin' && <button
                                        onClick={() => handleDeleteSeller(user._id)}
                                        className='btn btn-error btn-sm'>Delete</button>}
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default AllSalers;