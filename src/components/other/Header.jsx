import React from 'react'

const Header = ({data}) => {

  const handleLogOut =()=>{
    localStorage.setItem("loggedInUser",'')
    window.location.reload()
  }
  return (
    <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-medium '>Hello <br /> <span className='font-bold text-3xl'>{data.firstName} 👋</span></h1>
        <button onClick={handleLogOut} className='bg-red-500 py-1 px-2 font-medium text-lg'>Logout</button>
        
    </div>
  )
}

export default Header