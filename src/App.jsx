import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,setUserData] = useContext(AuthContext)

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
      
        setLoggedInUserData("admin")
        setUser("admin")
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin"}))
        
    }
    else if (userData && userData.find((e) => e.email == email && e.password == password)) {
      const employee = userData.find((e) => e.email == email && e.password == password)
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
      {user == "admin" ? <AdminDashboard loginUser={setUser}  /> : user == "employee" ? <EmployeeDashboard loginUser={setUser}  data={loggedInUserData} /> : null}

    </>
  )
}

export default App