import React from "react";

import classes from './MealItemForm.module.css';

const MealItemForm = () => {
	return (
		<div>
			<form className={classes.form}>
				<span>Amount</span>
				<input type="text" />
			</form>
			<button className={classes.button}>+ Add</button>
		</div>
	);
};

export default MealItemForm;