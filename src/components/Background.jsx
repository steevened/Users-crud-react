import React from 'react'

const Background = ({ children, add }) => {
  return (
    <div
      className={`min-h-screen relative bg-slate-900/95 overflow-hidden  ${
        add && 'overflow-y-hidden'
      }`}
    >
      {children}
    </div>
  )
}

export default Background
