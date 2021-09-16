import React from "react";

import Card from "../UI/Card/Card";
import User from "./User";
import styles from './UsersList.module.css'

const UsersList = (props) => {
	if (props.users.length === 0) {
		<h2>Found no Users.</h2>
	}

	return (
		<Card className={styles.users}>
			<ul>
				{
					props.users.map((user) => {
						return (
							<li key={user.id}>
								<User user={user} deleteUser={props.deleteUser}/>
							</li>
						);
					})
				}
			</ul>
		</Card>
	);
}

export default UsersList