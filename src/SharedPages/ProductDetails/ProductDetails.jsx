import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const toy = useLoaderData();
    const { picture, name, seller, email, price, rating, quantity, description } = toy;
    return (
        <div className='mx-auto mt-20 w-1/2'>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={picture} alt="Album" className='rounded-3xl' /></figure>
                <div className="card-body">
                    <div className=' space-y-2'>

                        <div className='flex justify-between'>
                        <h2 className="card-title">{name}</h2>
                        <span className='flex items-center gap-1'><FaStar className='text-warning' /> {rating}</span>
                        </div>
                        <p className='text-gray-500 lg:w-3/4'><span className='font-bold'>Product Description:</span> {description}</p>
                        <p className='font-bold text-gray-800'>Price: ${price}</p>
                        <p className='font-medium'>Available Quantity: {quantity}</p>                        
                        <p className='font-medium text-gray-700'>Seller: {seller?seller:"Unknown"}</p>
                        <p className='text-gray-500'>E-mail: {email?email : 'Unknown'}</p>

                    </div>

                    <div className="card-actions justify-center">
                        <button className="btn btn-warning text-white" onClick={() => window.history.back()}>Go back</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;