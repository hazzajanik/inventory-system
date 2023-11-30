import { useLoaderData, useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const UpdatedProduct = () => {
    const updatedIdData = useLoaderData();
    console.log(updatedIdData)
    const {productname,discount,productdescription,productcost,productquantity,productimage,profitmargin,productlocation} = updatedIdData;

    const axiosSecure = useAxiosSecure();
    const {id} = useParams();
    console.log(id)

    const hundleUpdateProduct = (e) =>{
        e.preventDefault();
        const form = e.target;
        const productname = form.productname.value;
        const productimage = form.productimage.value;
        const productquantity = form.productquantity.value;
        const productlocation = form.productlocation.value;
        const productcost = form.productcost.value;
        const profitmargin = form.profitmargin.value;
        const discount = form.discount.value;
        const productdescription = form.productdescription.value;
        const productInfo = {
            productname,productimage,productquantity,productlocation,productcost,profitmargin,discount,productdescription
        }
        console.log(productInfo)

        axiosSecure.put(`/products/${id}`,productInfo)
        .then(res =>{
            if(res.data.modifiedCount>0){
                toast.success('Successfully toasted!')
            }
        })
        .catch(err=>{
            console.log(err)
        })


    }

    return (
        <div>
            <div>
                <div className="flex justify-center">
                    <div className="md:w-1/2">
                        <form onSubmit={hundleUpdateProduct} className="card-body bg-rose-100">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input type="text" defaultValue={productname} name="productname" placeholder="Product Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Image</span>
                                </label>
                                <input type="text" defaultValue={productimage} name="productimage" placeholder="Product Image" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Quantity</span>
                                </label>
                                <input type="text" name="productquantity" defaultValue={productquantity} placeholder="Product Quantity" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Location</span>
                                </label>
                                <input type="text" defaultValue={productlocation} name="productlocation" placeholder="Product Location" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Buying Price</span>
                                </label>
                                <input type="text" defaultValue={productcost} name="productcost" placeholder="Product Cost" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Profit Margin</span>
                                </label>
                                <input type="text" defaultValue={profitmargin} name="profitmargin" className="input input-bordered" placeholder="Profit Margin" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Discount</span>
                                </label>
                                <input type="text" defaultValue={discount} name="discount" placeholder="Discount" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Description</span>
                                </label>
                                <input type="text" defaultValue={productdescription} name="productdescription" placeholder="Product Description" className="input input-bordered" required />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-cyan-500 rounded-3xl text-white font-semibold hover:bg-rose-500">
                                    Add Product
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdatedProduct;