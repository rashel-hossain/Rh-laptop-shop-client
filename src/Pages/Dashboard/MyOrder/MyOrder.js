import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrder = () => {
    const { user } = useContext(AuthContext);

    // const url = `https://laptop-shop-server.vercel.app/bookings?email=${user?.email}`;

    // Display User specific Appointments using Data Table
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://laptop-shop-server.vercel.app/bookings?email=${user?.email}`);
            const data = await res.json();
            return data;
        }

    });
    console.log(bookings);
    return (
        <div className='mx-2'>
            <h2 className="text-2xl mb-2">My Order List</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Photo</th>
                            <th>Model Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings?.length
                            && bookings.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={bookings.productPhoto} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{booking.productTitle}</td>
                                <td>{booking.price}</td>
                                <td>
                                    {
                                        booking.price && !booking.paid &&
                                        <Link to={`/dashboard/payment/${booking._id}`} className="flex justify-center items-center">
                                            <button
                                                className='btn btn-primary btn-sm'
                                            >Pay</button>
                                        </Link>
                                    }
                                    {
                                        booking.price && booking.paid && <span className='text-green-500 font-bold btn-sm'>Paid</span>
                                    }
                                </td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default MyOrder;