import React from 'react';
import { useTitle } from '../../utilities/pageTitle';

const Blog = () => {
    useTitle('blog')
    return (
        <>
            <h1 className='font-bold text-4xl mt-20 text-center'>QA</h1>
            <div className='md:container mx-auto grid grid-cols-2 gap-10 mt-20'>


                <div>
                    <h2 className='font-bold text-lg mb-3'>SQL VS NoSQL databases?</h2>
                    <p className='mb-2'>
                        An SQL database is a structured collection of data organized into tables with rows and columns. It uses the Structured Query Language (SQL) for managing and manipulating data. SQL databases provide a reliable and efficient way to store, retrieve, and modify data, making them widely used in various applications.
                    </p>
                    <p>
                        A NoSQL database is a non-relational database that offers flexible and scalable data storage. It does not rely on fixed table schemas and supports unstructured or semi-structured data. NoSQL databases are designed to handle large volumes of data and provide high performance for distributed systems.
                    </p>
                </div>
                <div>
                    <h2 className='font-bold text-lg mb-3'>What is express js? What is Nest JS?</h2>
                    <p className='mb-2'>Express JS: Express.js is a popular web application framework for Node.js. It provides a set of features and tools to build web applications and APIs quickly and easily. Express.js simplifies the process of handling HTTP requests, routing, middleware integration, and more. </p>
                    <p>Nest JS: Nest.js is a progressive and extensible Node.js framework for building efficient, scalable, and maintainable server-side applications. It is built with TypeScript and takes advantage of modern JavaScript features and concepts. </p>
                </div>
                <div>
                    <h2 className='font-bold text-lg mb-3'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <p className='mb-2'>An access token and refresh token are commonly used in authentication systems to grant and manage user access to protected resources</p>
                    <p className='mb-2'>
                    Access token is a temporary key that grants access to certain resources or actions. It expires after a short time, around 1 hour.
                    Refresh token special ticket that allows us to obtain a new access token when the current one expires. It has a longer lifespan, around 30 days.
                    access token is use to access resources. When it expires, use the refresh token to get a new access token without re-authenticating.

                    </p>
                    <p>
                        store the access token and refresh token on the client-side to manage user authentication and authorization. However, it's important to store them securely to prevent unauthorized access.
                    </p>

                </div>
                <div>
                    <h2 className='font-bold text-lg mb-3'>What is MongoDB aggregate and how does it work?</h2>
                    <p>MongoDB 'aggregate' is a function used to perform complex data processing and analysis operations on collections.
                        It's work by applying a series of transformations, known as pipeline stages, to data to perform aggregations, filtering, sorting, grouping, and other operations.
                    </p>
                </div>

            </div>
        </>
    );
};

export default Blog;