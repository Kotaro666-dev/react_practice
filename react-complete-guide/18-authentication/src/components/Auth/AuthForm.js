import { useState, useRef } from 'react';

import classes from './AuthForm.module.css';

const API_KEY = `${process.env.REACT_APP_AUTH_API_KEY}`;
const signUpApiUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
const signInApiUrl = ``;


const AuthForm = () => {
	const [isLogin, setIsLogin] = useState(true);
	const emailInputref = useRef();
	const passwordInputref = useRef();
	const [isLoarding, setIsLoarding] = useState(false);

	const switchAuthModeHandler = () => {
		setIsLogin((prevState) => !prevState);
	};

	const submitHandler = (event) => {
		event.preventDefault();

		const enteredEmail = emailInputref.current.value;
		const enteredPassword = passwordInputref.current.value;

		// Optional: Add validation;

		setIsLoarding(true);
		if (isLogin) {

		} else {
			// Sign Up

			const postData = async () => {

				try {
					const response = await fetch(signUpApiUrl, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({
							email: enteredEmail,
							password: enteredPassword,
							returnSecureToken: true,
						}),
					});
					setIsLoarding(false);
					if (response.status !== 200) {
						let errorMessage = 'Authentication failed! ';
						const data = await response.json();
						if (data && data.error && data.error.message) {
							errorMessage += data.error.message;
						}
						alert(errorMessage);
					}

				} catch (error) {
					console.log(error);
				};
			};

			postData();
		}
	}

	return (
		<section className={classes.auth}>
			<h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
			<form onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor='email'>Your Email</label>
					<input ref={emailInputref} type='email' id='email' required />
				</div>
					<div className={classes.control}>
					<label htmlFor='password'>Your Password</label>
					<input ref={passwordInputref} type='password' id='password' required />
				</div>
				<div className={classes.actions}>
					{!isLoarding && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
					{isLoarding && <p>Sending requret ....</p>}
					<button
						type='button'
						className={classes.toggle}
						onClick={switchAuthModeHandler}
					>
						{isLogin ? 'Create new account' : 'Login with existing account'}
					</button>
				</div>
			</form>
		</section>
	);
};

export default AuthForm;
