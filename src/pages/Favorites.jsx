import React, { useState } from 'react'
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useGetNotify } from '../hooks/Notify';

function Favorites() {

  const notify = useGetNotify();
  const [Favorites, setFavorites] = useState([
    {
      id: 1,
      name: "Futbolka Loro piano",
      price: 345,
      image: "https://images.shafastatic.net/2173223198",
      isLiked: true,
    },
    {
      id: 2,
      name: "Kurtka Loro piano",
      price: 999,
      image: "https://images.shafastatic.net/1243131411",
      isLiked: true,
    },
    {
      id: 3,
      name: "Loro piano Shim",
      price: 630,
      image: "https://luxire.com/cdn/shop/files/EGurkhaPantinDugdaleDarkGreyWoolFlannel_large.jpg?v=1733376935",
      isLiked: true,
    },
    {
      id: 4,
      name: "Loro piano Lofer",
      price: 1225,
      image: "https://sloshoes.com/cdn/shop/files/Loro_Piana-MRN.jpg?v=1756213029",
      isLiked: true,
    },
    {
      id: 5,
      name: "Loro piano kepka",
      price: 235,
      image: "https://di2ponv0v5otw.cloudfront.net/posts/2025/07/25/688436549f19e292722cbd2a/m_688600e47ac629cab0dd7cbd.jpg",
      isLiked: true,
    },
  ]);

  const likedFunction = (id, isLiked) => {
    const liked = !isLiked;
    notify("ok", "Sevimlilardan olib tashlandi")
    console.log({ id, isLiked: liked });
  };

  return (
    <div>
      <h1 className='pt-28 text-2xl mb-12'>Sevimlilar</h1>
      <div className='grid grid-cols-5 gap-12 mb-12 '>
        {Favorites?.map((item) => (
          <div className=' relative border-2 border-blue-400 rounded-xl overflow-hidden shadow-2xl'>
            <span onClick={() => likedFunction(item.id, item.isLiked)} className={`text-2xl absolute right-2 top-2  cursor-pointer ${item.isLiked ? "text-red-700" : "text-gray-300"}`}><FaHeart /></span>
            <NavLink to={`/product/${item.name}`} key={item.key}>
              <img src={item.image} alt={item.name} className='h-[300px] w-full object-cover mx-auto' />
            </NavLink>
            <div className='m-4'>
              <h1 className='text-2xl'>{item.name}</h1>
              <p className='text-xl'>Narxi: {item.price} ming</p>
              <button className='text-2xl bg-blue-400 hover:bg-blue-500 w-full py-2 flex items-center text-white justify-center mt-4 transition rounded-xl  '>Savatga <FaShoppingCart /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Favorites;


