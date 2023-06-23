import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useTitle } from '../../utilities/pageTitle';

const AddToy = () => {
    useTitle('addToy')
    const { user, loading } = useContext(AuthContext);
    const [category, setCategory] = useState('legoCity');
    if (loading) {
        return
    }
    const { displayName, email } = user;

    const AddToy = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const seller = form.sellerName.value;
        const Email = email;
        const quantity = form.quantity.value;
        const rating = form.rating.value;
        const subCategory = category;
        const picture = form.photo.value;
        const description = form.description.value;
        form.reset();
        const toy = { name, price, rating, quantity, seller, Email, subCategory, picture, description }
        console.log(toy)

        fetch('https://toy-store-server-blue.vercel.app/toy', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data?.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy added successfully',
                        icon: 'success',
                        confirmButtonText: 'close',
                        confirmButtonColor:'#3085d6'
                    })
                }
            })
    }

    const handleCategory = () => {
        const x = document.getElementById('category').value;
        setCategory(x)

    }

    return (
        <>
            
            <div className='md:container mx-auto bg-orange-600 space-y-2 mt-20 py-10 rounded-xl'>
            <h2 className='text-white font-bold text-3xl text-center mb-10'>Add New Toys</h2>
                <form onSubmit={AddToy} className='w-1/2 mx-auto'>
                    <div className='flex justify-between gap-7'>
                        <section className='w-full max-w-md'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white font-semibold">Toy name</span>
                                </label>
                                <input type="text" placeholder="toy name" name='name' className="input input-bordered font-medium" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white font-semibold">Rating</span>
                                </label>
                                <input type="text" placeholder="rating" name='rating' className="input input-bordered font-medium" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white font-semibold">Seller Name</span>
                                </label>
                                <input type="text" defaultValue={displayName ? displayName : "Unknown"} name='sellerName' className="input input-bordered font-medium" required disabled={displayName ? true : false} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white font-semibold">Seller Email</span>
                                </label>
                                <input type="text" defaultValue={email} name='sellerEmail' className="input input-bordered font-medium" required disabled />
                            </div>
                        </section>
                        <section className='w-full max-w-md'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white font-semibold">Price</span>
                                </label>
                                <input type="text" placeholder="Type here" name='price' className="input input-bordered font-medium" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white font-semibold">Quantity</span>
                                </label>
                                <input type="number" placeholder="quantity" name='quantity' className="input input-bordered font-medium" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white font-semibold">Category</span>
                                </label>
                                <select className="select" id='category' onChange={handleCategory}>
                                    <option value='legoCity'>Lego City</option>
                                    <option value='legoCar'>Lego Car</option>
                                    <option value='starWars'>Lego Starwars</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white font-semibold">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Ex: 'https://image.png'" name='photo' className="input input-bordered font-medium" required />
                            </div>
                        </section>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white font-semibold">Details Description</span>
                        </label>
                        <textarea type="text" placeholder="description" name='description' className="textarea textarea-bordered h-[200px] font-medium" required />
                    </div>
                    <input type="submit" value='Add Toy' className='btn bg-[#F9D949] border-0 hover:bg-[#f9d949f3] flex mx-auto mt-5 font-bold w-full' />
                </form>
            </div>
        </>
    );
};

export default AddToy;