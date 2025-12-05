import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Product from './pages/Product'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Admin from './pages/Admin'
import Favorites from './pages/Favorites'
import Savat from './pages/Savat'
import Navbar from './components/Navbar'

function Root() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/categories/:name" element={<Categories />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/savat" element={<Savat />} />
            </Routes>
        </div>


    );
}

export default Root;