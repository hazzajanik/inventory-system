
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useProduct from "../../../hooks/useProduct";
import { Link } from "react-router-dom";


const AllProduct = () => {

    const [product, refetch] = useProduct();
    const axiosSecure = useAxiosSecure();
    console.log(product)

    const hundleDelete = id => {

        axiosSecure.delete(`/products/${id}`)
            .then(res => {
                toast.success('Successfully toasted!')
                console.log(res.data)
                refetch();
            })
        // Swal.fire({
        //     title: "Are you sure?",
        //     text: "You won't be able to revert this!",
        //     icon: "warning",
        //     showCancelButton: true,
        //     confirmButtonColor: "#3085d6",
        //     cancelButtonColor: "#d33",
        //     confirmButtonText: "Yes, delete it!"
        //   }).then((result) => {
        //     if (result.isConfirmed) {
        //     //   Swal.fire({
        //     //     title: "Deleted!",
        //     //     text: "Your file has been deleted.",
        //     //     icon: "success"
        //     //   });

        //     // axiosSecure.delete(`/products/${id}`)
        //     // .then(res =>{
        //     //     console.log(res.data)
        //     // })
        //     }

        //   });
    }

    return (
        <div>
            <div className="text-center text-3xl font-semibold">
                Total Product -
                {
                    product.length
                }
            </div>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>image</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Sales Count</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.productimage} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="badge badge-ghost">{item.productname}</span>
                                </td>
                                <td>
                                    <span className="badge badge-ghost">{item?.sellingPrice}</span>
                                    </td>
                                <td>200</td>
                                <th>
                                    <button onClick={() => hundleDelete(item._id)} className="btn btn-primary btn-xs">Delete</button>
                                    <Link to={`/dashboard/updatedproduct/${item._id}`}>
                                        <button className="btn btn-primary btn-xs ml-2">Update</button>
                                    </Link>

                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllProduct;