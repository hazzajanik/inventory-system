import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useData = () => {
    const axiosSecure = useAxiosSecure();
    // tan stack query
    const {refetch,data: data=[]} = useQuery({
        queryKey: ['data'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/shops')
            return res.data;
        }
    })
    return [data,refetch]
};

export default useData;