import React from 'react';
import { Link } from 'react-router-dom';

const MyOrder = () => {
    return (
        <div>
            <div className="overflow-x-auto w-full">
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
                        </tr>
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyOrder;