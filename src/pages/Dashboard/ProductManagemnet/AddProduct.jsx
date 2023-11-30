import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useShop from "../../../hooks/useShop";

const AddProduct = () => {
    const [shopInfo,setShopInfo] = useState({});
    const [shop] = useShop();
    console.log(shop);
    useEffect(()=>{
        shop.map(s=>setShopInfo(s))
    },[])
    console.log(shopInfo)
    

    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);
    const hundleAddProduct = (e) =>{
        e.preventDefault();
        const form = e.target;
        const productname = form.productname.value;
        const productimage = form.productimage.value;
        const productquantity = form.productquantity.value;
        const productlocation = form.productlocation.value;
        const productPrice = form.productcost.value;
        const productcost = Number(productPrice);
        console.log(productcost)
        const profitmargin = form.profitmargin.value;
        const discount = form.discount.value;
        const productdescription = form.productdescription.value;


        // Shop discount 
        const shopId = shopInfo._id;
        const shopEmail = shopInfo.email;
        const shopName = shop.name;
        const a =Number(productcost*7.5/100);
        const b = Number(productcost*profitmargin/100);

        const sellCount = Number(0);
        console.log(a,b)
        const sellingPrice = (Number(productcost) + (a)+ (b));
        console.log( sellingPrice);
        
        const productInfo = {
            email:user?.email,productname,productimage,productquantity,productlocation,productcost,profitmargin,discount,productdescription,shopId,shopEmail,shopName,sellingPrice,sellCount
        }
        console.log(productInfo)
        axiosSecure.post('/products',productInfo)
        .then(res =>{
            console.log(res.data)
            if(res.data.insertedId){
                toast.success('Successfully Added')
            }
        })
        

    }
    return (
        <div>
            <div>
                <div className="flex justify-center">
                    <div className="md:w-1/2">
                        <form onSubmit={hundleAddProduct} className="card-body bg-rose-100">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input type="text" name="productname" placeholder="Product Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Image</span>
                                </label>
                                <input type="text" name="productimage" placeholder="Product Image" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Quantity</span>
                                </label>
                                <input type="text" name="productquantity" placeholder="Product Quantity" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Location</span>
                                </label>
                                <input type="text" name="productlocation" placeholder="Product Location" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Cost</span>
                                </label>
                                <input type="number" name="productcost" placeholder="Product Cost" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Profit Margin</span>
                                </label>
                                <input type="number" name="profitmargin" className="input input-bordered" placeholder="Profit Margin" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Discount</span>
                                </label>
                                <input type="number" name="discount" placeholder="Discount" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Description</span>
                                </label>
                                <input type="text" name="productdescription" placeholder="Product Description" className="input input-bordered" required />
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

export default AddProduct;