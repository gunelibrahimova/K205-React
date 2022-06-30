import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../components/Cart/Cart'
import Register from '../components/Register/Register'
import About from '../screens/About'
import Auth from '../screens/Auth'
import Dashboard from '../screens/Dashboard'
import Detail from '../screens/Detail'
import Home from '../screens/Home'

const MyRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/about' element={<About />} />
      <Route path='/detail/:id' element={<Detail />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/register' element={<Register />} />

    </Routes>
  )
}

export default MyRouter