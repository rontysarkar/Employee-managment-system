import React from 'react'

const AcceptTask = ({data}) => {
    const {category,date,taskDescription,taskTitle} = data
    return (
        <div className='h-full w-[300px] shrink-0 bg-fuchsia-400 rounded-2xl p-5    '>
            <div className='flex justify-between items-center mt-3'>
                <h1 className='bg-red-700 px-4 py-1 rounded-md '>{category}</h1>
                <h1 className='text-md'>{date}</h1>
            </div>
            <h1 className='text-xl mt-5 font-medium'>{taskTitle}</h1>
            <p className='mt-3'>{taskDescription}</p>
            <div className='flex justify-between mt-5 '>
                <button className='bg-green-500 px-2 py-1 text-sm rounded'>Complated</button>
                <button className='bg-red-500 px-2 py-1 text-sm rounded'>Failed</button>
            </div>
        </div>
    )
}

export default AcceptTask