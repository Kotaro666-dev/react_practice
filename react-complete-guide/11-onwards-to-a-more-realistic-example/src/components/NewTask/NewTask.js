import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../../hooks/use-http';

const url = 'https://react-http-8a8f0-default-rtdb.firebaseio.com//tasks.json';

const NewTask = (props) => {
	const httpData = useHttp();

	const { isLoading, error, sendRequest: sendTaskRequest} = httpData;

	const createTask = (taskText, taskData) => {
		const generatedId = taskData.name; // firebase-specific => "name" contains generated id
		const createdTask = { id: generatedId, text: taskText };

		props.onAddTask(createdTask);
	}

	const enterTaskHandler = async (taskText) => {
		const requestConfig = {
			url: url,
			method: 'POST',
			body: JSON.stringify({ text: taskText }),
			headers: {
				'Content-Type': 'application/json',
			}
		}
		sendTaskRequest(requestConfig, createTask.bind(null, taskText));
	};

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
