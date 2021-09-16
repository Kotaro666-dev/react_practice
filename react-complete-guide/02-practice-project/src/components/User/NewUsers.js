import React from "react";

import Card from "../Card/Card";
import User from "./User";

const NewUsers = (props) => {
	if (props.users.length === 0) {
		<h2>Found no Users.</h2>
	}

	return (
		<Card>
			{
				props.users.map((user) => {
					return (
						<User user={user} deleteUser={props.deleteUser}/>
					);
				})
			}
		</Card>
	);
}

export default NewUsers