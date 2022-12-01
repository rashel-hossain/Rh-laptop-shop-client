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
import AdvertisedProduct from "../../Pages/Home/AdvertisedProducts/AdvertisedProduct";
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
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allProductsCategories',
                element: <AllProductsCategories></AllProductsCategories>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/catagory/${params.id}`),
                element: <SingleCategory></SingleCategory>
            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/catagory/${params.id}`),
                element: <AdvertisedProduct></AdvertisedProduct>
            },
            // {
            //     path: '*',
            //     element: <ErrorPage></ErrorPage>
            // }

        ]
    },

    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard/myorders',
                element: <MyOrder></MyOrder>
            },
            {
                path: '/dashboard/allsalers',
                element: <AdminRoute><AllSalers></AllSalers></AdminRoute>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/reporteditems',
                element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
            },
            {
                path: '/dashboard/addproducts',
                element: <AddProduct></AddProduct>,
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            }

            // {
            //     path: '*',
            //     element: <ErrorPage></ErrorPage>
            // }

        ]
    }
])

export default router;