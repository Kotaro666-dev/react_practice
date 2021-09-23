import { useState, useRef } from 'react'

const SimpleInput = (props) => {
	const [enteredName, setEnteredName] = useState('');
	const [isEnteredNameEmpty, setIsEnteredNameEmpty] = useState(false);
	const nameInputRef = useRef();

	const nameInputChangeHandler = (event) => {
		setEnteredName(event.target.value);
	};

	const formSubmissionHandler = (event) => {
		event.preventDefault();

		if (enteredName.trim() === '') {
			setIsEnteredNameEmpty(true);
			return;
		}

		console.log(enteredName);
		const enteredValue = nameInputRef.current.value;
		console.log(enteredValue);

		setEnteredName('');
		setIsEnteredNameEmpty(false);
	}

	const nameInputClasses = !isEnteredNameEmpty ? 'form-control' : 'form-control invalid';

	return (
	<form onSubmit={formSubmissionHandler}>
		<div className={nameInputClasses}>
			<label htmlFor='name'>Your Name</label>
			<input ref={nameInputRef} type='text' id='name' onChange={nameInputChangeHandler} value={enteredName}/>
			{isEnteredNameEmpty && <p className="error-text">Name must not be empty</p>}
		</div>
		<div className="form-actions">
			<button type="submit">Submit</button>
		</div>
	</form>
	);
};

export default SimpleInput;
