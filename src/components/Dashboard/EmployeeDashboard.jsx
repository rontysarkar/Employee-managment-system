import Header from "../other/Header"
import TaskInformation from "../other/TaskInformation"
import Tasklist from "../other/Tasklist"

const EmployeeDashboard = ({ data }) => {
  return (
    <div className="p-20">
      <Header data={data} />
      <TaskInformation data={data} />
      <Tasklist data={data} />
    </div>
  )
}

export default EmployeeDashboard