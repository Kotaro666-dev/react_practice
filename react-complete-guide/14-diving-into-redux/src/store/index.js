import { createSlice, configureStore} from '@reduxjs/toolkit';

const initialCounterState = {
	counter: 0,
	isCounterVisible: true,
};

const counterSlice = createSlice({
	name: 'counter',
	initialState: initialCounterState,
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

const initialAuthState = {
	isAuthenticated: false,
}

const authSlice = createSlice({
	name: 'authentication',
	initialState: initialAuthState,
	reducers: {
		login(state) {
			state.isAuthenticated = true;
		},
		logout(state) {
			state.isAuthenticated = false;
		}
	}
});

const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
		auth: authSlice.reducer,
	},
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
export const authActions = authSlice.actions;
export default store;
