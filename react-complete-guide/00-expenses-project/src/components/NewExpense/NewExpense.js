import React, { useState } from 'react';

import './NewExpense.css'
import ExpenseForm from './ExpenseForm';


function NewExpense(props) {
	const [isFormVisible, setIsFormVisible] = useState(false);

	const onAddNewExpenseButtonClicked = () => {
		setIsFormVisible(true);
	}

	const onCancelButtonClicked = () => {
		setIsFormVisible(false);
	}

	if (!isFormVisible) {
		return (
			<div className="new-expense">
				<button onClick={onAddNewExpenseButtonClicked}>Add New Expense</button>
			</div>
		);
	}

	function onSaveExpenseDataHandler(enteredExpenseData) {
		const newExpenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.addExpense(newExpenseData);
	};

	return (
		<div className="new-expense">
			<ExpenseForm onCancelButtonClicked={onCancelButtonClicked} onSaveExpenseData={onSaveExpenseDataHandler}/>
		</div>
	);
}

export default NewExpense;