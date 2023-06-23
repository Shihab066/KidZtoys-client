import React, { useState } from 'react';
import MyToysRow from './MyToysRow';
import { useLoaderData } from 'react-router-dom';
import { useTitle } from '../../utilities/pageTitle';

const MyToys = () => {
    useTitle('myToys')
    const myToys = useLoaderData();
    const [toys, setToys] = useState(myToys);

    return (
        <>
            <h2 className='text-center text-3xl font-bold mt-20'>My Toys</h2>
            <div className='w-11/12 mx-auto mt-20 shadow-lg'>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='w-1/2 md:pl-5'>Toys</th>
                                <th>Seller</th>
                                <th>Price</th>
                                <th>Rating</th>
                                <th>Quantity</th>
                                <th>Description</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                toys.map(toy => <MyToysRow
                                    key={toy._id}
                                    toy={toy}
                                    toys={toys}
                                    setToys={setToys}
                                ></MyToysRow>)
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </>
    );
};

export default MyToys;