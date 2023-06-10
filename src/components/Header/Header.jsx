import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";



const Header = () => {
    const {user, logout} = useContext(AuthContext);
    const navItem = <>

        <li className="text-white hover:text-yellow-400"><Link>Home</Link></li>
        <li className="text-white hover:text-yellow-400"><a>Instructor</a></li>
        <li className="text-white hover:text-yellow-400"><a>Classes</a></li>
        <li className="text-white hover:text-yellow-400"><a>Dashboard</a></li>
    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-5 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown  ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white/20 rounded-box w-52 ">
                        {navItem}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"><img className="w-16" src="logo.png" alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">

                {!user && <Link to="/login" className="btn btn-sm mr-4">Login</Link>}

               

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {user ? <img src={user.photoURL} /> : <img src="profile.png"/>}
                        </div>
                    </label>
                    
                </div>
            </div>

        </div>
  
    );
};

export default Header;