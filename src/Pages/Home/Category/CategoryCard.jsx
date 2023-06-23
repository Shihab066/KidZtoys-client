import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const CategoryCard = ({ toy }) => {
    const { _id, name, price, rating, picture, subCategory } = toy;
    return (
        <div className="card w-11/12 md:w-96 bg-base-300 shadow-xl mx-auto">
            <figure className='h-[255px]'><img src={picture} alt="Shoes" className=' hover:scale-110 ease-linear duration-300' /></figure>
            <div className="card-body">
                <div className='flex justify-between items-center'>
                    <h2 className="card-title">
                        {name}
                    </h2>
                    <span className='flex items-center gap-1'>
                        <FaStar className='text-warning'/>
                        {rating}
                    </span>
                </div>
                <p className='font-bold'>${price}</p>
                <div className="card-actions justify-between items-center">
                    <Link to={`toyDetails/${_id}`}><button className="btn bg-orange-600 hover:bg-orange-700 border-0">View Details</button></Link>
                    <div className="badge badge-outline">{subCategory}</div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;