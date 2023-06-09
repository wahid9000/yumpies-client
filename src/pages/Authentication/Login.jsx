import React, { useContext, useState } from 'react';
import img from '../../assets/login.png'
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-hot-toast';

const Login = () => {
    const { loginUser, createUserWithGoogle, createUserWithGithub } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }


    const navigate = useNavigate()
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();
        setSuccess("");
        setError("");
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);

        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                setSuccess(toast("Login Success"));
                event.target.reset();
                navigate(from, { replace: true });

            })
            .catch(error => {
                console.log(error);
                setError(toast("Invalid Email or Password"));
              
            })
    }

    const handleGoogleSignIn = () => {
        createUserWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGithubSignIn = () => {
        createUserWithGithub()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
            })
    }




    return (
        <div className="md:flex flex-wrap mt-10 rounded-xl shadow-2xl">

            <div className="w-full lg:w-1/2 px-4 py-8 bg-white">
                <h2 className="text-3xl font-bold mb-4 ">Log In</h2>
                <form onSubmit={handleLogin}>
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
                            type={showPassword ? 'text' : 'password'}
                            placeholder="********"
                            name="password"
                            required
                        />
                    </div>
                    <div className='my-3'>
                    <p onClick={handleShowPassword} className='cursor-pointer'>{showPassword ? 'Hide Password' : 'Show Password'}</p>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Login
                    </button>
                </form>
                <p className='mt-2'>Don't Have An Account? <Link to="/register">Register Now!</Link></p>
                <button onClick={handleGoogleSignIn} className='mt-5 btn btn-outline rounded-md'><FaGoogle className='mr-2 text-green-700'></FaGoogle>Continue with Google</button><br />

                <button onClick={handleGithubSignIn} className='mt-2 btn btn-outline rounded-md'><FaGithub className='mr-2 text-gray-700'></FaGithub>Continue with Github</button>
            </div>
            <div className="w-full lg:w-1/2 bg-gray-100 ">
                <img src={img} alt="Steak" className="w-full h-full object-cover" />
            </div>
        </div>
    );
};

export default Login;