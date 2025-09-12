import React from 'react';
import { useLoaderData } from 'react-router';
import Blog from '../../Components/Blog/Blog';

const Blogs = () => {
    const data = useLoaderData();
    return (
        <div className='w-4/5 mb-20 mx-auto'>
            <h1 className='text-center text-3xl md:text-4xl font-extrabold mb-2'>Blogs</h1>
            <p className='opacity-60 text-[15px] md:text-xl text-center font-medium mb-4'>Get ready to explore essential ideas that will make you a confident developer.</p>
            <div>
                {
                    data.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;