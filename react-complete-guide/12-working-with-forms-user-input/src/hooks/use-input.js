import { useReducer } from 'react';

const initialInputState = {
	value: '',
	isTouched: false,
}

const inputStateReducer = (state, action) => {
	if (action.type === 'INPUT')
	{
		return {
			value: action.value,
			isTouched: state.isTouched,
		}
	}
	if (action.type === 'BLUE')
	{
		return {
			value: state.value,
			isTouched: true,
		}
	}
	if (action.type === 'RESET')
	{
		return initialInputState;
	}
	return initialInputState;
}

const useInput = (validateValue) => {
	const [inputState, dispatchInputState] = useReducer(inputStateReducer, initialInputState);

	const isValueValid = validateValue(inputState.value);
	const hasError = !isValueValid && inputState.isTouched;

	const valueChangeHandler = (event) => {
		dispatchInputState({type: 'INPUT', value: event.target.value});
	};

	const inputBlurHandler = () => {
		dispatchInputState({type: 'BLUR'});
	}

	const reset = () => {
		dispatchInputState({type: 'RESET'});
	}

	return {
		value: inputState.value,
		isValueValid: isValueValid,
		hasError: hasError,
		valueChangeHandler: valueChangeHandler,
		inputBlurHandler: inputBlurHandler,
		reset: reset,
	};
};

export default useInput;