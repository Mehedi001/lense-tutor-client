/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";
import { ImSpinner4 } from "react-icons/im";


const AdminRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isAdmin, adminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if(loading||adminLoading) {
        return (<ImSpinner4 className='text-9xl mx-auto animate-spin '/>)
    }

    if(user && isAdmin) {
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default AdminRoute;