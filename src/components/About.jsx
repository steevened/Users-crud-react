import React from 'react'
import Background from './Background'

const About = () => {
  return (
    <div className='absolute top-1/2 left-1/2 w-5/6  text-center shadow-lg shadow-neutral rounded-box bg-base-300 h-2/4 px-6 py-10 -translate-x-1/2 -translate-y-1/2 max-w-[512px]'>
      <h2 className=' text-2xl md:text-3xl font-bold '>USER'S CRUD</h2>
      <h3 className='text-xl md:text-2xl mt-4'>Version 1.0.0</h3>
      <h3 className='text-lg md:text-xl mt-2'>Made by Steven Alvarado</h3>
      <div className='flex items-center justify-center gap-5 text-4xl md:text-4xl mt-5'>
        <button>
          <a
            target='_blank'
            href='https://github.com/steevened/Users-crud-react'
          >
            <i class='fa-brands fa-github'></i>
          </a>
        </button>
        <button>
          <a target='_blank' href='https://www.linkedin.com/in/steevened/'>
            <i class='fa-brands fa-linkedin'></i>
          </a>
        </button>
      </div>
    </div>
  )
}

export default About
