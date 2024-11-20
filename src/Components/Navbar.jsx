import React, { useContext } from 'react';
import { FaHandHoldingHeart } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from '../Providers/AuthProvider';
const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext)
    const handleSignOut = () => {
        signOutUser()
            .then(() => {
            })
            .catch((error) => {
            });
    }
    const navItems = [
        { path: '/', element: 'Home' },
        { path: '/Campaigns', element: 'Campaigns' },
        { path: '/HowToHelp', element: 'How to Help' },

        ...(user ? [{ path: '/Dashboard', element: 'Dashboard' }] : []),

    ];
    return (
        <div className='bg-[#daebe8] py-5'>
            <div className="navbar lg:w-10/12 mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[50] mt-3 w-52 p-2 shadow">
                            {navItems.map(({ path, element }) => (
                                <NavLink
                                    key={path}
                                    to={path}
                                    className={({ isActive }) =>
                                        `lg:text-2xl text-green-900 mx-3 ${isActive ? ' font-bold' : ''}`
                                    }
                                >
                                    {element}
                                </NavLink>
                            ))}
                        </ul>
                    </div>

                    <NavLink to="/" className={'lg:text-2xl flex font-bold gap-1 text-green-900'}> <span className='py-1'><FaHandHoldingHeart /></span> WarmHearts</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems.map(({ path, element }) => (
                            <NavLink
                                key={path}
                                to={path}
                                className={({ isActive }) =>
                                    `lg:text-2xl text-green-900 mx-3 ${isActive ? ' font-bold' : ''}`
                                }
                            >
                                {element}
                            </NavLink>
                        ))}
                    </ul>
                </div>

                <div className="navbar-end">
                    {
                        user ? (

                            <div className="flex items-center space-x-4">
                                {user.photoURL && (
                                  <img
                                  src={user.photoURL || "/default-avatar.png"}
                                  alt="Profile"
                                  className="w-8 h-8 rounded-full"
                                />
                                )}

                                <button onClick={handleSignOut}
                                    className="btn bg-red-500 text-white">
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <Link to={'/Login'}>
                                <button className="btn bg-[#137257] text-white">
                                    Login
                                </button>
                            </Link>
                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default Navbar;