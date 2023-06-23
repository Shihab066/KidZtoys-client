import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllToysRow from './AllToysRow';
import { useTitle } from '../../utilities/pageTitle';

const AllToys = () => {
    useTitle(' all toys')
    const toys = useLoaderData();    
    return (
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
                            toys.map(toy => <AllToysRow
                                key={toy._id}
                                toy={toy}
                            ></AllToysRow>)
                        }
                    </tbody>                   

                </table>
            </div>
        </div>
    );
};

export default AllToys;