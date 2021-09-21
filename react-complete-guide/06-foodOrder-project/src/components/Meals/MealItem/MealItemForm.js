import React, { useRef, useState } from "react";

import classes from './MealItemForm.module.css';
import Input from "../../UI/Input";

const MealItemForm = (props) => {
	const amountInputRef = useRef();
	const [amountIsValid, setAmountIsValid] = useState(true);


	const submitHandler = (event) => {
		event.preventDefault();

		const enteredAmount = amountInputRef.current.value;
		const enteredAmountNumber = +enteredAmount;

		const isInputValid = enteredAmount.trim().length !== 0 || (0 < enteredAmountNumber && enteredAmountNumber < 11);

		if (!isInputValid) {
			setAmountIsValid(false);
			return ;
		}

		props.onAddToCart(enteredAmountNumber);
	}

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<Input ref={amountInputRef} label="Amount" input={{id: 'amount_' + props.id, type: 'number', min: '1', max: '10', step: '1', defaultValue: '1' }} />
			<button className={classes.button} >+ Add</button>
			{!amountIsValid && <p>Please enter a valid amount.</p>}
		</form>
	);
};

export default MealItemForm;