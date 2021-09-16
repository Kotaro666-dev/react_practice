import React, { useState } from "react";

import styles from './AddUser.module.css';
import Button from '../Button/Button.js'
import Card from "../Card/Card";

const AddUser = (props) => {

	const [userName, setUserName] = useState('');
	const [age, setAge] = useState('');

	const onTapButton = () => {
		const newUser = {id: Math.random().toString(), username: userName, age: age};
		props.addNewUser(newUser);
		resetFormInput();
	}

	const resetFormInput = () => {
		setUserName('');
		setAge('');
	}

	const getUserName = (event) => {
		setUserName(event.target.value);
	}

	const getAge = (event) => {
		setAge(event.target.value);
	}

	return (
		<Card>
			<form className={styles.input}>
				<div className={styles.input.label}>Username</div>
				<input type="text" onChange={getUserName} value={userName} />
				<div className={styles.input.label}>Age (Years)</div>
				<input type="text" onChange={getAge} value={age} />
			</form>
			<Button onTapButton={onTapButton}/>
		</Card>
	);
}

export default AddUser;