import React from 'react'

const Buttons = ({style, text}) => {
  return (
    <button type='submit' className={`${style} rounded-md text-base font-medium tracking-wider h-8 min-w-fit px-7 flex justify-center items-center`}>{text}</button>
  )
}

export default Buttons