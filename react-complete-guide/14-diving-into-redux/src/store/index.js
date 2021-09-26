import { createStore } from 'redux';

const initialState = {
	counter: 0,
};

const counterReducer = (prevState, action) => {
	if (action.type === 'INCREMENT') {
		return {
			counter: prevState.counter + 1,
		};
	}
	if (action.type === 'DECREMENT') {
		return {
			counter: prevState.counter - 1,
		};
	}
	return prevState;
}

const store = createStore(counterReducer, initialState);

export default store;
