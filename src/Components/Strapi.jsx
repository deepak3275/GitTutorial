import React from 'react'
import Navbar from '../Navbar'
import Hero from './Hero'
import Sidebar from '../Sidebar'
import Submenu from '../Submenu'

const Strapi = () => {
 
  return (
    <div className='body'>
    <main>
        <Navbar />
        <Hero />
        <Sidebar />
        <Submenu />
    </main>
    </div>
  )
}

export default Strapi
