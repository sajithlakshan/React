import React, { createContext,useState } from 'react'
export const LoginContext = createContext();
const LoginContexProvider = ({children}) => {
    const [userDetails ,setUserDetails] = useState("Yoooooooo")
  return (
    <LoginContext.Provider value={userDetails}>
        {children}

    </LoginContext.Provider>
  )
}

export default LoginContexProvider