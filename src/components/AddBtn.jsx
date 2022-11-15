import React from 'react'

const AddBtn = ({ setAdd, add }) => {
  return (
    <div
      onClick={() => setAdd(true)}
      className='bg-gray-600 fixed bottom-10 right-5 cursor-pointer hover:-translate-y-1  active:-translate-y-[2px] transition-transform text-slate-800/95 w-10 h-10 grid place-content-center rounded-full shadow-lg shadow-gray-900 hover:shadow-[0_10px_15px_rgba(0,0,0,0.9)] hover:shadow-gray-900'
    >
      <i className='fa-solid fa-user-plus'></i>
    </div>
  )
}

export default AddBtn
