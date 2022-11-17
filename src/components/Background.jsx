import React from 'react'

const Background = ({ children, add }) => {
  return (
    <div
      className={`min-h-screen relative overflow-hidden bg-base-300 ${
        add && 'overflow-y-hidden '
      }`}
    >
      {children}
    </div>
  )
}

export default Background
