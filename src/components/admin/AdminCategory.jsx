import React, { useState } from 'react'
import { BiPlus } from 'react-icons/bi';
import { GiBilledCap, GiClothes, GiRunningShoe } from 'react-icons/gi';
import { PiPants } from 'react-icons/pi';
import { NavLink } from 'react-router-dom';
import AddCategory from './AddCategory';
import { GrView } from 'react-icons/gr';
import { FaPenFancy, FaTrashAlt } from 'react-icons/fa';
import { Tooltip } from '@mui/material';
import NotifyModal from '../NotifyModal/CategoryNotifyModal';
import RenameCategory from './RenameCategory';

function AdminCategory() {
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

        <div className='grid grid-cols-4 gap-12'>
            <AddCategory>
                <div className='h-full bg-blue-300 p-6 border-2 border-blue-200 rounded-xl overflow-hidden hover:scale-105 transition duration-300 cursor-pointer flex items-center justify-center'><BiPlus className='text-white text-7xl' /></div>
            </AddCategory>
            {categories?.map((item) => (
                <div key={item.id} className='bg-gray-100 p-6 border-2 border-blue-200 rounded-xl overflow-hidden hover:scale-105 transition duration-300 cursor-pointer'>
                    <div className='text-7xl text-center text-blue-400 flex justify-center'>
                        {item.icon}
                    </div>
                    <h1 className='text-2xl text-center mt-3'>
                        {item.name}
                    </h1>

                    <div className='flex item-center gap-6 text-xl mt-6 justify-end'>

                        <NavLink to={`/categories/${item.name}`}>
                            <Tooltip title="Kirish">
                                <GrView className='text-green-700' />
                            </Tooltip>
                        </NavLink>

                        <NotifyModal message={"Siz bu kategoriyani o'chirib tashlasangiz unga tegishli barcha elonlar o'chib ketadi va ularni orqaga qaytarib bo'lmaydi."} id={item.id}>
                            <Tooltip title="Delete"> 
                                <FaTrashAlt className='text-red-600' />
                            </Tooltip>
                        </NotifyModal>

                        <RenameCategory category={item}>
                        <Tooltip title="Change">
                            <FaPenFancy className='text-green-500' />
                        </Tooltip>
                        </RenameCategory>

                    </div>

                </div>
            ))}
        </div >
    );
}

export default AdminCategory;