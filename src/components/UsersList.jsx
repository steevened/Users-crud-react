import React from 'react'

const UsersList = ({ users, deleteModal, setAdd, select, selected }) => {
  return (
    <ul className='px-12 py-12 container mx-auto grid md:grid-cols-2 gap-6 z-10'>
      {users?.map((user) => (
        <li
          key={user?.id}
          className={`${
            selected?.id === user.id ? 'animate-ping' : ''
          } bg-base-100 shadow-neutral-focus  px-5 flex items-center justify-between py-2 rounded shadow-lg`}
        >
          <div>
            <h2 className='text-2xl font-bold'>
              {user?.first_name} {user.last_name}
            </h2>
            <h3 className='mt-2 text-sm md:text-base'>
              <span className='mr-2 text-primary'>
                <i className='fa-regular fa-envelope'></i>
              </span>
              {user?.email}
            </h3>
            <h3 className='mt-1'>
              <span className='mr-3 text-primary'>
                <i className='fa-solid fa-cake-candles'></i>
              </span>
              {user?.birthday}
            </h3>
          </div>
          <div className='flex gap-3'>
            <button
              className='text-primary '
              onClick={() => deleteModal(user?.id)}
            >
              <i className='fa-regular fa-trash-can'></i>
            </button>
            <button
              onClick={() => {
                setAdd(true)
                select(user)
              }}
              className='text-primary'
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
