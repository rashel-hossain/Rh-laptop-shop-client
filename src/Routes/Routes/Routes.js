import DashBoardLayout from "../../Layout/DashBoardLayout";
import Main from "../../Layout/Main";
import AllProductsCategories from "../../Pages/AllProductsCategory/AllProductsCategories";
import Blog from "../../Pages/Blog/Blog";
import MyOrder from "../../Pages/Dashboard/MyOrder/MyOrder";
import Home from "../../Pages/Home/Home/Home";
import SingleCategory from "../../Pages/Home/SingleCategory/SingleCategory";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
            }

        ]
    },

    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout> </PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrder></MyOrder>
            },
            // {
            //     path: '/dashboard/allusers',
            //     element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            // },
            // {
            //     path: '/dashboard/adddoctor',
            //     element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
            // },
            // {
            //     path: '/dashboard/managedoctors',
            //     element: <AdminRoute><Managedoctors></Managedoctors></AdminRoute>
            // },
            // {
            //     path: '/dashboard/payment/:id',
            //     element: <Payment></Payment>,
            //     loader: ({ params }) => fetch(`https://doctors-portal-server-kappa-nine.vercel.app/bookings/${params.id}`)
            // }
        ]
    }
])

export default router;