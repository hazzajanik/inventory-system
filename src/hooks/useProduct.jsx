import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useProduct = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);
    // tan stack query
    const {refetch,data: product=[]} = useQuery({
        queryKey: ['product',user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/products?email=${user.email}`)
            return res.data;
        }
    })
    return [product,refetch]
};

export default useProduct;