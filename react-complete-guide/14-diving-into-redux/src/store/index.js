import { createStore } from 'redux';
import { createSlice, configureStore} from '@reduxjs/toolkit';

const initialState = {
	counter: 0,
	isCounterVisible: true,
};

const counterSlice = createSlice({
	name: 'counter',
	initialState: initialState,
	reducers: {
		increment(state) {
			state.counter++;
		},
		decrement(state) {
			state.counter--;
		},
		increase(state, action) {
			state.counter += action.payload;
		},
		decrease(state, action) {
			state.counter -= action.payload;
		},
		toggleCounter(state) {
			state.isCounterVisible = !state.isCounterVisible;
		},
	},
});

const store = configureStore({
	reducer: counterSlice.reducer,
});

// const counterReducer = (prevState, action) => {
// 	if (action.type === 'INCREMENT') {
// 		return {
// 			counter: prevState.counter + (action.value || 1),
// 			isCounterVisible: prevState.isCounterVisible,
// 		};
// 	}
// 	if (action.type === 'DECREMENT') {
// 		return {
// 			counter: prevState.counter - (action.value || 1),
// 			isCounterVisible: prevState.isCounterVisible,
// 		};
// 	}
// 	if (action.type === 'TOGGLE_COUNTER') {
// 		return {
// 			counter: prevState.counter,
// 			isCounterVisible: !prevState.isCounterVisible,
// 		}
// 	}
// 	return prevState;
// }

// const store = createStore(counterReducer, initialState);

export const counterActions = counterSlice.actions;
export default store;
