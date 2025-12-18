import Header from "../other/Header"
import TaskInformation from "../other/TaskInformation"
import Tasklist from "../other/Tasklist"

const EmployeeDashboard = () => {
  return (
    <div className="p-20">
        <Header/>
        <TaskInformation/>
        <Tasklist/>
    </div>
  )
}

export default EmployeeDashboard