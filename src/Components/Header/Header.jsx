import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";
import { Tooltip } from "react-tooltip";

const Header = () => {
    const { user, loading, logOut } = useContext(AuthContext);

    if (loading) {
        return (
            <div className="container mx-auto">
                <div className="flex justify-between items-center p-2">
                    <div className="skeleton h-14 w-36"></div>
                    <div className="items-center gap-2 hidden lg:flex">
                        <div className="skeleton h-9 w-20"></div>
                        <div className="skeleton h-9 w-20"></div>
                        <div className="skeleton h-9 w-20"></div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="skeleton h-14 w-24"></div>
                        <div className="skeleton h-14 w-24"></div>
                    </div>
                </div>
            </div>
        );
    }

    const navlinks2 = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/login">Log In</NavLink>
            </li>
            <li>
                <NavLink to="/signup">Sign Up</NavLink>
            </li>
        </>
    );

    const navlinks = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
        </>
    );

    const logOutbtn = () => {
        logOut()
            .then(() => {
                console.log("Successfully logged out");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="container mx-auto">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-3">
                            {user ? navlinks : navlinks2}
                        </ul>
                    </div>
                    <Link to="/">
                        <p className="btn btn-ghost text-xl">Appon P&D</p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-3">{user ? navlinks : navlinks2}</ul>
                </div>

                {user ? (
                    <div className="navbar-end gap-3">
                        {/* <Link to="/login">
                            <button className="btn">Log In</button>
                        </Link>
                        <Link to="/signup">
                            <button className="btn">Sign Up</button>
                        </Link> */}
                        <a id="clickable">
                            <div className="w-12 h-12 rounded-full border border-green-600">
                                <img className="rounded-full p-1" src={user?.photoURL} alt="" />
                            </div>
                        </a>
                        <Tooltip anchorSelect="#clickable" clickable>
                            <p className="text-center mb-5">{user?.displayName}</p>
                            <button className="btn btn-success p-3 w-full text-white" onClick={logOutbtn}>
                                LogOut
                            </button>
                        </Tooltip>
                    </div>
                ) : (
                    <div className="navbar-end gap-3">
                        <Link to="/login">
                            <button className="btn">Log In</button>
                        </Link>
                        <Link to="/signup">
                            <button className="btn">Sign Up</button>
                        </Link>
                        {/* <a id="clickable">
                            <div className="w-12 h-12 rounded-full border border-green-600">
                                <img className="rounded-full p-1" src={user?.photoURL} alt="" />
                            </div>
                        </a>
                        <Tooltip anchorSelect="#clickable" clickable>
                            <p className="text-center mb-5">{user?.displayName}</p>
                            <button className="btn btn-success p-3 w-full text-white" onClick={logOut}>
                                LogOut
                            </button>
                        </Tooltip> */}
                    </div>
                )}

                {/* <div className="navbar-end gap-3">
                    <Link to="/login">
                        <button className="btn">Log In</button>
                    </Link>
                    <Link to="/signup">
                        <button className="btn">Sign Up</button>
                    </Link>
                    <a id="clickable">
                        <div className="w-12 h-12 rounded-full border border-green-600">
                            <img className="rounded-full p-1" src={user?.photoURL} alt="" />
                        </div>
                    </a>
                    <Tooltip anchorSelect="#clickable" clickable>
                        <p className="text-center mb-5">{user?.displayName}</p>
                        <button className="btn btn-success p-3 w-full text-white" onClick={logOut}>
                            LogOut
                        </button>
                    </Tooltip>
                </div> */}
            </div>
        </div>
    );
};

export default Header;
