import React from 'react'

const TaskInformation = ({data}) => {
    const {newTask,accepted,completed,failed} = data.taskCount;
  return (
    <div className='mt-20 flex gap-10'>
        <div className='w-[45%] h-30 bg-amber-500 rounded-xl p-6'>
            <h1 className='text-2xl font-medium'>{newTask}</h1>
            <h1 className='text-2xl font-medium'>New Task</h1>
        </div>
        <div className='w-[45%] h-30 bg-fuchsia-500 rounded-xl p-6'>
            <h1 className='text-2xl font-medium'>{accepted}</h1>
            <h1 className='text-2xl font-medium'>Accepted Task</h1>
        </div>
        <div className='w-[45%] h-30 bg-lime-500 rounded-xl p-6'>
            <h1 className='text-2xl font-medium'>{completed}</h1>
            <h1 className='text-2xl font-medium'>Completed Task</h1>
        </div>
        <div className='w-[45%] h-30 bg-red-500 rounded-xl p-6'>
            <h1 className='text-2xl font-medium'>{failed}</h1>
            <h1 className='text-2xl font-medium'>Failed Task</h1>
        </div>
        
    </div>
  )
}

export default TaskInformation