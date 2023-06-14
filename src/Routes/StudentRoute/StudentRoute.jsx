import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ImSpinner4 } from "react-icons/im";
import { Navigate, useLocation } from "react-router-dom";
import useStudent from "../../Hooks/useStudent";


const StudentRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isStudent, studentLoading] = useStudent(user?.email);
    const location = useLocation();

    if(loading||studentLoading) {
        return (<ImSpinner4 className='text-9xl mx-auto animate-spin '/>)
    }

    if(user && isStudent) {
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default StudentRoute;