import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { CompletedHandler, handleFailed } from '../../utils/helper'

const AcceptTask = ({ data, id, idx }) => {
    const { category, date, taskDescription, taskTitle } = data
    const { setUserData, loggedInUserData, setLoggedInUserData } = useContext(AuthContext)
    console.log(loggedInUserData)
    

    return (
        <div className='h-[280px] w-[300px]  shrink-0 bg-violet-500/90 rounded-2xl p-5 flex flex-col   '>
            <div className='flex justify-between items-center mt-3'>
                <h1 className='bg-purple-400 px-4 py-1 text-xs rounded-md  '>{category}</h1>
                <h1 className='text-md'>{date}</h1>
            </div>
            <h1 className='text-xl mt-5 font-medium'>{taskTitle}</h1>
            <p className='mt-3'>{taskDescription}</p>
            <div className='flex justify-between mt-auto '>
                <button onClick={()=>{
                    CompletedHandler(setUserData, setLoggedInUserData, id, idx, 'active')
                }} className='bg-purple-700 text-white px-3 py-1 text-xs rounded-md shadow-lg -translate-y-1 hover:-translate-y-2 hover:shadow-xl transition-all duration-300'>Completed</button>
                <button onClick={() => {
                    handleFailed(setUserData, setLoggedInUserData, id, idx, 'active')
                }} className='bg-purple-700 text-white px-3 py-1 text-xs rounded-md shadow-lg -translate-y-1 hover:-translate-y-2 hover:shadow-xl transition-all duration-300'>Failed</button>
            </div>
        </div>
    )
}

export default AcceptTask