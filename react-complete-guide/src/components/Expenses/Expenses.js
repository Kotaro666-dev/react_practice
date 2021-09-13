import React from "react";

import ExpensesList from "./ExpensesList";
import Card from '../UI/Card';
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
	const currentYear = new Date().getFullYear().toString();
	const [expensesFilterDate, setExpensesFilterDate] = useState(currentYear);

	const onSaveExpensesFilterDateHandler = (selectedYear) => {
		setExpensesFilterDate(selectedYear);
	};

	const filteredExpenses = props.items.filter(item => {
		return item.date.getFullYear().toString() === expensesFilterDate;
	});


	return (
		<div>
			<Card className="expenses" >
				<ExpensesFilter selectedYear={expensesFilterDate}  onSaveExpensesFilterDate={onSaveExpensesFilterDateHandler} />
				<ExpensesList items={filteredExpenses}/>
			</Card>
		</div>
	);
}

export default Expenses;