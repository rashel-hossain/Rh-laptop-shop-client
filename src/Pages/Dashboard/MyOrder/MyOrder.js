import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrder = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    // Display User specific Appointments using Data Table
    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }

    });
    console.log(bookings);
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Model Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings?.length && bookings.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td>{booking.productTitle}</td>
                                <td>{booking.price}</td>
                                {
                                    booking.price && !booking.paid &&
                                    <Link to={`/dashboard/payment/${booking._id}`}>
                                        <button
                                            className='btn btn-primary btn-sm'
                                        >Pay</button>
                                    </Link>
                                }
                                {
                                    booking.price && booking.paid && <span className='text-green-500 font-bold btn-sm'>Paid</span>
                                }
                            </tr>)
                        }
                        {/* <tr>

                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="font-bold">Hart Hagerty</div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                            </td>

                            <th>
                                <Link to={'/dashboard/payment'}>
                                    <button className="btn btn-primary btn-sm mr-2">
                                        Pay</button>
                                </Link>

                                <button className="btn btn-error btn-sm">Cancel</button>
                            </th>
                        </tr> */}
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyOrder;