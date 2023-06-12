import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, Outlet } from "react-router-dom";
import { FaHome, FaPlusCircle } from "react-icons/Fa";
import { Helmet } from "react-helmet";


const Dashboard = () => {
    const { user } = useContext(AuthContext);
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
                        <div className=" py-6 px-12 bg-red-800/30 rounded-xl">
                            <h1 className="  text-orange-300 tracking-widest underline mb-6">Dashboard Info</h1>
                            <img src={user.photoURL} alt="" />
                            <h1 className="text-gray-400 pt-4">Dashboard Name: <br /> <span
                                className="text-2xl text-white font-bold">{user.displayName}</span></h1>
                            <h1 className="text-gray-400">E-mail: <br /> <span
                                className="text-2xl text-white font-bold">{user.email}</span></h1>
                        </div>

                        <div className="py-6 lg:h-96  flex flex-col mt-4 px-12 bg-red-800/30 rounded-xl">
                        <h1 className="  text-orange-300 tracking-widest underline mb-6">Manage content:</h1>
                            <Link to="/" className="text-xl hover:underline flex items-center my-3 text-orange-400 font-bold"> <FaHome className="inline"></FaHome> &nbsp; Homepage</Link>
                            <Link to="myclass" className="text-xl hover:underline flex items-center my-3 text-orange-400 font-bold"> <FaHome className="inline"></FaHome> &nbsp; My Class</Link>
                            <Link to="addclass" className="text-xl my-3 hover:underline flex items-center text-orange-400 font-bold"><FaPlusCircle className="inline"></FaPlusCircle> &nbsp;  Add New Class</Link>
                        </div>

                    </div>

                    <div className="w-full lg:w-4/5 px-0 lg:px-2 rounded-lg">
                        <Outlet> </Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;