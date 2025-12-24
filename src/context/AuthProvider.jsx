import { createContext, useEffect, useState } from "react"
import { getLocalStorage, setLocalStorage } from "../utils/localStorage"

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null)
    const [loggedInUserData, setLoggedInUserData] = useState(null)
    // localStorage.clear()

    useEffect(() => {
        setLocalStorage()
        const { employees, admin } = getLocalStorage()
        setUserData(employees)
    }, [])

    return (
        <div>
            <AuthContext.Provider value={{ userData, setUserData, loggedInUserData, setLoggedInUserData }}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider