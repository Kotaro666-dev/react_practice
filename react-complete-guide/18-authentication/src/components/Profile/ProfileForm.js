import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../store/auth-slice';
import { useHistory } from 'react-router';
import { localStorageKey } from '../../helper/localStorage';

import classes from './ProfileForm.module.css';

const API_KEY = `${process.env.REACT_APP_AUTH_API_KEY}`;
const changePasswordApiUrl = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`;

const ProfileForm = () => {
	const newPasswordRef = useRef();
	const dispatch = useDispatch();
	const [isLoarding, setIsLoarding] = useState(false);
	const idToken = useSelector(state => state.auth.idToken);
	const history = useHistory();

	const submitHandler = (event) => {
		event.preventDefault();

		const enteredNewPassword = newPasswordRef.current.value;

		// Option: Add validation

		const postData = async () => {
			setIsLoarding(true);
			const response = await fetch(changePasswordApiUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					idToken: idToken,
					password: enteredNewPassword,
					returnSecureToken: true,
				}),
			});
			setIsLoarding(false);

			if (response.status !== 200) {
				const data = await response.json();
				let message = 'Authentication failed! ';
				if (data && data.error && data.error.message) {
					message += data.error.message;
				}
				alert(message);
			}

			const data = await response.json();
			localStorage.remove(localStorageKey);
			dispatch(authActions.updateIdToken(data.idToken));
			localStorage.setItem(
				localStorageKey, data.idToken
			);
			history.replace('/');
		};

		try {
			postData();
		} catch(error) {
			console.log(error);
		}
	};


	return (
		<form onSubmit={submitHandler} className={classes.form}>
			<div className={classes.control}>
				<label htmlFor='new-password'>New Password</label>
				<input ref={newPasswordRef} type='password' id='new-password'/>
			</div>
			<div className={classes.action}>
				{!isLoarding && <button>Change Password</button>}
				{isLoarding && <p>Sending request ...</p>}
			</div>
		</form>
	);
}

export default ProfileForm;
