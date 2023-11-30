/* eslint-disable no-unused-vars */

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";





const Login = () => {

    const {signIn,signInWithGoogle} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    console.log("location in the login page", location)


// custom login Method--->

    const hundleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        
        signIn(email,password)
        .then(result =>{
            
            toast.success('Successfully log in!')


            // navigate after login
            navigate(location?.state ? location.state : '/' );
        })
        .catch(error =>{
            
            toast.error("Password And Email Doesn't Matched Or You can register!")
        })
    };

    // Google login  Method-->

    const hundleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result =>{
            
            toast.success('Successfully log in!')
            
            // navigate after login
            navigate(location?.state ? location.state : '/' );
        })
        .catch(error =>{
            console.log(error)
        })
    };


    return (
        <div className=" pb-20">
            <div className="py-10 flex items-center justify-center gap-3">
            <h1 className="text-4xl font-bold text-center ">Login</h1>
            </div>
            <div className="card flex-shrink-0 mx-auto w-full max-w-sm bg-rose-200">
                <form onSubmit={hundleLogin}  className="card-body" >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-rose-500 rounded-3xl text-white font-semibold hover:bg-rose-900">Login</button>
                    </div>
                </form>
            </div>
                <p className="text-center">Do not have an account <span><Link to='/register'className="text-black font-bold" >Register</Link></span> </p>
                <div className="flex justify-center mt-5">
                <button onClick={hundleGoogleSignIn} className="btn bg-rose-500 w-72   rounded-3xl text-white font-semibold hover:bg-rose-900">Login With Google</button>
                </div>
                
        </div>
    );
};

export default Login;