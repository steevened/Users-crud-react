import React from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import axios from 'axios'

const UsersForm = ({ getUsers, setAdd }) => {
  const { register, handleSubmit } = useForm()

  const postUsers = (data) => {
    axios
      .post('https://users-crud1.herokuapp.com/users/', data)
      .then(() => getUsers())
  }

  const alert = () => {
    Swal.fire({
      title: 'Done',
      text: 'User added succesfully!',
      icon: 'success',
      showConfirmButton: true,
      // timer: 2000,
      background: '#0f172a',
      color: '#d1d5db',
    })
  }

  const submit = (data) => {
    postUsers(data)
    setAdd(false)
    alert()
  }

  return (
    <div className='overflow-y-auto bg-slate-900/80 fixed top-0 left-0 right-0 bottom-0 overflow-x-hidden jumper'>
      <form
        onSubmit={handleSubmit(submit)}
        className='bg-slate-900 relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  p-5 rounded-[5px] shadow-lg shadow-slate-900 w-[400px] z-20  md:w-[512px] h-[345px] lg-h-[352px] pb-0  transition-transform'
      >
        <h2 className='text-3xl text-center text-gray-300 py-3'>Add User</h2>
        <div className='w-full flex flex-col md:flex-row gap-3 md:gap-3 '>
          <input
            className='w-full px-2 py-[2px] bg-slate-700 rounded text-gray-300 placeholder:text-gray-300 text-center focus:outline-none '
            type='text'
            id='first_name'
            {...register('first_name')}
            placeholder='First Name'
            required
          />
          <input
            className='w-full px-2 py-[2px] bg-slate-700 rounded text-gray-300 placeholder:text-gray-300 text-center focus:outline-none '
            id='last_name'
            type='text'
            {...register('last_name')}
            placeholder='Last Name'
            required
          />
        </div>
        <div className='flex flex-col gap-3 mt-3'>
          <input
            className='px-2 py-[2px] bg-slate-700 rounded placeholder:text-gray-300 text-center text-gray-300 focus:outline-none '
            type='email'
            id='email'
            placeholder='Email'
            {...register('email')}
            required
          />
          <input
            className='px-2 py-[2px] bg-slate-700 rounded placeholder:text-gray-300 text-center text-gray-300 focus:outline-none '
            type='password'
            id='password'
            placeholder='Password'
            {...register('password')}
            required
          />
          <input
            className='block px-2 py-[2px] bg-slate-700 rounded placeholder:text-gray-300 text-center text-gray-300 focus:outline-none '
            type='date'
            id='birthday'
            placeholder='Birthday'
            {...register('birthday')}
            required
          />
        </div>
        <div className='grid place-content-center text-gray-300 font-bold mt-3 w-full md:text-xl'>
          <button className='py-[3px] px-6 rounded shadow-md shadow-gray-900 bg-sky-900 mt-1 md:mt-5 '>
            Set
          </button>
        </div>
      </form>
    </div>
  )
}

export default UsersForm
