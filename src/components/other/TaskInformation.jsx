import React from 'react'

const TaskInformation = () => {
  return (
    <div className='mt-20 flex gap-10'>
        <div className='w-[45%] h-30 bg-amber-500 rounded-xl p-6'>
            <h1 className='text-2xl font-medium'>0</h1>
            <h1 className='text-2xl font-medium'>New Task</h1>
        </div>
        <div className='w-[45%] h-30 bg-fuchsia-500 rounded-xl p-6'>
            <h1 className='text-2xl font-medium'>0</h1>
            <h1 className='text-2xl font-medium'>New Task</h1>
        </div>
        <div className='w-[45%] h-30 bg-lime-500 rounded-xl p-6'>
            <h1 className='text-2xl font-medium'>0</h1>
            <h1 className='text-2xl font-medium'>New Task</h1>
        </div>
        <div className='w-[45%] h-30 bg-orange-500 rounded-xl p-6'>
            <h1 className='text-2xl font-medium'>0</h1>
            <h1 className='text-2xl font-medium'>New Task</h1>
        </div>
        
    </div>
  )
}

export default TaskInformation