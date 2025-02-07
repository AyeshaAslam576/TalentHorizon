import React from 'react'
import Header from '@/components/header'
import { Outlet } from 'react-router-dom'
const AppLayout = () => {
  return (
    <div>
      <div className='grid-background'> </div>
        
        <main className='min-h-screen mr-auto ml-auto pr-8 pl-8 min-w-[1400px] max-w-[1400px]'>
          <Header/>
        <Outlet />
        </main>
        <div className='p-10 text-center bg-gray-800 mt-10'>Made with ❤️ by FAM</div>
    </div>
  )
}

export default AppLayout