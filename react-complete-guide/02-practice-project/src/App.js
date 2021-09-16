import React, { useState } from 'react';

import AddUser from './components/User/AddUser';
import NewUsers from './components/User/NewUsers';

const INITIALDATA = [
	{username: 'Kotaro', age: '31'},
	{username: 'Nut', age: '20'},
];

function App() {
	const [users, setUsers] = useState(INITIALDATA);

	const update = () => {
		setUsers('');
	}

	return (
		<div>
			<AddUser />
			<NewUsers users={users}/>
		</div>
	);
}

export default App;
