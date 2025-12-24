import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {
    const [taskTitle, setTaskTitle] = useState('')
    const [date, setDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')
    const [taskDescription, setTaskDescription] = useState('')

    const {userData, setUserData} = useContext(AuthContext)


    const submitHandler = (e) => {
        e.preventDefault()
        const task = { taskTitle, taskDescription, date, category, active: false, completed: false, failed: false, newTask: true }

        setUserData(prev => {
            const updateData = prev.map((e) => {
                if (e.firstName == asignTo) {
                    return {
                        ...e,
                        tasks: [...e.tasks, task],
                        taskCount: {
                            ...e.taskCount,
                            newTask: e.taskCount.newTask + 1
                        }
                    }
                }
                return e;
            })

            localStorage.setItem('employees', JSON.stringify(updateData))
            return updateData;
        })
        setTaskTitle('')
        setTaskDescription('')
        setDate('')
        setAsignTo('')
        setCategory('')
    }
    return (
        <div className='p-10 bg-[#1c1c1c] mt-10'>
            <form onSubmit={(e) => { submitHandler(e) }} className='flex justify-between  gap-20'>
                <div className='w-2/5'>
                    <div>
                        <h1 className='mb-1'>Task Title</h1>
                        <input value={taskTitle} onChange={(e) => {
                            setTaskTitle(e.target.value)
                        }} className='border-2 border-gray-400 w-full rounded-sm placeholder:text-gray-400  py-2 px-3' type="text" placeholder='Enter title' />
                    </div>
                    <div className='mt-4'>
                        <h1 className='mb-1'>Date</h1>
                        <input value={date} onChange={(e) => {
                            setDate(e.target.value)
                        }} className='border-2 border-gray-400 w-full rounded-sm py-2  px-3' type="date" />
                    </div>
                    <div className='mt-4'>
                        <h1 className='mb-1'>Asign to</h1>
                        <input value={asignTo} onChange={(e) => {
                            setAsignTo(e.target.value)
                        }} className='border-2 border-gray-400 w-full rounded-sm placeholder:text-gray-400  py-2 px-3' type="text" placeholder='Employee name' />
                    </div>
                    <div className='mt-4'>
                        <h1 className='mb-1'>Category</h1>
                        <input value={category} onChange={(e) => {
                            setCategory(e.target.value)
                        }} className='border-2 border-gray-400 w-full rounded-sm placeholder:text-gray-400  py-2 px-3' type="text" placeholder='Design,dev,etc' />
                    </div>

                </div>
                <div className='w-2/5'>
                    <h1>Description</h1>
                    <textarea value={taskDescription} onChange={(e) => {
                        setTaskDescription(e.target.value)
                    }} className='border-2 border-gray-400 w-full rounded-sm placeholder:text-gray-400 py-2 px-3' name="" id="" cols="30" rows="10"></textarea>
                    <button className='w-full bg-green-900 mt-2 py-3 font-medium active:scale-95'>Create Task</button>
                </div>

            </form>

        </div>
    )
}

export default CreateTask