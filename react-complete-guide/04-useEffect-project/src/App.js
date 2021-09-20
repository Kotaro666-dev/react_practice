import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

const TRUE = '1';
const FALSE = '0';
const isLoggedInKey = 'isLoggedIn';

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const loginHandler = (email, password) => {
		// We should of course check email and password
		// But it's just a dummy/ demo anyways
		localStorage.setItem(isLoggedInKey, TRUE);
		setIsLoggedIn(true);
	};

	const logoutHandler = () => {
		localStorage.setItem(isLoggedInKey, FALSE);
		setIsLoggedIn(false);
	};

	useEffect(() => {
		const storedUserLoggedInInformation = localStorage.getItem(isLoggedInKey);

		if (storedUserLoggedInInformation === TRUE) {
			setIsLoggedIn(true);
		}
	}, []);

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;