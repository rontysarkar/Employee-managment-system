import Header from "../other/Header"
import TaskInformation from "../other/TaskInformation"
import Tasklist from "../other/Tasklist"

const EmployeeDashboard = (props) => {
  return (
    <div className="p-20">
      <Header loginUser = {props.loginUser} data={props.data} />
      <TaskInformation data={props.data} />
      <Tasklist data={props.data} />
    </div>
  )
}

export default EmployeeDashboard