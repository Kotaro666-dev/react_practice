import React from 'react';

import './NewExpense.css'
import ExpenseForm from './ExpenseForm';


function NewExpense(props) {
	function onSaveExpenseDataHandler(enteredExpenseData) {
		const newExpenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		props.addExpense(newExpenseData);
	};

	return (
		<div className="new-expense">
			<ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>
		</div>
	);
}

export default NewExpense;