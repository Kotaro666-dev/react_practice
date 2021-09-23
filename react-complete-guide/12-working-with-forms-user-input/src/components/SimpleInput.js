import { useState } from 'react'

const SimpleInput = (props) => {
	const [enteredName, setEnteredName] = useState('');
	const [enteredNameTouched, setEnteredNameTouched] = useState(false);

	const [enteredEmail, setEnteredEmail] = useState('');
	const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

	const isEmailValid = () => {
		if (enteredEmail.trim() === '') {
			return false;
		}
		if (!enteredEmail.includes('@')) {
			return false;
		}
		return true;
	}

	const enteredNameIsValid = enteredName.trim() !== '';
	const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

	const enteredEmailIsValid = isEmailValid();
	const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;
	let formIsValid = false;

	if (enteredNameIsValid && enteredEmailIsValid) {
		formIsValid = true;
	}

	const nameInputChangeHandler = (event) => {
		setEnteredName(event.target.value);
	};

	const emailInputChangeHandler = (event) => {
		setEnteredEmail(event.target.value);
	};

	const nameInputBlurHandler = (event) => {
		setEnteredNameTouched(true);
	}

	const emailInputBlurHandler = (event) => {
		setEnteredEmailTouched(true);
	}

	const formSubmissionHandler = (event) => {
		event.preventDefault();

		setEnteredNameTouched(true);
		setEnteredEmailTouched(true);

		if (!enteredNameIsValid || !enteredEmailIsValid) {
			return;
		}

		setEnteredName('');
		setEnteredEmail('');
		setEnteredNameTouched(false);
		setEnteredEmailTouched(false);
	}

	const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
	const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';

	return (
	<form onSubmit={formSubmissionHandler}>
		<div className={emailInputClasses}>
			<label htmlFor='email'>Your E-mail</label>
			<input type='email' id='email' onChange={emailInputChangeHandler} onBlur={emailInputBlurHandler} value={enteredEmail}/>
			{emailInputIsInvalid && <p className="error-text">Email must not be empty and must contain @</p>}
		</div>
		<div className={nameInputClasses}>
			<label htmlFor='name'>Your Name</label>
			<input type='text' id='name' onChange={nameInputChangeHandler} onBlur={nameInputBlurHandler} value={enteredName}/>
			{nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
		</div>
		<div className="form-actions">
			<button type="submit" disabled={!formIsValid}>Submit</button>
		</div>
	</form>
	);
};

export default SimpleInput;
