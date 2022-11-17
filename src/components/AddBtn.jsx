import React from 'react'

const AddBtn = ({ setAdd, add }) => {
  return (
    <div
      onClick={() => setAdd(true)}
      className='btn  btn-outline btn-primary btn-circle fixed bottom-10 right-7 md:right-[68px] grid place-content-center  '
    >
      <i className='fa-solid fa-user-plus'></i>
    </div>
  )
}

export default AddBtn
