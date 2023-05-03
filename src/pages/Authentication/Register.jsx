import React, { useContext, useState } from 'react';
import img from '../../assets/login.png'
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-hot-toast';


const Register = () => {

    const {createUser} = useContext(AuthContext);
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
        const photoURL = event.target.photoURL.value;
        
        if(password.length < 6){
            setError(toast("Provide a password having 6 characters or more."))
        }
        else if(!email){
            setError(toast("Email field cannot be empty"))
        }
        else if(!password){
            setError(toast("Password field cannot be empty"))
        }

        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
            event.target.reset();
            setSuccess("User has been created");
            updateUserData(result.user, name, photoURL);
            navigate('/')
        })
        .catch(error => {
            console.log(error);
        })
    }

    const updateUserData = (user, name, photoURL) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photoURL
        })
        .then(() => {

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
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="photoURL">
                            Photo URL
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="photoURL"
                            type="photoURL"
                            placeholder="photo url"
                            name="photoURL"
                            required
                        />
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Register
                    </button>
                    
                </form>
                <p className='mt-2'>Already Have an Account? <Link to="/login">Login Now!</Link></p>
            </div>
            <div className="w-full lg:w-1/2 bg-gray-100">
                <img src={img} alt="Steak" className="w-full h-full object-cover" />
            </div>
        </div>
    );
};

export default Register;