import React from 'react'
import Navbar from './components/navbar'
import Category from './components/categories/Category'
import Clothes from './components/clothes/Clothes'
import Profile from './components/Auth/Profile'


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