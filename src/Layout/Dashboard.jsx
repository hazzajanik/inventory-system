import { MdPlaylistAdd } from "react-icons/md";
import { FaBorderAll } from "react-icons/fa6";
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Toaster } from "react-hot-toast";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {

const admin = useAdmin();

    return (
        <div className='flex'>
            {/* <h2 className='text-4xl font-semibold text-center'>Product Management</h2> */}

            {/* DashBoard Side bar */}
            <div className='w-64 min-h-full bg-rose-200'>
                <ul className="menu p-4">
                    {
                        admin ?
                            <div>
                                <li>
                                    <NavLink to="dashboard/manageShop">
                                        <MdPlaylistAdd />
                                        Manage Shop</NavLink>
                                </li>
                                <li>

                                    <NavLink to="dashboard/addproduct">
                                        <MdPlaylistAdd />
                                        Add Product</NavLink>
                                </li>
                            </div>
                            :
                            <div>
                                <li>



                                    <NavLink to="dashboard/addproduct">
                                        <MdPlaylistAdd />
                                        Add Product</NavLink>
                                </li>
                                <li>

                                    <NavLink to="dashboard/allproduct">
                                        <FaBorderAll />
                                        All Product</NavLink>
                                </li>
                                <li>

                                    <NavLink to="dashboard/productcollection">
                                        <FaBorderAll />
                                        Product Collection</NavLink>
                                </li>
                            </div>

                    }
                    <hr />
                    <li className="mt-7">

                        <NavLink to="/">
                            <FaBorderAll />
                            Home</NavLink>
                    </li>
                </ul>
            </div>
            {/* DashBoard Content */}
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
            <div><Toaster /></div>
        </div>
    );
};

export default Dashboard;