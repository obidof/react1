import React, { useState } from 'react'
import { GiBilledCap, GiClothes, GiRunningShoe } from 'react-icons/gi';
import { PiPants } from 'react-icons/pi';

function Category() {
    const [categories, setCategories] = useState([
        {
            id: 1,
            name: "Kurtkalar va Svitrlar",
            icon: <GiClothes />,
        },
        {
            id: 2,
            name: "Shim va Shalvarlar",
            icon: <PiPants />,
        },
        {
            id: 3,
            name: "Oyoq kiyimlar",
            icon: <GiRunningShoe />,
        },
        {
            id: 4,
            name: "Bosh kiyimlar",
            icon: <GiBilledCap />
        },
    ])

    return (
        <div className='pt-28 grid grid-cols-4 gap-12'>
            {categories?.map((item) => (
                <div key={item.id} className='bg-gray-100 p-6 border-2 border-blue-200 rounded-xl overflow-hidden hover:scale-105 transition duration-300 cursor-pointer'>
                    <div className='text-7xl text-center text-blue-400 flex justify-center'>{item.icon}</div>
                    <h1 className='text-2xl text-center my-3'>{item.name}</h1>
                </div>
            ))}
        </div>
    );
}

export default Category;