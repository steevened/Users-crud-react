import React from 'react'

const UsersList = ({ users, deleteModal, setAdd, select, selected }) => {
  return (
    <ul className='text-gray-300 px-5 py-3 mx-2 grid md:grid-cols-2  mt-24  gap-5 z-10'>
      {users?.map((user) => (
        <li
          key={user?.id}
          className={`${
            selected?.id === user.id ? 'animate-ping' : ''
          }bg-gradient-to-r to-slate-700/90 from-slate-700/10 shadow-slate-900  px-5 flex items-center justify-between py-2 rounded shadow-lg`}
        >
          <div>
            <h2 className='text-2xl font-bold'>
              {user?.first_name} {user.last_name}
            </h2>
            <h3 className='mt-2 text-sm md:text-base'>
              <span className='mr-2 text-sky-700'>
                <i className='fa-regular fa-envelope'></i>
              </span>
              {user?.email}
            </h3>
            <h3 className='mt-1'>
              <span className='mr-3 text-sky-700'>
                <i className='fa-solid fa-cake-candles'></i>
              </span>
              {user?.birthday}
            </h3>
          </div>
          <div className='flex gap-3'>
            <button
              className='text-sky-700 '
              onClick={() => deleteModal(user?.id)}
            >
              <i className='fa-regular fa-trash-can'></i>
            </button>
            <button
              onClick={() => {
                setAdd(true)
                select(user)
              }}
              className='text-sky-700'
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
