import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";



const Header = () => {
    const {user, logout} = useContext(AuthContext);
    const navItem = <>

        <li className="text-white hover:text-yellow-400"><Link to="/">Home</Link></li>
        <li className="text-white hover:text-yellow-400"><Link to="/instructors">Instructor</Link></li>
        <li className="text-white hover:text-yellow-400"><Link to="classes">Classes</Link></li>
        <li className="text-white hover:text-yellow-400"><Link to="/dashboard">Dashboard</Link></li>
    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-70 bg-[#18110e]">
            <div className="navbar-start">
                <div className="dropdown  ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white/20 rounded-box w-52 ">
                        {navItem}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl"><img className="w-16" src="logo.png" alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">

                {!user && <Link to="/login" className="btn btn-sm mr-4  border-0 bg-[#c58f63] hover:bg-[#9b6a42] hover:text-white">Login</Link>}

               

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} title="click here for logout & more detail" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {user ? <img src={user.photoURL} /> : <img src="profile.png"/>}
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-white/90 rounded-box w-52">
                        {user ? <li><a href="">{user.displayName}</a></li> : "no user found" }
                        {user && <li><a href="">{user.email}</a></li>}
                        {user && <li><button onClick={logout}>Logout</button></li>}
                    </ul>
                </div>
            </div>

        </div>
  
    );
};

export default Header;