import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const Category = () => {
    const [toys, setToys] = useState([]);
    const [category, setCategory] = useState('');
    useEffect(() => {
        fetch(`https://toy-store-server-blue.vercel.app/toy/${category}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [category])
    return (
        <div className='mt-20 md:container mx-auto'>
            <h2 className='text-center text-4xl font-bold'>Shop By Category</h2>
            <div className='mt-5 grid grid-cols-2 gap-3 px-10 md:flex justify-center md:px-0'>
                <button className='btn btn-xs btn-warning hover:bg-transparent md:btn-md' onClick={() => setCategory('')}>All Category</button>
                <button className='btn btn-xs btn-warning hover:bg-transparent md:btn-md' onClick={() => setCategory('legoCity')}>Lego City</button>
                <button className='btn btn-xs btn-warning hover:bg-transparent md:btn-md' onClick={() => setCategory('starWars')}>Lego Stars Wars</button>
                <button className='btn btn-xs btn-warning hover:bg-transparent md:btn-md' onClick={() => setCategory('legoCar')}>Lego Car</button>
            </div>
            <div className='grid px-2 md:px-0 md:grid-cols-3 mt-10 gap-y-10'>
                {
                    toys.map(toy => <CategoryCard
                        key={toy._id}
                        toy={toy}
                    ></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default Category;