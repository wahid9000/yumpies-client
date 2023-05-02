import React from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div className="navbar bg-transparent">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link>Home</Link>
                        <Link>Blogs</Link>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">YumPies</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5 ">
                    <Link className='text-black' to='/'>Home</Link>
                    <Link className='text-black'>Blogs</Link>

                </ul>
            </div>
            <div className="navbar-end gap-3">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://images.unsplash.com/photo-1521038199265-bc482db0f923?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW1lcmljYW4lMjBnaXJsfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
                    </div>
                </label>
                <Link to="/login"><button className="btn btn-warning rounded-md hover:bg-red-600 hover:text-white">Login<FaSignInAlt className='ml-2'></FaSignInAlt></button></Link>
            </div>
        </div>
    );
};

export default NavigationBar;