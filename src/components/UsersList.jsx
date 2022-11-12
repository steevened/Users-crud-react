import React from 'react'

const UsersList = ({ users, deleteUser }) => {
  return (
    <ul className='text-gray-300  px-5 py-3 mx-2  flex flex-col  gap-5'>
      {users?.map((user) => (
        <li
          key={user?.id}
          className='bg-slate-700/60 shadow-neutral-900 shadow-lg px-5 flex items-center justify-between py-2 rounded'
        >
          <div>
            <h2 className='text-2xl font-bold'>
              {user?.first_name} {user.last_name}
            </h2>
            <h3 className='mt-2'>
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
              onClick={() => deleteUser(user?.id)}
            >
              <i className='fa-regular fa-trash-can'></i>
            </button>
            <button className='text-sky-700'>
              <i className='fa-regular fa-pen-to-square'></i>
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default UsersList
