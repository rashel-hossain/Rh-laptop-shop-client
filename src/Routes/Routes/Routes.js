import DashBoardLayout from "../../Layout/DashBoardLayout";
import Main from "../../Layout/Main";
import AddProduct from "../../Pages/AllProductsCategory/AddProduct/AddProduct";
import AllProductsCategories from "../../Pages/AllProductsCategory/AllProductsCategories";
import Blog from "../../Pages/Blog/Blog";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSalers from "../../Pages/Dashboard/AllSalers/AllSalers";
import MyOrder from "../../Pages/Dashboard/MyOrder/MyOrder";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import Home from "../../Pages/Home/Home/Home";
import SingleCategory from "../../Pages/Home/SingleCategory/SingleCategory";
import Login from "../../Pages/Login/Login";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
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
            },
            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }

        ]
    },

    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
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
                path: '/dashboard/addproducts',
                element: <AddProduct></AddProduct>,
            },

            {
                path: '*',
                element: <ErrorPage></ErrorPage>
            }

        ]
    }
])

export default router;