import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		idToken: '',
		isLoggedIn: false,
	},
	reducers: {
		login(state, action) {
			state.idToken = action.payload;
			state.isLoggedIn = true;
		},
		logout(state) {
			state.idToken = '';
			state.isLoggedIn = false;
		},
		updateIdToken(state, action) {
			state.idToken = action.payload;
		}
	}
});

export const authActions = authSlice.actions;
export default authSlice;