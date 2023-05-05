import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const UserProfile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='mt-16'>
            <h2 className='text-2xl mb-2 font-bold text-center'>User Profile</h2>
            <div className='flex justify-center'>
                <div className="card border p-3 w-96 bg-base-100 shadow-xl mt-5">
                    <div className="avatar mx-auto">
                        <div className="w-40 rounded-full">
                            <img src={user.photoURL} />
                        </div>
                    </div>
                    <div className="card-body">


                        <h2 className="text-md">Name: {user.displayName}</h2>
                        <h2 className="text-md">Email: {user.email}</h2>

                    </div>
                    <div className='text-center'>
                    <button className="btn btn-danger rounded-lg text-white">Edit Profile</button>
                    </div>
                </div>
            </div>
        </div>




    );
};

export default UserProfile;