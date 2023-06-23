import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiPencilAlt } from "react-icons/hi";
import { FaEye, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const MyToysRow = ({ toy, toys, setToys }) => {
    const { _id, picture, name, seller, price, rating, quantity, description, Email, subCategory } = toy;
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-store-server-blue.vercel.app/myToys/${id}`, {
                    method: 'delete'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data?.deletedCount) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remainingToys = toys.filter(toy => toy._id !== id);
                            setToys(remainingToys)
                        }
                    })

            }
        })

    }
    const [active,setActive] = useState(false)
    const updateToys = event => {
        event.preventDefault();
        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const toy = { description, price, quantity };
        form.reset();        
        
        fetch(`https://toy-store-server-blue.vercel.app/myToys/${_id}`, {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data?.modifiedCount) {
                    setActive(true)
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy update successfully',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                    fetch(`https://toy-store-server-blue.vercel.app/myToys/${Email}`)
                        .then(res => res.json())
                        .then(data => setToys(data))
                }

            })
    }   
 
    return (
        <>
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
                    <input type="checkbox" id="my-modal-5" className="modal-toggle" />

                    <div className={`modal ${active? 'hidden' : 'flex'}`}>
                        <div className="modal-box w-11/12 max-w-4xl">
                            <h2 className='text-center text-2xl'>Update Toy</h2>
                            <form onSubmit={updateToys} name='updateform'>
                                <div>
                                    <div className="form-control">
                                        <span className='label'>Price</span>
                                        <input type="text" placeholder='price' name='price' className="focus:border-1 focus:outline-0 active:border-1 input input-bordered font-medium" required />
                                    </div>
                                    <div className="form-control">
                                        <span className='label'>Quantity</span>
                                        <input type="text" placeholder='quantity' name='quantity' className="focus:border-1 focus:outline-0 active:border-1 input input-bordered font-medium " required />
                                    </div>
                                    <div className="form-control">
                                        <span className='label'>Description</span>
                                        <textarea type="text" placeholder='description' name='description' className="focus:border-1 focus:outline-0 active:border-1 textarea textarea-bordered font-medium h-[100px] " required />
                                    </div>
                                </div>
                                <div className="modal-action">
                                    <button type='submit' className='btn'>Submit</button>
                                    <label htmlFor="my-modal-5"  className="btn">Close</label>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='space-x-2'>
                        <Link to={`/toyDetails/${_id}`}><button className="btn hover:bg-opacity-80 btn-sm text-lg"><FaEye /></button></Link>
                        <label htmlFor="my-modal-5" onClick={() => setActive(false)} className='btn btn-warning hover:bg-opacity-80 btn-sm text-lg'><HiPencilAlt /></label>
                        <button onClick={() => handleDelete(_id)} className='btn bg-orange-600 hover:bg-orange-500 border-0 btn-sm text-lg'><FaTrash /></button>
                    </div>
                </th>
            </tr>
        </>

    );
};

export default MyToysRow;