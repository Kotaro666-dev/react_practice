import React, { useState } from 'react';

import AddUser from './components/User/AddUser';
import NewUsers from './components/User/NewUsers';

const INITIALDATA = [
	{key: '1', name: 'Kotaro', age: '31'},
	{key: '2', name: 'Nut', age: '20'},
];

function App() {
	const [users, setUsers] = useState(INITIALDATA);


	const addNewUser = (newUser) => {
		setUsers((prevState) => {
			return [...prevState, newUser];
		});
	}

	const deleteUser = (targetKey) => {
		setUsers((prevState) => {
			const newUsers = prevState.filter(user => user.key !== targetKey);
			return newUsers;
		});
	}

	return (
		<div>
			<AddUser addNewUser={addNewUser} />
			<NewUsers users={users} deleteUser={deleteUser}/>
		</div>
	);
}

export default App;
