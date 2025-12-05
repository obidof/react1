import { Checkbox } from '@mui/material';
import React, { useState } from 'react'
import { BiCheck } from 'react-icons/bi';
import { CgShoppingCart } from 'react-icons/cg';
import { useParams } from 'react-router-dom'

function Product() {

    const { id } = useParams();

    const productData = {
        name: "Loro piano Futbolka",
        price: "345 000",
        count: 4,
        images: [
            "https://paffos.com.ua/wp-content/uploads/2022/09/img_0024.jpeg",
            "https://luxe-crime.ru/upload/shop/photo-2024-04-16-21-16-06.jpg",
            "https://50.img.avito.st/image/1/1.tey5dra4GQWP39sA30jdxufXGwMH15sNz9IbBwnfEQ8P.C9gG7SY2DFcGy-M_ATZFFyjY-1oerQTq_z0JIehPq1s",
            "https://images.shafastatic.net/2173223198",
        ],
    };

    const [selectImg, setSelectImg] = useState(productData?.images[0]);

    return (
        <div className='pt-28'>
            <h1 className='text-3xl'>{productData?.name}</h1>
            <div className='my-8 productgrid'>
                <div className='grid-span border border-gray-400 rounded-2xl overflow-hidden'>
                    <img src={selectImg} className='w-full h-[880px] object-cover' alt="image" />
                </div>

                <div className='border border-gray-400 p-6 rounded-2xl'>
                    <h1 className='text-4xl font-bold text-blue-500'>{productData?.name}</h1>
                    <h1 className='text-3xl font-bold text-blue-500 mt-2'>Narxi: {productData?.price} So'm</h1>
                    <button className=' flex items-center gap-3 mt-3 px-10 py-3 bg-blue-400 text-xl text-white rounded-xl cursor-pointer active:scale-95'>
                        Savatga solish <CgShoppingCart size={25} />
                    </button>
                    <p className='my-4 flex gap-2'><BiCheck className='border rounded-xs bg-blue-300 text-white' size={25} /> {productData?.count} Ta sotib olishingiz mumkin</p>

                    <div className='grid grid-cols-2 gap-3'>
                        {productData?.images?.map((item) => (
                            <div key={item} className='border-2 rounded-2xl overflow-hidden border-blue-400 cursor-pointer aative:scale-90'>
                                <img onClick={() => setSelectImg(item)} className='h-full w-full object-cover' src={item} alt="image" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product