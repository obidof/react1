import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './pages/Home'
import { ImGift } from 'react-icons/im'
import NotFound from './pages/NotFound'
import Product from './pages/Product'

function Root() {
    return (

        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/admin' element={<h1>Admin sahifasi</h1>} />

            <Route path='*' element={<NotFound />} />
            <Route path='/product/:name' element={<Product />} />

        </Routes>
    )
}

export default Root