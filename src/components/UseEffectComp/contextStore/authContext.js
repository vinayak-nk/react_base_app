import React, { useState, useEffect } from 'react'

const initialState = {
    isLoggedIn: false,
    onLogin: (email, password) => {},
    onLogout: () => {},
}

const AuthContext = React.createContext(initialState)

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const isLoggedInLocalStorage = localStorage.getItem('isLoggedIn')
        if (isLoggedInLocalStorage === '1') setIsLoggedIn(true)
      }, [])    

      const loginHandler = (email, password) => {
        localStorage.setItem('isLoggedIn', '1') //1:true, 0: false
        setIsLoggedIn(true);
      };
    
      const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false);
      };
    
    return (
        <AuthContext.Provider  
            value={{
                isLoggedIn,
                onLogin: loginHandler,
                onLogout: logoutHandler,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}


export default AuthContext