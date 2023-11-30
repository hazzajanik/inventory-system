import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllData = () => {
    const axiosSecure = useAxiosSecure();
    // tan stack query
    const {refetch,data: alldata=[]} = useQuery({
        queryKey: ['alldata'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/products')
            return res.data;
        }
    })
    return [alldata,refetch]
};

export default useAllData;