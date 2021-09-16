import React, { useState } from 'react';

import AddUser from './components/User/AddUser';
import NewUsers from './components/User/NewUsers';

const INITIALDATA = [
	{id: '1', username: 'Kotaro', age: '31'},
	{id: '2', username: 'Nut', age: '20'},
];

function App() {
	const [users, setUsers] = useState(INITIALDATA);


	const addNewUser = (newUser) => {
		setUsers((prevState) => {
			return [...prevState, newUser];
		});
	}

	return (
		<div>
			<AddUser addNewUser={addNewUser} />
			<NewUsers users={users}/>
		</div>
	);
}

export default App;
