import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useShop = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);
    // tan stack query
    const {refetch,data: shop=[]} = useQuery({
        queryKey: ['shop',user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/shops?email=${user.email}`)
            return res.data;
        }
    })
    return [shop,refetch]
};

export default useShop;