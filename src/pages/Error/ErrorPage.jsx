import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const {error, status} = useRouteError();
    return (
        <div className='px-0 md:px-60 mt-5 md:mt-20 text-center md:flex items-center'>
            <div>
                <img src="https://thumbs.dreamstime.com/b/face-expression-beautiful-young-chef-woman-disappointed-female-emotion-cute-cartoon-character-stock-vector-illustration-170859595.jpg" alt="" className='w-60 md:w-80 lg:w-96 mx-auto' />
            </div>
            <div>
                <h2 className='text-8xl font-bold'>{status || 404}<span className='font-normal text-4xl ml-2 text-orange-400'><small>error</small></span></h2>
                <p className='text-3xl mt-5'>{error.message}</p>
                <Link to="/"><button className='btn-md bg-orange-400 text-white mt-10 hover:bg-orange-500'>Back To Home Page</button></Link> 
            </div>
            
            
        </div>
    );
};

export default ErrorPage;