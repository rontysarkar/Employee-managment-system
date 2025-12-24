import React from 'react'

const CompleteTask = ({ data }) => {
    const { category, date, taskDescription, taskTitle } = data
    return (
        <div className='h-[280px] w-[300px]  shrink-0 bg-emerald-500/90 rounded-2xl p-5  flex flex-col  '>
            <div className='flex justify-between items-center mt-3'>
                <h1 className='bg-green-400 text-white px-3 py-1 text-xs rounded-md '>{category}</h1>
                <h1 className='text-md'>{date}</h1>
            </div>
            <h1 className='text-xl mt-5 font-medium'>{taskTitle}</h1>
            <p className='mt-3'>{taskTitle}</p>
            <div className='mt-auto flex justify-between items-center'>
                <button className='bg-green-700 text-white px-3 py-1 text-xs rounded-md ml-auto shadow-lg -translate-y-1 hover:-translate-y-2 hover:shadow-xl transition-all duration-300'>Failed</button>
            </div>
        </div>
    )
}

export default CompleteTask