import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const [userData, setUserData] = useContext(AuthContext)
    return (
        <div id='tasklist' className='px-10 py-6 bg-[#1c1c1c]  mt-4'>
            <div className='bg-orange-400 mb-4 p-3 flex justify-between px-25 rounded text-xl'>
                <h1>Employee Name</h1>
                <h2>New Task</h2>
                <h3>Active Task</h3>
                <h1>Completed</h1>
                <h1>Failed</h1>
            </div>
            <div className='h-76 overflow-auto'>
                {userData.map((e, idx) => {
                    return <div key={idx} className='border-green-700 border-2 mb-4 p-3 flex justify-between px-25 rounded text-lg'>
                        <h1>{e.firstName}</h1>
                        <h2>{e.taskCount.newTask}</h2>
                        <h3>{e.taskCount.active}</h3>
                        <h1>{e.taskCount.completed}</h1>
                        <h1 className=''>{e.taskCount.failed}</h1>
                    </div>
                })}

            </div>


        </div>
    )
}

export default AllTask