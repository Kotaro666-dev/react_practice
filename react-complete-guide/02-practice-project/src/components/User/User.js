import React from "react";

import styles from './User.module.css';

const User = (props) => {
	const onDoubleClickedUserCard = () => {
		console.log(props.user.key);
		props.deleteUser(props.user.key);
	}

	return (
		<div className={styles.user} onDoubleClick={onDoubleClickedUserCard}>
			{props.user.name} ({props.user.age} years old)
		</div>
	);
}

export default User;