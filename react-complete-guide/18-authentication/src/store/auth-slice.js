import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		token: '',
		isLoggedIn: false,
	},
	reducers: {
		login(state, action) {
			state.token = action.payload;
			state.isLoggedIn = true;
		},
		logout(state) {
			state.token = '';
			state.isLoggedIn = false;
		},

	}
});

export const authActions = authSlice.actions;
export default authSlice;