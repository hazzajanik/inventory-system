/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import toast from "react-hot-toast";
import { MdOutlineInventory } from "react-icons/md";
import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const { admin, manager } = useAdmin();
    console.log(admin)



    const hundleSignOut = () => {
        logOut()
            .then(result => {
                toast.success('You are logged out')
            })
            .catch(error => {

            })
    }
    const navLinks = <>
        <li><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " font-bold" : ""
            }
        >
            Home
        </NavLink></li>

        <li><NavLink
            to="/createstore"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold" : ""
            }
        >
            Create-Store
        </NavLink>


        </li>

        {
            admin === undefined ? "" :
                <li>
                    <NavLink
                        to="dashboard"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold" : ""
                        }
                    >
                        Dashboard
                    </NavLink>

                </li>
        }
        {
            manager === undefined ? "" :
                <li>
                    <NavLink
                        to="dashboard"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold" : ""
                        }
                    >
                        Dashboard
                    </NavLink>

                </li>
        }

       
        <li>
            <a href="https://www.youtube.com/watch?v=qfkRt7z5QV4">Watch Demo</a>
        </li>

        <li><NavLink
            to="/register"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold" : ""
            }
        >
            Register
        </NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-pink-50 h-full container mx-auto px-10">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box dark:bg-black dark:text-white w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="flex items-center gap-2">
                        {/* <img width="50" height="50" src="https://img.icons8.com/bubbles/50/books.png" alt="books" /> */}
                        <p className="text-3xl text-red-300"><MdOutlineInventory /></p>
                        <a href="" className="text-xl font-semibold"><em><span className="text-cyan-400">Inventory</span> <span className="text-rose-500">System</span></em></a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>


                <div className="navbar-end">
                    {
                        user ?
                            <div className="flex items-center">
                                <div>
                                    <p>{user?.displayName}</p>
                                    <p>{user?.email}</p>
                                </div>
                                <button onClick={hundleSignOut} className="btn bg-rose-500 rounded-3xl text-white font-semibold hover:bg-rose-600">Log Out</button>
                            </div>
                            :
                            <div>
                                <Link to='/login'>
                                    <button className="btn bg-rose-500 rounded-3xl text-white font-semibold hover:bg-rose-600">Login</button>
                                </Link>
                            </div>
                    }
                </div>

            </div>
        </div>
    );
};

export default Navbar;