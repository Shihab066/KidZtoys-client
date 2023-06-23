import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Category from '../Category/Category';
import { useTitle } from '../../../utilities/pageTitle';



const Home = () => {
    useTitle(' home')
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Category></Category>
        </div>
    );
};

export default Home;