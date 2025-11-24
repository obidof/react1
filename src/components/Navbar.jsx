import React from 'react'
import { FaHeart, FaRegUserCircle, FaShoppingCart } from 'react-icons/fa'
import Register from './Auth/Register';

function Navbar() {
    return (
        <div className='bg-blue-400 text-white py-4 px-12 flex justify-between items-center fixed w-full left-0'>
            <h2 className='text-3xl font-bold'>Logo</h2>

            <div>
                <input className='border outline-0 p-2 rounded-xl w-[600px]' type="text" placeholder='maxsulot qidirish' />
            </div>

            <div className='flex  items-center gap-12'>
                <a href="#Sevimlilar" className='flex text-xl items-center gap-2'>Sevimlilar <FaHeart /></a>
                <a href="#" className='flex text-xl items-center gap-2'>Savat <FaShoppingCart /></a>
            </div>

            <Register>
                <button className='flex text-xl items-center gap-2 border py-2 px-6 rounded-2xl cursor-pointer active:scale-90'>Kirish <FaRegUserCircle /></button> 
            </Register>
        </div>
    );
}

export default Navbar;