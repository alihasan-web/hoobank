import React from 'react'

const Button = ({style}) => {
  return (
    <button type='button' className={`${style} py-4 px-6 font-poppins font-medium text-primary outline-none rounded-[10px] bg-blue-gradient `}>
        Get Started
    </button>
  )
}

export default Button
