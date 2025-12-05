import { Tooltip } from '@mui/material';
import React, { useState } from 'react'
import { FaHeart, FaPenFancy, FaShoppingCart, FaTrashAlt } from 'react-icons/fa';
import { GrView } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';
import NotifyModal from '../NotifyModal/CategoryNotifyModal';
import RenameCategory from './RenameCategory';

function AdminClothes() {

  const [clothes, setClothes] = useState([
    {
      id: 1,
      name: "Futbolka Loro piano",
      price: 345,
      image: "https://images.shafastatic.net/2173223198",
    },
    {
      id: 2,
      name: "Kurtka Loro piano",
      price: 999,
      image: "https://images.shafastatic.net/1243131411",
    },
    {
      id: 3,
      name: "Loro piano Shim",
      price: 630,
      image: "https://luxire.com/cdn/shop/files/EGurkhaPantinDugdaleDarkGreyWoolFlannel_large.jpg?v=1733376935",
    },
    {
      id: 4,
      name: "Loro piano Lofer",
      price: 1225,
      image: "https://sloshoes.com/cdn/shop/files/Loro_Piana-MRN.jpg?v=1756213029",
    },
    {
      id: 5,
      name: "Loro piano kepka",
      price: 235,
      image: "https://di2ponv0v5otw.cloudfront.net/posts/2025/07/25/688436549f19e292722cbd2a/m_688600e47ac629cab0dd7cbd.jpg",
    },
  ]);

  return (
    <div className='grid grid-cols-5 gap-12 mb-12 '>
      {clothes?.map((item) => (
        <div key={item.key} className=' relative border-2 border-blue-400 rounded-xl overflow-hidden shadow-2xl'>
          <NavLink to={`/product/${item.name}`}>
            <img src={item.image} alt={item.name} className='h-[300px] w-full object-cover mx-auto' />
          </NavLink>
          <div className='m-4'>
            <h1 className='text-2xl'>{item.name}</h1>
            <p className='text-xl'>Narxi: {item.price} ming</p>
            <div className='flex item-center gap-6 text-xl mt-6 justify-end'>

              <NotifyModal message={"Siz bu ellonni o'chirib tashlamoqchimisiz. agar uni o'chirib tashlasangiz qayta tiklab bo'lmaydi."} id={item.id}>
                <Tooltip title="Delete">
                  <FaTrashAlt className='text-red-600' />
                </Tooltip>
              </NotifyModal>

              <RenameCategory category={item}>
                <Tooltip title="Change">
                  <FaPenFancy className='text-orange-500' />
                </Tooltip>
              </RenameCategory>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdminClothes;


