import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { usegetCategories } from '../../hooks/categories';
import axios from 'axios';

function Category() {

    const { data: categories, isLoading, error } = usegetCategories()
    console.log(categories)

    const addCatagory = async () => {
        const response = await axios.post("http://localhost:3000/api/categories/add")
        console.log(add)
    }
    return (

        <div className='pt-28 grid grid-cols-4 gap-12'>
            {isLoading ? 'yuklanmoqda' : categories?.map((item) => (
                <NavLink to={`/categories/${item.id}`} key={item.id}>
                    <div className='bg-gray-100 p-6 border-2 border-blue-200 rounded-xl overflow-hidden hover:scale-105 transition duration-300 cursor-pointer'>
                        <div className='text-7xl text-center text-blue-400 flex justify-center'>
                            <img className='w-40 h-40 rounded-2xl' src={item?.images} alt={categories?.name} />
                        </div>
                        <h1 className='text-2xl text-center mt-3'>
                            {item.name}
                        </h1>
                    </div>
                </NavLink>
            ))}
        </div >
    );
}

export default Category;