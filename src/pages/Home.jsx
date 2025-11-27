import React from 'react'
import Category from '../components/categories/Category'
import Clothes from '../components/clothes/Clothes'
import Profile from '../components/Auth/Profile'
import Navbar from '../components/Navbar'


function App() {
  return (
    <div>
      <Navbar />
      <Profile />
      <Category />
      <Clothes />
    </div>
  )
}

export default App