import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useInstructor from "../../Hooks/useInstructor";
import { Navigate, useLocation } from "react-router-dom";
import { ImSpinner4 } from "react-icons/im";


const InstructorRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const [isInstructor, instructorLoading] = useInstructor(user?.email);
    const location = useLocation();

    if(loading||instructorLoading) {
        return (<ImSpinner4 className='text-9xl mx-auto animate-spin '/>)
    }

    if(user && isInstructor) {
        return children;
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default InstructorRoute;