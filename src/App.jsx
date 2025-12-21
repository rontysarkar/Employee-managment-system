import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser)
    { const newData = JSON.parse(loggedInUser)
      setUser(newData.role)
      setLoggedInUserData(newData.data)
    }

  },[])
 
  const loginHandler = (email, password) => {
    if (email == "admin@gmail.com" && password == 12) {
      const admin = authData.admin.find((e) => e.email == email && e.password == password)
      if (admin) {
        setLoggedInUserData(admin)
        setUser("admin")
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin",data : admin }))
        
      }
    }
    else if (authData && authData.employees.find((e) => e.email == email && e.password == password)) {
      const employee = authData.employees.find((e) => e.email == email && e.password == password)
      if (employee) {
        setLoggedInUserData(employee)
        setUser("employee")
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data :employee }))
      }

    } else {
      alert("invalid Credentials")
    }
  }


  return (
    <>
      {!user ? <Login loginHandler={loginHandler} /> : ''}
      {user == "admin" ? <AdminDashboard data={loggedInUserData}  /> : user == "employee" ? <EmployeeDashboard data={loggedInUserData} /> : null}

    </>
  )
}

export default App