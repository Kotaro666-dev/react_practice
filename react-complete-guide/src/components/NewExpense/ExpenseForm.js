import React, { useState } from "react";

import './ExpenseForm.css'

function ExpenseForm(props) {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');
	// alternative way to get prevState and updateState
	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: '',
	// 	enteredAmount: '',
	// 	enteredDate: '',
	// });


	function titleChangeHandler(event) {
		setEnteredTitle(event.target.value);
		// Safe alternative
		// setUserInput((prevState) => {
		// 	return {
		// 		...prevState,
		// 		enteredTitle: event.target.value,
		// 	};
		// });
	}

	function amountChangeHandler(event) {
		setEnteredAmount(event.target.value);
		// Safe alternative
		// setUserInput((prevState) => {
		// 	return {
		// 		...prevState,
		// 		enteredAmount: event.target.value,
		// 	};
		// });
	}

	function dateChangeHandler(event) {
		setEnteredDate(event.target.value);
		// Safe alternative
		// setUserInput((prevState) => {
		// 	return {
		// 		...prevState,
		// 		enteredDate: event.target.value,
		// 	};
		// });
	}

	function sumbitHandler(event) {
		// actionで指定されたURLへ遷移＋データ送信というデフォルトを行わせない
		// https://qiita.com/tochiji/items/4e9e64cabc0a1cd7a1ae
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};

		props.onSaveExpenseData(expenseData);
		resetInputValue();
	}

	function resetInputValue() {
		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
	}

	return (
		<form onSubmit={sumbitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type='text' value={enteredTitle} onChange={titleChangeHandler} />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input type='date' min="2021-01-01" max="2023-12-31" value={enteredDate} onChange={dateChangeHandler}/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button onClick={props.onCancelButtonClicked} >Cancel</button>
				<button type="submit" >Add Expense</button>
			</div>
		</form>
	);
}

export default ExpenseForm;