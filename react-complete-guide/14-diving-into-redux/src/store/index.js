import { createStore } from 'redux';

const initialState = {
	counter: 0,
	isCounterVisible: true,
};

const counterReducer = (prevState, action) => {
	if (action.type === 'INCREMENT') {
		return {
			counter: prevState.counter + (action.value || 1),
			isCounterVisible: prevState.isCounterVisible,
		};
	}
	if (action.type === 'DECREMENT') {
		return {
			counter: prevState.counter - (action.value || 1),
			isCounterVisible: prevState.isCounterVisible,
		};
	}
	if (action.type === 'TOGGLE_COUNTER') {
		return {
			counter: prevState.counter,
			isCounterVisible: !prevState.isCounterVisible,
		}
	}
	return prevState;
}

const store = createStore(counterReducer, initialState);

export default store;
