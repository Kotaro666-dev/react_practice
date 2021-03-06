import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter-slice';

import classes from './Counter.module.css';

const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector(state => state.counter.counter);
	const isCounterVisible = useSelector(state => state.counter.isCounterVisible);

	const toggleCounterHandler = () => {
		dispatch(counterActions.toggleCounter());
	};

	const incrementCounter = () => {
		dispatch(counterActions.increment());
	}

	const decrementCounter = () => {
		dispatch(counterActions.decrement());
	}

	const incrementBy5Counter = () => {
		dispatch(counterActions.increase(5));
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
