import useData from "../../../hooks/useData";



const ManageShop = () => {
    
    const [data] = useData();
    console.log(data)
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                No
                            </th>
                            <th>Logo</th>
                            <th>Name</th>
                            <th>Shop Description</th>
                            <th>Limit</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.shoplogo} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="badge badge-ghost">{item.shopname}</span>
                                </td>
                                <td><span className="badge badge-ghost">{item.shopinfo}</span></td>
                                <td>3</td>
                                <th>
                                    <button className="btn btn-primary">Send</button>

                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageShop;