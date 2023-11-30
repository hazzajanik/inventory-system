import axios from "axios";

const axiosSecure = axios.create({
    baseURL: "https://server-eta-beryl.vercel.app",
})

const useAxiosSecure = () => {

    return axiosSecure;

};

export default useAxiosSecure;