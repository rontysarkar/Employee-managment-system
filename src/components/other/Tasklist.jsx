import React from 'react'
import AcceptTask from '../Tasklist/AcceptTask'
import NewTask from '../Tasklist/NewTask'
import CompleteTask from '../Tasklist/CompleteTask'
import FailedTask from '../Tasklist/FailedTask'

const Tasklist = ({ data }) => {
    return (
        <div id='tasklist' className='h-70 w-full  overflow-x-auto  mt-10 flex justify-start items-center flex-nowrap gap-5'>
            {data.tasks.map((e) => {
                if(e.accepted){
                    return <AcceptTask data={e} />
                }
                if(e.newTask){
                    return <NewTask data={e} />
                }
                if(e.completed)
                {
                    return <CompleteTask data={e}/>
                }
                if(e.failed)
                {
                    return <FailedTask data={e}/>
                }
                

            })}

        </div>
    )
}

export default Tasklist