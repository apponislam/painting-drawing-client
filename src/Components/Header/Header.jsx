import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";

const Header = () => {
    const { user, loading, logOut } = useContext(AuthContext);
    // const [theme, setTheme] = useState("light");

    // useEffect(() => {
    //     localStorage.setItem("theme", theme);
    //     const localTheme = localStorage.getItem("theme");
    //     document.querySelector("html").setAttribute("data-theme", localTheme);
    // }, [theme]);

    // const themeToggle = (e) => {
    //     console.log(e.target.checked);
    //     if (e.target.checked) {
    //         setTheme("dark");
    //     } else {
    //         setTheme("light");
    //     }
    // };

    // new
    const [theme, setTheme] = useState(() => {
        const localTheme = localStorage.getItem("theme");
        return localTheme ? localTheme : "light";
    });

    // Apply theme to HTML element when component mounts or theme state changes
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    // Toggle theme between light and dark
    const themeToggle = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

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
                <NavLink to="/allart">All Art & craft Items</NavLink>
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
            <li>
                <NavLink to="/allart">All Art & craft Items</NavLink>
            </li>
            <li>
                <NavLink to="/addart">Add Craft Item</NavLink>
            </li>
            <li>
                <NavLink to="/myart">My Art&Craft List</NavLink>
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
                        <div tabIndex={0} role="button" className="btn btn-ghost px-2 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-3 z-50">
                            {user ? navlinks : navlinks2}
                        </ul>
                    </div>
                    <Link to="/">
                        <p className="btn px-2 md:px-4 btn-ghost text-[16px] md:text-xl">Appon P&D</p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-3">{user ? navlinks : navlinks2}</ul>
                </div>

                <div className="navbar-end gap-3">
                    {user ? (
                        <>
                            <a id="clickable">
                                <div className="w-12 h-12 rounded-full border border-green-600">
                                    <img className="rounded-full p-1" src={user?.photoURL} alt="" />
                                </div>
                            </a>
                            <Tooltip className="z-50" anchorSelect="#clickable" clickable>
                                <p className="text-center mb-5">{user?.displayName}</p>
                                <button className="btn btn-success p-3 w-full text-white" onClick={logOutbtn}>
                                    LogOut
                                </button>
                            </Tooltip>
                        </>
                    ) : (
                        <>
                            <Link to="/login">
                                <button className="btn">Log In</button>
                            </Link>
                            <Link to="/signup">
                                <button className="btn">Sign Up</button>
                            </Link>
                        </>
                    )}
                    <label className="cursor-pointer grid place-items-center z-50">
                        {/* <input type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" onChange={themeToggle} /> */}
                        <input type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" onChange={themeToggle} checked={theme === "dark"} />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5" />
                            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                        </svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Header;
