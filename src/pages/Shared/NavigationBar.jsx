import React, { useContext } from 'react';
import { FaSignInAlt, FaSignOutAlt, FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import ActiveLink from '../../components/ActiveLink/ActiveLink';

const NavigationBar = () => {

    const {logOut, user} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
        .then(result => {
            navigate('/login')
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="navbar bg-transparent">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <ActiveLink to='/'>Home</ActiveLink>
                        <ActiveLink to='/blogs'>Blogs</ActiveLink>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">YumPies</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5 ">
                    <ActiveLink className='text-black' to='/'>Home</ActiveLink>
                    <ActiveLink to='/blogs' className='text-black'>Blogs</ActiveLink>

                </ul>
            </div>
            <div className="navbar-end gap-3">
                {
                    user&&
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={user.photoURL} />
                    </div>
                </label>
                }

                {
                    user ?
                    <Link><button onClick={handleLogOut} className="btn btn-warning rounded-md hover:bg-red-600 hover:text-white">Logout<FaSignOutAlt className='ml-2'></FaSignOutAlt></button></Link>
                    :
                    <Link to="/login"><button className="btn btn-warning rounded-md hover:bg-red-600 hover:text-white">Login<FaSignInAlt className='ml-2'></FaSignInAlt></button></Link>

                }

                
                
            </div>
        </div>
    );
};

export default NavigationBar;