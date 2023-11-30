
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from '../providers/AuthProvider';
import { useContext, useState } from 'react';
import { useEffect } from 'react';

const useAdmin = () => {
    const axiosSecure = useAxiosSecure();
   
    // tan stack query
    const {data: usersAdmin=[]} = useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
            const res = await axiosSecure.get("/users/role")
            return res.data;
        }
    })
    console.log(usersAdmin)
    const [roles, setRoles] = useState({});
    console.log(roles)
    const {user} = useContext(AuthContext)
    console.log(user)

    useEffect(() => {
        usersAdmin.map(u => setRoles(u))
    }, [usersAdmin])

    
  
    const admin = usersAdmin.find(a => a.role == "admin" && a.email == user?.email );
   console.log(admin)
        // console.log(users);
  return admin

}

export default useAdmin