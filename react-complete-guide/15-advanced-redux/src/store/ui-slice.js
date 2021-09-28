import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
	name: 'ui',
	initialState: { isCartVisible: false, notification: null },
	reducers: {
		toggle(state) {
			state.isCartVisible = !state.isCartVisible;
		},
		setNotification(state, action) {
			state.notification = {
				state: action.payload.status,
				title: action.payload.title,
				message: action.payload.message,
			};
		}
	}
});

export const uiActions = uiSlice.actions;
export default uiSlice;