import React from 'react';
import { LuCalendarHeart } from 'react-icons/lu';

const Blog = ({ blog }) => {
    const { question, answer, date } = blog;
    return (
        <div>
            <div className="flex flex-col py-3">
                <div className=" flex flex-col justify-center w-full card bg-base-100 shrink-0 border-3 border-gray-200 rounded-3xl">
                    <div className='flex flex-col p-5'>
                        <h3 className='font-bold text-xl pb-5 border-dashed border-b-2 border-base-300'>Question : {question}</h3>
                        <p className='font-medium text-md py-5 border-dashed border-b-2 border-base-300'><span className='font-bold'>Answer : </span> {answer}</p>
                        <p className='font-bold text-md opacity-30 pt-5 border-dashed border-b-2 border-base-300 flex items-center gap-2'><LuCalendarHeart size={25} /> Added at {date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;