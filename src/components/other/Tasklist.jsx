import React from 'react'
import AcceptTask from '../Tasklist/AcceptTask'
import NewTask from '../Tasklist/NewTask'
import CompleteTask from '../Tasklist/CompleteTask'
import FailedTask from '../Tasklist/FailedTask'

const Tasklist = ({ data }) => {
    return (
        <div id='tasklist' className='h-70 w-full  overflow-x-auto  mt-10 flex justify-start items-center flex-nowrap gap-5'>
            {data.tasks.map((e,idx) => {
                if(e.accepted){
                    return <AcceptTask key={idx} data={e} />
                }
                if(e.newTask){
                    return <NewTask key={idx} data={e} />
                }
                if(e.completed)
                {
                    return <CompleteTask key={idx} data={e}/>
                }
                if(e.failed)
                {
                    return <FailedTask key={idx} data={e}/>
                }
                

            })}

        </div>
    )
}

export default Tasklist