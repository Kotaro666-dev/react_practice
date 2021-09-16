import React, { useState } from "react";

import styles from './AddUser.module.css';
import Button from '../UI/Button/Button'
import Card from "../UI/Card/Card";
import ErrorModal from "../UI/ErrorModal/ErrorModal";

const AddUser = (props) => {

	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [errorMessage, setErrorMessage] = useState(null);

	const isNumber = (value) => {
		return typeof value === 'number' && isFinite(value);
	}

	const addUserHandler = (event) => {
		event.preventDefault();

		if (name.trim().length === 0 || age.trim().length === 0) {
			setErrorMessage({
				title: 'Invalid input',
				message: 'Please enter a valid name and age (non-empty value)',
			});
			return;
		}

		if (+age < 1 || !isNumber(+age)) {
			setErrorMessage({
				title: 'Invalid age',
				message: 'Please enter a valid age (> 0)',
			});
			return;
		}

		const newUser = {
			id: Math.random().toString(),
			name: name,
			age: age,
		};
		props.onAddUser(newUser);
		resetFormInput();
		setErrorMessage();
	}

	const resetFormInput = () => {
		setName('');
		setAge('');
	}

	const userNameChangeHandler = (event) => {
		setName(event.target.value);
	}

	const ageChangeHandler = (event) => {
		setAge(event.target.value);
	}

	const onClickErrorModal = () => {
		setErrorMessage(null);
	}

	return (
		<div>
			{errorMessage && <ErrorModal title={errorMessage.title} message={errorMessage.message} onClick={onClickErrorModal}/>}
			<Card className={styles.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username" className={styles.input.label}>Username</label>
					<input id="username" type="text" onChange={userNameChangeHandler} value={name} />
					<label htmlFor="age" className={styles.input.label}>Age (Years)</label>
					<input id="age" type="text" onChange={ageChangeHandler} value={age} />
					<Button type='submit'>Add User</Button>
				</form>
			</Card>
		</div>
	);
}

export default AddUser;