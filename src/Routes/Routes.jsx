import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import CreateStore from "../pages/CreateStore/CreateStore";
import Dashboard from "../Layout/Dashboard";
import AddProduct from "../pages/Dashboard/ProductManagemnet/AddProduct";
import AllProduct from "../pages/Dashboard/ProductManagemnet/AllProduct";
import UpdatedProduct from "../pages/Dashboard/ProductManagemnet/UpdatedProduct";
import ProductCollection from "../pages/Dashboard/ProductManagemnet/ProductCollection";
import Payment from "../pages/Dashboard/Payment/Payment";
import Error from "../components/Error/Error";
import ProductManage from "../pages/Dashboard/ProductManage/ProductManage";
import ManageShop from "../pages/Dashboard/AdminDashboard/ManageShop";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/createstore',
            element: <CreateStore></CreateStore>
        },
        

      ]
    },
    {
      path: "/dashboard",
      element: <Dashboard></Dashboard>,
      children:[
        {
          path: 'dashboard/addproduct',
          element: <AddProduct></AddProduct>
        },
        {
          path: 'dashboard/allproduct',
          element: <AllProduct></AllProduct>
        },
        {
          path: '/dashboard/updatedproduct/:id',
          loader: ({params})=>fetch(`https://server-eta-beryl.vercel.app/products/${params.id}`),
          element: <UpdatedProduct></UpdatedProduct>
        },
        {
          path: 'dashboard/productcollection',
          element: <ProductCollection></ProductCollection>
        },
        {
          path: '/dashboard/payment/:id',
          loader:({params}) => fetch(`https://server-eta-beryl.vercel.app/products/${params.id}`),
          element: <Payment></Payment>
        },
        {
          path: 'dashboard/manageproduct',
          element: <ProductManage></ProductManage>
        },
        {
          path : 'dashboard/manageShop',
          element: <ManageShop></ManageShop>
        }
        
      ]
    },
  ]);




