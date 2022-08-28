import React, { useState, useEffect, useContext } from 'react';

import AuthContext from './contextStore/authContext'
import Login from './Login/LoginUseReducer';
import Home from './Home/Home';
import MainHeader from './MainHeader/MainHeader';

function Index() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const isLoggedInLocalStorage = localStorage.getItem('isLoggedIn')
  //   if (isLoggedInLocalStorage === '1') setIsLoggedIn(true)
  // }, [])


  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem('isLoggedIn', '1') //1:true, 0: false
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem('isLoggedIn')
  //   setIsLoggedIn(false);
  // };

  const ctx = useContext(AuthContext)
  return (
    <React.Fragment>
      {/* <AuthContext.Provider value={{'isLoggedIn': isLoggedIn, onLogout:logoutHandler}} > */}
        {/* <MainHeader onLogout={logoutHandler} /> */}
        <MainHeader />
        <main>
          {!ctx.isLoggedIn && <Login />}
          {ctx.isLoggedIn && <Home />}
        </main>
      {/* </AuthContext.Provider> */}
    </React.Fragment>
  );
}

export default Index;
