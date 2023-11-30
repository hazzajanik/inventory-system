import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Error = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className="mx-auto my-20 ">
                <h1 className="text-center text-cyan-500 text-6xl font-bold">404</h1>
                <h1 className="text-5xl text-rose-500 text-center font-bold">Not found</h1>
                {
                    user ?
                        <Link to='/'>
                            <div className="flex items-center justify-center my-4">
                                <button className="btn bg-cyan-600 rounded-3xl">Home</button>
                            </div>
                        </Link> : <Link to='/login'>
                            <div className="flex items-center justify-center my-4">
                                <button className="btn bg-cyan-600 rounded-3xl">Please Login</button>
                            </div>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Error;