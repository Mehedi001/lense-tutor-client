import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, Outlet } from "react-router-dom";


const Dashboard = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="bg-gray-800">
            <div className="bg-red-900 h-60">
                <h1 className="uppercase pt-32 font-bold text-4xl lg:text-6xl text-center text-orange-100"> Dashboard</h1>
            </div>
            <div className="bg-red-950/60">
            <div className="p-2 lg:p-8 flex">
            <div className=" w-full lg:w-1/5 py-6 px-12 bg-red-800/30 rounded-xl">
            <h1 className=" text-black text-orange-300 tracking-widest underline mb-6">Dashboard Info</h1>
                <img src={user.photoURL} alt="" />
                <h1 className="text-gray-400 pt-4">Dashboard Name: <br /> <span 
                className="text-2xl text-white font-bold">{user.displayName}</span></h1>
                <h1 className="text-gray-400">E-mail: <br /> <span 
                className="text-2xl text-white font-bold">{user.email}</span></h1>
            </div>
            <div className="w-4/5">
            <Outlet> </Outlet>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Dashboard;