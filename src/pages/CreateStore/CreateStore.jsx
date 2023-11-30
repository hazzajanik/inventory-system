import { toast } from 'react-hot-toast';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useContext } from 'react';
import { AuthContext } from './../../providers/AuthProvider';

const CreateStore = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);

    const hundleCreateShop = (e) =>{
        e.preventDefault();


        const form = event.target;
        const shopname = form.shopname.value;
        const shoplogo = form.shoplogo.value;
        const shopinfo = form.shopinfo.value;
        const shoplocation = form.shoplocation.value;
        // const shopownername = form.shopownername.value;
        // const shopowneremail = form.shopowneremail.value;

        const shopItem = {
            shopname,shoplogo,shopinfo,shoplocation,name:user.displayName, email:user.email
        }
        console.log(shopItem)

        axiosSecure.post('/shops',shopItem)
        .then(res=>{
            console.log(res.data)
            if(res.data.insertedId){
                toast.success('Successfully toasted!')
            }
        })

    }

    return (
        <div>
            <div>
                <div className="flex justify-center">
                    <div className="md:w-1/2">
                        <form onSubmit={hundleCreateShop} className="card-body bg-rose-100">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Shop Name</span>
                                </label>
                                <input type="text" name="shopname" placeholder="Shop Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Shop Logo</span>
                                </label>
                                <input type="text" name="shoplogo" placeholder="Shop Logo" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Shop Info</span>
                                </label>
                                <input type="text" name="shopinfo" placeholder="Shop Info Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Shop Location</span>
                                </label>
                                <input type="text" name="shoplocation" placeholder="Shop Location" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Shop Owner Name</span>
                                </label>
                                <input type="text" defaultValue={user?.displayName} name="shopownername" placeholder="Shop Owner Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Shop Owner Email</span>
                                </label>
                                <input type="text" name="shopowneremail" defaultValue={user?.email} className="input input-bordered" required />
                            </div>
                            
                            <div className="form-control mt-6">
                                <button className="btn bg-cyan-500 rounded-3xl text-white font-semibold hover:bg-rose-500">
                                    Create Shop
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateStore;