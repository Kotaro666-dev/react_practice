import useInput from "../hooks/use-input";

const BasicForm = (props) => {
	const validateName = (value) => value.trim() !== '';
	const validateEmail = (value) =>  value.trim() !== '' && value.includes('@');

	const {
		value: enteredFirstName,
		isValueValid: isFirstNameValid,
		hasError: firstNameHasError,
		valueChangeHandler: firstNameChangeHandler,
		inputBlurHandler: firstNameInputBlurHandler,
		reset: resetFirstNameInput,
	} = useInput(validateName);

	const {
		value: enteredLastName,
		isValueValid: isLastNameValid,
		hasError: lastNameHasError,
		valueChangeHandler: lastNameChangeHandler,
		inputBlurHandler: lastNameInputBlurHandler,
		reset: resetLastNameInput,
	} = useInput(validateName);

	const {
		value: enteredEmail,
		isValueValid: isEmailValid,
		hasError: emailHasError,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailInputBlurHandler,
		reset: resetEmailInput,
	} = useInput(validateEmail);

	const isFormValid = isFirstNameValid && isLastNameValid && isEmailValid;


	const submitHandler = (event) => {
		event.preventDefault();

		if (!isFormValid) {
			return ;
		}

		resetFirstNameInput();
		resetLastNameInput();
		resetEmailInput();
	}

	const firstNameClassName = firstNameHasError ? 'form-control invalid' : 'form-control';
	const lastNameClassName = lastNameHasError ? 'form-control invalid' : 'form-control';
	const emailClassName = emailHasError ? 'form-control invalid' : 'form-control';

	return (
		<form>
			<div className='control-group' onSubmit={submitHandler}>
				<div className={firstNameClassName}>
					<label htmlFor='name'>First Name</label>
					<input type='text' id='name' onChange={firstNameChangeHandler} onBlur={firstNameInputBlurHandler} value={enteredFirstName} />
					{firstNameHasError && <p className='error-text'>First Name must not be empty.</p>}
				</div>
				<div className={lastNameClassName}>
					<label htmlFor='name'>Last Name</label>
					<input type='text' id='name' onChange={lastNameChangeHandler} onBlur={lastNameInputBlurHandler} value={enteredLastName}/>
					{lastNameHasError && <p className='error-text'>Last Name must not be empty.</p>}
				</div>
			</div>
			<div className={emailClassName}>
				<label htmlFor='name'>E-Mail Address</label>
				<input type='text' id='name' onChange={emailChangeHandler} onBlur={emailInputBlurHandler} value={enteredEmail}/>
				{emailHasError && <p className='error-text'>Email must not be empty and must contain @</p>}
			</div>
			<div className='form-actions'>
				<button type='submit' disabled={!isFormValid}>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
