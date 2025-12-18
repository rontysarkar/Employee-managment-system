import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-medium '>Hello <br /> <span className='font-bold text-3xl'>Ronty 👋</span></h1>
        <button className='bg-red-500 py-2 px-3 font-medium text-xl'>Logout</button>
        
    </div>
  )
}

export default Header