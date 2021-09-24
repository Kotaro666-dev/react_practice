import { useState } from 'react';

const useInput = (validateValue) => {
	const [enteredValue, setEnteredValue] = useState('');
	const [isTouched, setIsTouched] = useState(false);

	const isValueValid = validateValue(enteredValue);
	const hasError = !isValueValid && isTouched;

	const valueChangeHandler = (event) => {
		setEnteredValue(event.target.value);
	};

	const inputBlurHandler = (event) => {
		setIsTouched(true);
	}

	const reset = () => {
		setEnteredValue('');
		setIsTouched(false);
	}

	return {
		value: enteredValue,
		isValueValid: isValueValid,
		hasError: hasError,
		valueChangeHandler: valueChangeHandler,
		inputBlurHandler: inputBlurHandler,
		reset: reset,
	};
};

export default useInput;