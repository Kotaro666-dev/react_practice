import React from "react";

import styles from './AddUser.module.css';
import Button from '../Button/Button.js'

const AddUser = () => {
	const onTapButton = () => {
		console.log('Tapped Button');
	}

	return (
		<div>
			<form className={styles.input}>
				<div className={styles.input.label}>Username</div>
				<input type="text" />
				<div className={styles.input.label}>Age (Years)</div>
				<input type="text" />
			</form>
			<Button onTapButton={onTapButton}/>
		</div>
	);
}

export default AddUser;