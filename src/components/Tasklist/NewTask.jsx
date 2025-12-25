import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { handleAccepted, handleFailed } from '../../utils/helper'

const NewTask = ({ data, id, idx }) => {
    const { category, date, taskDescription, taskTitle } = data
    const {  setUserData, setLoggedInUserData } = useContext(AuthContext)

    
    return (
        <div className="h-[280px] w-[300px] shrink-0 bg-blue-500/90 rounded-2xl p-5 flex flex-col">
            <div className="flex justify-between items-center mt-3">
                <h1 className="bg-blue-400 text-white px-3 py-1 text-xs rounded-md">{category}</h1>
                <h1 className="text-md">{date}</h1>
            </div>
            <h1 className="text-xl mt-5 font-medium">{taskTitle}</h1>
            <p className="mt-3 text-sm">{taskDescription}</p>
            <div className="mt-auto flex justify-between items-center">
                <button onClick={()=>{
                    handleAccepted(setUserData,setLoggedInUserData,id,idx,'newTask')
                }} className="bg-blue-700 text-white px-3 py-1 text-xs rounded-md shadow-lg -translate-y-1 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">Accepted</button>
                <button onClick={()=>{
                    handleFailed(setUserData,setLoggedInUserData,id,idx,'newTask')
                }} className="bg-blue-700 px-2 py-1 text-sm rounded shadow-lg -translate-y-1 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">Failed</button>
            </div>

        </div>


    )
}

export default NewTask

