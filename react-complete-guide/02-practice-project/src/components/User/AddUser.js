import React, { useState } from "react";

import styles from './AddUser.module.css';
import Button from '../Button/Button.js'
import Card from "../Card/Card";

const AddUser = () => {

	const [userName, setUserName] = useState('');
	const [age, setAge] = useState('');

	const onTapButton = () => {
		console.log(userName);
		console.log(age);
		console.log('Tapped Button');
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