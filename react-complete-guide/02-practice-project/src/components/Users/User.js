import React from "react";

const User = (props) => {
	const onDoubleClickedUserCard = () => {
		props.deleteUser(props.user.id);
	}

	return (
		<div onDoubleClick={onDoubleClickedUserCard}>
			{props.user.name} ({props.user.age} years old)
		</div>
	);
}

export default User;