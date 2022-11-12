import React from 'react'

const AddBtn = ({ setAdd, add }) => {
  return (
    <div
      onClick={() => setAdd(true)}
      className='bg-gray-600 fixed bottom-10 right-5 cursor-pointer hover:-translate-y-1 active:-translate-y-[2px] transition-transform text-white w-10 h-10 grid place-content-center rounded-full shadow-lg shadow-gray-900'
    >
      <i className='fa-solid fa-user-plus'></i>
    </div>
  )
}

export default AddBtn
