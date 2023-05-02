import React, { useContext, useState } from 'react';
import img from '../../assets/login.png'
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const Register = () => {

    const {createUser, createUserWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleRegister = (event) => {
        event.preventDefault();
        setError("");
        setSuccess("");
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        const photoUrl = event.target.photo.value;
        
        if(password.length < 6){
            setError("Provide a password having 6 characters or more.")
        }

        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
            setSuccess("User has been created");
            navigate('/')
        })
        .catch(error => {
            console.log(error);
        })
    }

    const handleGoogleSignUp = () => {
        createUserWithGoogle()
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate('/');
        })
        .catch(error => {
            console.log(error);
        })
    }



    return (
        <div className="md:flex flex-wrap mt-10">

            <div className="w-full lg:w-1/2 px-4 py-8 bg-white">
                <h2 className="text-3xl font-bold mb-4 ">Register</h2>
                <p>{success}</p>
                <form onSubmit={handleRegister}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="name"
                            name="name"
                            placeholder="name"
                            required
                        />
                    </div>
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
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="photo">
                            Photo URL
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="photo"
                            type="photo"
                            placeholder="photo url"
                            name="photo"
                            required
                        />
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Register
                    </button>
                    <p className='text-yellow-600 mt-1'>{error}</p>
                </form>
                <p className='mt-2'>Already Have an Account? <Link to="/login">Login Now!</Link></p>

                <button onClick={handleGoogleSignUp} className='mt-5 btn btn-outline rounded-md'><FaGoogle className='mr-2 text-green-700'></FaGoogle>Continue with Google</button>
                <button className='mt-2 btn btn-outline rounded-md md:ml-2'><FaGithub className='mr-2 text-gray-700'></FaGithub>Continue with Github</button>
            </div>
            <div className="w-full lg:w-1/2 bg-gray-100">
                <img src={img} alt="Steak" className="w-full h-full object-cover" />
            </div>
        </div>
    );
};

export default Register;