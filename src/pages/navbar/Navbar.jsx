import { Link, NavLink } from "react-router-dom";
import userDefaultPicture from "../../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>

        {
            user && <>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
            </>

        }
    </>

    return (
        <div className="bg-base-200">
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">GameOn Galaxy</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <>
                                <label tabIndex={0} className="btn btn-ghost hidden md:inline-block btn-circle avatar mr-3">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </label>
                                <button onClick={handleSignOut} className="btn">SignOut</button>
                            </>

                            : <>
                                <label tabIndex={0} className="btn btn-ghost btn-circle hidden md:inline-block  avatar mr-3">
                                    <div className="w-10 rounded-full">
                                        <img src={userDefaultPicture} />
                                    </div>
                                </label>
                                <Link to='/login'>
                                    <button className="btn">LogIn</button>
                                </Link>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;