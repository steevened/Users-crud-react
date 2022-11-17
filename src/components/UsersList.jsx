import React from 'react'

const UsersList = ({ users, deleteModal, setAdd, select, selected }) => {
  return (
    <ul className=' px-12 py-12 container mx-auto grid md:grid-cols-2 gap-6 z-10'>
      {users?.map((user) => (
        <li
          key={user?.id}
          className={`${
            selected?.id === user.id ? 'animate-ping' : ''
          } bg-base-100 shadow-primary-content card card-side   items-center justify-between rounded-md`}
        >
          <div className='card-body py-3 px-6'>
            <h2 className='text-2xl font-bold'>
              {user?.first_name} {user.last_name}
            </h2>
            <div className='flex items-center gap-3'>
              <div className='text-primary'>
                <i className='fa-regular fa-envelope'></i>
              </div>
              <h3 className='md:text-base mb-[3px]'>{user?.email}</h3>
            </div>

            <h3 className=''>
              <span className='mr-3 text-primary'>
                <i className='fa-solid fa-cake-candles'></i>
              </span>
              {user?.birthday}
            </h3>
          </div>
          <div className=' gap-3  card-actions absolute right-5'>
            <button
              className='text-primary btn btn-sm btn-circle'
              onClick={() => deleteModal(user?.id)}
            >
              <i className='fa-regular fa-trash-can'></i>
            </button>
            <button
              onClick={() => {
                setAdd(true)
                select(user)
              }}
              className='text-primary btn btn-sm btn-circle'
            >
              <i className='fa-regular fa-pen-to-square'></i>
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default UsersList
