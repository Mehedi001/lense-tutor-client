import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, Outlet } from "react-router-dom";
import { FaArrowRight, FaHome, FaPlusCircle, FaUserCheck } from "react-icons/Fa";
import { Helmet } from "react-helmet";
import { BiBook, BiCart } from "react-icons/Bi";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";
import useStudent from "../../Hooks/useStudent";



const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isInstructor] = useInstructor(user?.email);
    const [isStudent] = useStudent(user?.email);
    return (

        <div className="bg-gray-800">
            <Helmet>
                <title>Lense Tutor | Dashboard
                </title>
            </Helmet>

            <div className="bg-red-900">
                <h1 className="uppercase py-8 font-bold text-4xl lg:text-6xl text-center text-orange-100"> Dashboard</h1>
            </div>
            <div className="bg-red-950/60">
                <div className="px-3 py-6 flex flex-col lg:flex-row">
                    <div className=" w-full lg:w-1/5">
                        <div className="py-6   flex flex-col px-12 bg-red-800/30 rounded-xl h-screen">
                            <h1 className="  text-orange-300 tracking-widest underline mb-6">Manage content:</h1>

                            {
                                isInstructor && (
                                    <>
                                        <Link to="/" className=" text-xl hover:underline flex items-center my-3 text-orange-400 font-bold"> <FaHome className="inline"></FaHome> &nbsp; Homepage</Link>
                                        <Link to="myclass" className="text-xl hover:underline flex items-center my-3 text-orange-400 font-bold"> <BiBook className="inline" /> &nbsp; My Class</Link>
                                        <Link to="addclass" className="text-xl my-3 hover:underline flex items-center text-orange-400 font-bold"><FaPlusCircle className="inline"></FaPlusCircle> &nbsp;  Add New Class</Link>
                                    </>
                                )
                            }
                            {
                                isStudent && (<>
                                    <Link to="/" className=" text-xl hover:underline flex items-center my-3 text-orange-400 font-bold"> <FaHome className="inline"></FaHome> &nbsp; Homepage</Link>
                                    <Link to="cart" className="text-xl hover:underline flex items-center my-3 text-orange-400 font-bold"> <BiCart className="inline" /> &nbsp; Class List</Link>
                                </>)
                            }

                            {
                                isAdmin && (
                                    <>
                                        <Link to="/" className=" text-xl hover:underline flex items-center my-3 text-orange-400 font-bold"> <FaHome className="inline"></FaHome> &nbsp; Homepage</Link>
                                        <Link to="manageUser" className="text-xl my-3 hover:underline flex items-center text-orange-400 font-bold"><FaUserCheck className="inline" /> &nbsp;  Manage Users</Link>
                                        <Link to="reviewClass" className="text-xl my-3 hover:underline flex items-center text-orange-400 font-bold"><FaArrowRight className="inline" /> &nbsp;  Review Classes</Link>
                                    </>
                                )
                            }
                        </div>

                    </div>

                    <div className="w-full lg:w-4/5 px-0 lg:px-2 rounded-lg">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;