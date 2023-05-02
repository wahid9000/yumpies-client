import React from 'react';
import img from '../../assets/login.png'
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="flex flex-wrap mt-10">

            <div className="w-full lg:w-1/2 px-4 py-8 bg-white">
                <h2 className="text-3xl font-bold mb-4 ">Log In</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                            Email address
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            name="email"
                            placeholder="email@email.com"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
                            Set Password
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="********"
                            name="password"
                            required
                        />
                    </div>
                    <div className='my-3'>
                        <p>Show Password</p>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Login
                    </button>
                </form>
                <p className='mt-2'>Don't Have An Account? <Link to="/register">Register Now!</Link></p>
                <button className='mt-5 btn btn-outline rounded-md'><FaGoogle className='mr-2 text-green-700'></FaGoogle>Continue with Google</button><br />
                <button className='mt-2 btn btn-outline rounded-md'><FaGithub className='mr-2 text-gray-700'></FaGithub>Continue with Github</button>
            </div>
            <div className="w-full lg:w-1/2 bg-gray-100">
                <img src={img} alt="Steak" className="w-full h-full object-cover" />
            </div>
        </div>
    );
};

export default Login;