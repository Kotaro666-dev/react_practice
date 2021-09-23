import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/use-http';

const url = 'https://react-http-8a8f0-default-rtdb.firebaseio.com//tasks.json';

function App() {
	const [tasks, setTasks] = useState([]);

	const httpData = useHttp();

	const { isLoading, error, sendRequest: fetchTasks} = httpData;

	const transformTasks = (tasksObject) => {
		const loadedTasks = [];

		for (const taskKey in tasksObject) {
		  loadedTasks.push({ id: taskKey, text: tasksObject[taskKey].text });
		}

		setTasks(loadedTasks);
	};

	useEffect(() => {
		fetchTasks({url: url}, transformTasks);
	}, [fetchTasks]);

	const taskAddHandler = (task) => {
		setTasks((prevTasks) => prevTasks.concat(task));
	};

	return (
	<React.Fragment>
		<NewTask onAddTask={taskAddHandler} />
		<Tasks
			items={tasks}
			loading={isLoading}
			error={error}
			onFetch={fetchTasks}
		/>
	</React.Fragment>
	);
}

export default App;
