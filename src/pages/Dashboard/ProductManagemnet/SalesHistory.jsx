import useProduct from "../../../hooks/useProduct";

const SalesHistory = () => {
    const [product] = useProduct();

    const totalPrice = product.reduce((total,item)=> total + item.sellingPrice,0)
    const totalInvest = Number(product.reduce((total,item)=> total + item.productcost,0))


    const totalProfit = totalPrice - totalInvest;

    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Product Name</th>
                            <th>Selling Date</th>
                            <th>Profit</th>
                            
                           
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
                                            <div className=" w-12 h-12">
                                            {item.productname}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="badge badge-ghost">11/11/2024</span>
                                </td>
                                <td><span className="badge badge-ghost">{totalProfit.toFixed(2)}</span></td>
                                
                                <th>


                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SalesHistory;