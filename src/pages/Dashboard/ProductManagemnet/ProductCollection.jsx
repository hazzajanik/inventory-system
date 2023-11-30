import { Link } from "react-router-dom";
import useProduct from "../../../hooks/useProduct";

const ProductCollection = () => {

    const [product] = useProduct();
    console.log(product)


    return (
        <div>
            <div>
                <div className="text-center text-3xl font-semibold">
                    Total Product :
                    {
                        product.length
                    }

                </div>
                <div className="join flex items-center justify-center my-4">
                    <input type="text" className="input input-bordered join-item" />
                    <button className="btn btn-primary join-item">Search</button>
                </div>


                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    id
                                </th>
                                <th>image</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Selling Price</th>
                                <th>Discount</th>
                                <th>Check Out</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                product.map((item) => <tr key={item._id}>
                                    <th>
                                        {item._id}
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
                                    <td><span className="badge badge-ghost">{item.productquantity}</span></td>
                                    <td>200 $</td>
                                    <th>
                                        {item.discount} %

                                    </th>
                                    <th>
                                        <Link to={`/dashboard/payment/${item._id}`}>
                                        <button className="btn btn-primary btn-md ml-2">pay</button>
                                        </Link>
                                    </th>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductCollection;