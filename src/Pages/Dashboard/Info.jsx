import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Info = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className=" py-6 px-12 lg:w-3/6 mx-auto  bg-red-800/30 rounded-xl flex justify-center flex-col items-center">
            <h1 className="text-orange-300 tracking-widest underline mb-6">Dashboard Info</h1>
            <img className="rounded-md" src={user?.photoURL} alt="" />
            <h1 className="text-gray-400 pt-4">Dashboard Name: <br /> <span
                className="text-2xl text-white font-bold">{user?.displayName}</span></h1>
            <h1 className="text-gray-400">E-mail: <br /> <span
                className="text-2xl text-white font-bold">{user?.email}</span></h1>
        </div>
    );
};

export default Info;