/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";
import useAxiosSecure from './../../hooks/useAxiosSecure';



const Register = () => {
    const axiosSecure = useAxiosSecure();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(res => {
                if (res) {
                    const email = data.email
                    console.log(email)
                    // user collection to db
                    axiosSecure.post("/users", { email: data?.email, name: data?.displayName })
                        .then((res) => {
                            console.log(res)
                            toast.success("user added!")
                        })
                        .catch(err => {
                            console.log(err)
                        })
                }
                const loggedUser = res.user;
                console.log(loggedUser)
                updateUserProfile(data.displayName, data.photourl)
                    .then((res) => {
                        console.log('user profile info updated')

                        toast.success('Successfully Registered')
                        navigate('/');
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            })
    }

    return (
        <div>
            <div className=" pb-20">
                <div className="py-10 flex items-center justify-center gap-3">
                    <h1 className="text-4xl font-bold text-center ">Register</h1>

                </div>
                <div className="card flex-shrink-0 mx-auto w-full max-w-sm bg-rose-200">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body" >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("displayName")} name="displayName" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="photo" {...register("photourl")} name="photourl" placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email")} name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password")} name="password" placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-rose-500 rounded-3xl text-white font-semibold hover:bg-rose-900">Register</button>
                        </div>
                    </form>
                </div>
                <p className="text-center">Already have an account? <span><Link to='/login' className="text-rose-500 font-bold" >Login</Link></span> </p>
            </div>
        </div>
    );
};

export default Register;