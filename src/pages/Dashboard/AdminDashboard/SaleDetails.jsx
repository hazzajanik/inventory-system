import useAllData from "../../../hooks/useAllData";

const SaleDetails = () => {
    const [alldata] = useAllData();
    console.log(alldata)
    const totalPrice = alldata.reduce((total,item)=> total + item.sellingPrice,0)
    const totalInvest = Number(alldata.reduce((total,item)=> total + item.productcost,0))


    const totalProfit = totalPrice - totalInvest;


    return (
        <div>
            <div className="grid md:grid-cols-3">
                <div className="card  bg-red-200">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Total sale : {totalPrice.toFixed(2)} </h2>
                    </div>
                </div>
                <div className="card  bg-red-200">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Total Invest : {totalInvest.toFixed(2)} </h2>
                    </div>
                </div>
                <div className="card  bg-red-200">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Total sale : {totalProfit.toFixed(2)} </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SaleDetails;