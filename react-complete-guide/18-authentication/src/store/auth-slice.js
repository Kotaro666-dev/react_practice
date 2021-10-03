import { createSlice } from "@reduxjs/toolkit";

const localStorageKey = 'idToken';
const initialIdTokenValue = localStorage.getItem(localStorageKey);

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		idToken: initialIdTokenValue,
		isLoggedIn: initialIdTokenValue ? true : false,
	},
	reducers: {
		login(state, action) {
			state.idToken = action.payload;
			state.isLoggedIn = true;
			localStorage.setItem(
				localStorageKey, action.payload
			);
		},
		logout(state) {
			state.idToken = '';
			state.isLoggedIn = false;
			localStorage.removeItem(localStorageKey);
		},
		updateIdToken(state, action) {
			localStorage.remove(localStorageKey);
			state.idToken = action.payload;
			localStorage.setItem(
				localStorageKey, action.payload
			);
		}
	}
});

export const authActions = authSlice.actions;
export default authSlice;