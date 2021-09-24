import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
	const validateName = (value) => value.trim() !== '';
	const validateEmail = (value) => value.trim() !== '' && value.includes('@');

	const { value: enteredName,
			isValueValid: isNameValid,
			hasError: nameInputHasError,
			valueChangeHandler: nameChangeHandler,
			inputBlurHandler: nameBlurHandler,
			reset: resetNameInput,
	} = useInput(validateName);

	const { value: enteredEmail,
		isValueValid: isEmailValid,
		hasError: emailInputHasError,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: resetEmailInput,} = useInput(validateEmail);

	let formIsValid = false;

	if (isNameValid && isEmailValid) {
		formIsValid = true;
	}

	const formSubmissionHandler = (event) => {
		event.preventDefault();

		if (!isNameValid || !isEmailValid) {
			return;
		}

		resetNameInput();
		resetEmailInput();
	}

	const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
	const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

	return (
	<form onSubmit={formSubmissionHandler}>
		<div className={emailInputClasses}>
			<label htmlFor='email'>Your E-mail</label>
			<input type='email' id='email' onChange={emailChangeHandler} onBlur={emailBlurHandler} value={enteredEmail}/>
			{emailInputHasError && <p className="error-text">Email must not be empty and must contain @</p>}
		</div>
		<div className={nameInputClasses}>
			<label htmlFor='name'>Your Name</label>
			<input type='text' id='name' onChange={nameChangeHandler} onBlur={nameBlurHandler} value={enteredName}/>
			{nameInputHasError && <p className="error-text">Name must not be empty</p>}
		</div>
		<div className="form-actions">
			<button type="submit" disabled={!formIsValid}>Submit</button>
		</div>
	</form>
	);
};

export default SimpleInput;
