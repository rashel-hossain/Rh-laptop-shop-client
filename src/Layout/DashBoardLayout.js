import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';
import Navbar from '../Pages/Shared/Navbar/Navbar';


const DashBoardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);


    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>

                <div className="drawer-side bg-info">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {
                            isAdmin || isSeller ||
                            <li><Link to="/dashboard/myorders">My Orders</Link></li>
                        }

                        {
                            isAdmin &&
                            <>
                                <li><Link to="/dashboard/allsalers">All Seller</Link></li>
                                <li><Link to="/dashboard/allbuyers">All Buyers</Link></li>
                            </>
                        }

                        {
                            isSeller &&
                            <>
                                <li><Link to="/dashboard/myproducts">My Products</Link></li>
                                <li><Link to="/dashboard/addproducts">Add Products</Link></li>
                            </>
                        }

                        {/* {
                        isBuyer &&
                        <>
                            <li><Link to="/dashboard/myorderzz">My Order Buyer</Link></li>
                        </>
                    } */}
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default DashBoardLayout;