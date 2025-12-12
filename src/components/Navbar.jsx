import React from 'react'
import { FaHeart, FaRegUserCircle, FaShoppingCart, FaUserTie } from 'react-icons/fa'
import Register from './Auth/Register';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from "../assets/Logo.png"
import { useGetUser } from '../hooks/user';
import ProfileModal from './Auth/Profile';
function Navbar() {
    const { data, isLoading, error } = useGetUser()
    const role = data?.role

    const nav = useNavigate();
    const homeNavigate = () => {
        nav("/");
    }

    return (
        <div className='z-50 bg-blue-400 text-white py-4 px-12 flex justify-between items-center fixed w-full left-0'>
            <div onClick={homeNavigate}>
                <img className='w-50 ' src={Logo} alt="" />
            </div>
            <div>
                <input className='border outline-0 p-2 rounded-xl w-[600px]' type="text" placeholder='maxsulot qidirish' />
            </div>

            <div className='flex  items-center gap-12'>
                <NavLink to={"/favorites"} className='flex text-xl items-center gap-2'>Sevimlilar <FaHeart /></NavLink>
                <NavLink to={"/savat"} className='flex text-xl items-center gap-2'>Savat <FaShoppingCart /></NavLink>
                {role == "admin" ? <NavLink to={'/admin'} className='flex text-xl items-center gap-2 border px-4 py-2 rounded-2xl'>Admin <FaUserTie /></NavLink> : ''}
            </div>


            {role ?
                <ProfileModal />
                :
                <Register>
                    <button className='flex text-xl items-center gap-2 border py-2 px-6 rounded-2xl cursor-pointer active:scale-90'>Kirish <FaRegUserCircle /></button>
                </Register>

            }
        </div>
    );
}

export default Navbar;