import ExpenseItem from "./ExpenseItem";
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

	let expensesContent;

	if (filteredExpenses.length === 0) {
		expensesContent = <p>No expenses found.</p>;
	} else {
		expensesContent = filteredExpenses
			.map(item =>
				<ExpenseItem
					key={item.id}
					title={item.title}
					amount={item.amount}
					date={item.date}
				/>
		);
	}

	return (
		<div>
			<Card className="expenses" >
				<ExpensesFilter selectedYear={expensesFilterDate}  onSaveExpensesFilterDate={onSaveExpensesFilterDateHandler} />
				{ expensesContent }
			</Card>
		</div>
	);
}

export default Expenses;