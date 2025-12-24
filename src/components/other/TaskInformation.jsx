import React from 'react'

const TaskInformation = ({data}) => {
    const {newTask,active,completed,failed} = data.taskCount;
  return (
    <div className='mt-20 flex gap-10'>
        <div className='w-[45%] h-30 bg-blue-500/90 rounded-xl p-6'>
            <h1 className='text-2xl font-medium'>{newTask}</h1>
            <h1 className='text-2xl font-medium'>New Task</h1>
        </div>
        <div className='w-[45%] h-30 bg-violet-500/90 rounded-xl p-6'>
            <h1 className='text-2xl font-medium'>{active}</h1>
            <h1 className='text-2xl font-medium'>Accepted Task</h1>
        </div>
        <div className='w-[45%] h-30 bg-emerald-500/90 rounded-xl p-6 '>
            <h1 className='text-2xl font-medium'>{completed}</h1>
            <h1 className='text-2xl font-medium'>Completed Task</h1>
        </div>
        <div className='w-[45%] h-30 bg-rose-500/90 rounded-xl p-6'>
            <h1 className='text-2xl font-medium'>{failed}</h1>
            <h1 className='text-2xl font-medium'>Failed Task</h1>
        </div>
        
    </div>
  )
}

export default TaskInformation