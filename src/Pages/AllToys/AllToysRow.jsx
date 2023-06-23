import React from 'react';
import { Link } from 'react-router-dom';

const AllToysRow = ({ toy }) => {
    const {_id, picture, name, seller, price, rating, quantity, description,subCategory } = toy; 
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={picture} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div className='space-y-2'>
                        <div className="font-bold">{name}</div>
                        <div className="badge badge-ghost badge-md">{subCategory}</div>
                    </div>
                </div>
            </td>
            <td>
                {seller}
            </td>
            <td>
                ${price}
            </td>
            <td>{rating}</td>
            <td>{quantity}</td>
            <td>{description.slice(0, 20)}{description.length > 20 && '...'}</td>
            <th>
                <Link to={`/toyDetails/${_id}`}><button className="btn bg-orange-600 hover:bg-orange-500 border-0 btn-sm">details</button></Link>
            </th>
        </tr>
    );
};

export default AllToysRow;