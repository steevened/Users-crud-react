import React from 'react'

const Background = ({ children, add }) => {
  return (
    <div
      className={`min-h-screen md:px-10 relative bg-slate-900/95 overflow-hidden  ${
        add && 'overflow-y-hidden'
      }`}
    >
      {children}
    </div>
  )
}

export default Background
