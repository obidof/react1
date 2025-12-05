import React, { useState } from 'react'

function Savat() {
    const [clothes, setClothes] = useState([
        {
            id: 1,
            name: "Futbolka Loro piano",
            price: "345 000",
            image: "https://images.shafastatic.net/2173223198",
            isLiked: false,
        },
        {
            id: 2,
            name: "Kurtka Loro piano",
            price: "999 000",
            image: "https://images.shafastatic.net/1243131411",
            isLiked: false,
        },
        {
            id: 3,
            name: "Loro piano Shim",
            price: "630 000",
            image: "https://luxire.com/cdn/shop/files/EGurkhaPantinDugdaleDarkGreyWoolFlannel_large.jpg?v=1733376935",
            isLiked: false,
        },
    ]);

    const [shopping, setShopping] = useState(false)
    const rasmiy = (id) => {
        console.log(id);
        setShopping(true);
    };

    const deleted = (id) => {
        console.log(id);
    };

    return (
        
        <div className='pt-28'>
            <h1 className='text-2xl'>Savatingiz <span className='text-gray-500'>1 maxsulot</span></h1>
            <div className='mt-12 grid grid-cols-2 gap-12' >
                {clothes?.map((item) => (
                    <div key={item.id} className='border border-gray-600 p-4 rounded-xl flex gap-15 items-end '>
                        <div>
                            <img className='w-[200px] rounded-xl mb-2' src={item.image} alt="img" />
                            <h1 className='text-2xl text-center'>{item.name}</h1>
                            <h1 className='text-2xl mt-1'>Narxi: {item.price} So'm</h1>

                        </div>
                        <div className='flex gap-6 items-end'>
                            <button onClick={() => rasmiy(item.id)} className='text-white bg-blue-400 cursor-pointer rounded-xl px-9 py-2 block '>{shopping ? "Tayyorlanmoqda" : "Rasmiylashtirish"}</button>
                            <button onClick={() => deleted(item.id)} className='text-white bg-red-500 cursor-pointer rounded-xl px-6 py-2 block mt-2 '>Savatdan olib tashlash</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Savat