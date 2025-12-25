import React, { useContext } from 'react'
import { handleAccepted } from '../../utils/helper'
import { AuthContext } from '../../context/AuthProvider'

const FailedTask = ({data,id,idx}) => {
  const {category,date,taskDescription,taskTitle} = data
  const {setUserData,setLoggedInUserData} = useContext(AuthContext)
  return (
    <div className='h-[280px] w-[300px]  shrink-0 bg-rose-500/90 rounded-2xl p-5 flex flex-col   '>
            <div className='flex justify-between items-center mt-3'>
                <h1 className='bg-red-400 text-white px-3 py-1 text-xs rounded-md'>{category}</h1>
                <h1 className='text-md'>{date}</h1>
            </div>
            <h1 className='text-xl mt-5 font-medium'>{taskTitle}</h1>
            <p className='mt-3'>{taskDescription}</p>
            <div className='flex  mt-auto '>
                <button onClick={()=>{
                  handleAccepted(setUserData,setLoggedInUserData,id,idx,'failed')
                }} className='bg-red-800 text-white px-3 py-1 text-xs rounded-md ml-auto shadow-lg -translate-y-1 hover:-translate-y-2 hover:shadow-xl transition-all duration-300'>Accepted</button>
            </div>
        </div>
  )
}

export default FailedTask