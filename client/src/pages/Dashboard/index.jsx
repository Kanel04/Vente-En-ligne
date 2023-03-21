import React from 'react'
import Products from './components/Products'
import Sidebar from './components/sidebar'

function DashboardPage() {
  return (
    <div className='flex flex-row bg-six'>
        <Sidebar></Sidebar>
        <Products></Products>
    </div>
  )
}

export default DashboardPage