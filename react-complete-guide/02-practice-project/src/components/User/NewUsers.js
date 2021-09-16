import React from "react";

import Card from "../Card/Card";
import styles from './NewUsers.module.css';

const NewUsers = (props) => {
	if (props.users.length === 0) {
		<h2>Found no Users.</h2>
	}

	return (
		<Card>
			{
				props.NewUsers.map((user) => {
					return (
						<div className={styles.newUsers}>
							{user.username} ({user.age} years old)
						</div>
					);
				})
			}
		</Card>
	);
}

export default NewUsers