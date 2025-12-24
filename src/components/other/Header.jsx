import React from 'react'

const Header = (props) => {
  const handleLogOut = () => {
    localStorage.setItem("loggedInUser", '')
    props.loginUser('')
  }
  return (
    <div className='flex justify-between items-center'>
      <h1 className='text-2xl font-medium '>Hello <br /> <span className='font-bold text-3xl'>{props.data.firstName} 👋</span></h1>
      <button onClick={handleLogOut} className='bg-red-800 text-white px-4 py-1 text-lg rounded-md  shadow-lg -translate-y-1
  hover:-translate-y-2
  hover:shadow-xl
  transition-all duration-300'>Logout</button>

    </div>
  )
}

export default Header