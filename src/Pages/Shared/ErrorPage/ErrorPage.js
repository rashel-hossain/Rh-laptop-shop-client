import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className="error-imgg mt-10 flex justify-center items-center">
                <img src="/404Page.PNG" alt="" />
            </div>
            <div className="error mb-2 text-2xl text-center">
                <h3 className='text-error'>Ops! An Error Ocurred! Back To</h3>
                <Link to="/"><h5 className='font-bold'><button className='rounded-full btn-primary px-4 py-1 ml-2'>Home Page</button></h5></Link>
            </div>
        </div>
    );
};

export default ErrorPage;