import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector(state => state.counter);
	const isCounterVisible = useSelector(state => state.isCounterVisible);

	const toggleCounterHandler = () => {
		dispatch({type: 'TOGGLE_COUNTER'});
	};

	const incrementCounter = () => {
		dispatch({type: 'INCREMENT'});
	}

	const decrementCounter = () => {
		dispatch({type: 'DECREMENT'});
	}

	const incrementBy5Counter = () => {
		dispatch({type: 'INCREMENT', value: 5});
	}


	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{isCounterVisible && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={incrementCounter}>Increment</button>
				<button onClick={incrementBy5Counter}>Increment by 5</button>
				<button onClick={decrementCounter}>Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
