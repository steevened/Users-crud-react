import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className='flex justify-between items-center absolute top-0 left-0 right-0 w-full z-20 bg-gradient-to-r to-slate-700/90 from-slate-700/10 shadow-slate-900 px-7 md:px-[70px] py-5 text-slate-200 shadow-md'>
      <div onClick={() => navigate('/')} className='cursor-pointer'>
        <h1 className='text-2xl md:text-4xl font-bold'>USER'S CRUD</h1>
      </div>
      <div
        onClick={() => navigate('/about')}
        className=' text-xl text-slate-600/90 cursor-pointer'
      >
        <i class='fa-solid fa-circle-question'></i>
      </div>
    </div>
  )
}

export default Navbar
