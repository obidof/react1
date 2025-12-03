import React from 'react'
import Category from '../components/categories/Category'
import Clothes from '../components/clothes/Clothes'
import Profile from '../components/Auth/Profile'


function App() {
  return (
    <div>
      <Profile />
      <Category />
      <Clothes />
    </div>
  )
}

export default App