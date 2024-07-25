import React from 'react'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'

const baseLayout = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar />
      <div>
        <div >
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default baseLayout
