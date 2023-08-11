import DashBoardLayout from "../../Layout/DashBoardLayout";
import Main from "../../Layout/Main";
import AddProduct from "../../Pages/AllProductsCategory/AddProduct/AddProduct";
import AllProductsCategories from "../../Pages/AllProductsCategory/AllProductsCategories";
import Blog from "../../Pages/Blog/Blog";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSalers from "../../Pages/Dashboard/AllSalers/AllSalers";
import MyOrder from "../../Pages/Dashboard/MyOrder/MyOrder";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import ReportedItems from "../../Pages/Dashboard/ReportedItems.js/ReportedItems";
import Home from "../../Pages/Home/Home/Home";
import SingleCategory from "../../Pages/Home/SingleCategory/SingleCategory";
import Login from "../../Pages/Login/Login";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <DisplayError />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/allProductsCategories',
                element: <AllProductsCategories />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`https://laptop-shop-server.vercel.app/catagory/${params.id}`),
                element: <SingleCategory />
            },
            // {
            //     path: '*',
            //     element: <ErrorPage></ErrorPage>
            // }
        ]
    },

    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayout /></PrivateRoute>,
        errorElement: <DisplayError />,
        children: [
            {
                path: '/dashboard/myorders',
                element: <MyOrder />
            },
            {
                path: '/dashboard/allsalers',
                element: <AdminRoute><AllSalers /></AdminRoute>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute><AllBuyers /></AdminRoute>
            },
            {
                path: '/dashboard/reporteditems',
                element: <AdminRoute><ReportedItems /></AdminRoute>
            },
            {
                path: '/dashboard/addproducts',
                element: <AddProduct />,
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts />
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment />,
                loader: ({ params }) => fetch(`https://laptop-shop-server.vercel.app/bookings/${params.id}`)
            }
            // {
            //     path: '*',
            //     element: <ErrorPage></ErrorPage>
            // 
        ]
    }
])

export default router;