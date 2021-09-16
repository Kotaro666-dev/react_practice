import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

const INITIALDATA = [
	{id: '1', name: 'Kotaro', age: '31'},
	{id: '2', name: 'Nut', age: '20'},
];

function App() {
	const [usersList, setUsersList] = useState(INITIALDATA);

	const addUserHandler = (newUser) => {
		setUsersList((prevState) => {
			return [...prevState, newUser];
		});
	}

	const deleteUser = (targetId) => {
		setUsersList((prevState) => {
			const newUsers = prevState.filter(user => user.id !== targetId);
			return newUsers;
		});
	}

	return (
		<div>
			<AddUser onAddUser={addUserHandler} />
			<UsersList users={usersList} deleteUser={deleteUser}/>
		</div>
	);
}

export default App;
