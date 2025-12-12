import React from 'react'
import { GiClothes } from 'react-icons/gi';
import Clothes from '../components/clothes/Clothes';
import { useParams } from 'react-router-dom';
import { usegetCatrgoryId } from '../hooks/categories';

function Categories() {

    const { id } = useParams();
    const  { data, isLoading, error } = usegetCatrgoryId(id)
    console.log(data)


    const categoryData = {
        id: 1,
        name: "Kurtkalar va Svitrlar",
        icon: <GiClothes />,
        count: 27,
    };

    return (
        <div className='pt-28'>
            <div className='flex items-center gap-6'>
                <div className='bg-blue-400 text-white text-7xl p-8 rounded-full inline-block '>
                    {categoryData?.icon}
                </div>
                <div>
                    <h1 className='text-3xl font-bold'>{categoryData?.name}</h1>
                    <p className='text-[14px] text-gray-700 mt-2'>{categoryData?.count} ta maxsulot topildi</p>
                    <p>{id}</p>
                </div>
            </div>
            <Clothes />
        </div>
    )
}

export default Categories;