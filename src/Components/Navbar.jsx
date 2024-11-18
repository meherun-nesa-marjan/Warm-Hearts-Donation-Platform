import React from 'react';
import { NavLink } from "react-router-dom";
const Navbar = () => {

    const navItems = [
        { path: '/', element: 'Home' },
        { path: '/Campaigns', element: 'Campaigns' },
        { path: '/Help', element: 'How to Help' },
       

    ];
    return (
        <div>
            <div className="navbar bg-[#daebe8]">
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>

                    <NavLink to="/" className={'lg:text-2xl text-green-900'}>W.Clothing Donation</NavLink>
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
                    <a className="btn">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;