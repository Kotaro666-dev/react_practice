import { createSlice } from '@reduxjs/toolkit';

import { uiActions } from './ui-slice';

const url = 'https://react-http-8a8f0-default-rtdb.firebaseio.com/cart.json';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: [],
		totalQuantity: 0,
	},
	reducers: {
		addItemToCart(state, action) {
			const newItem = action.payload;

			const existingItem = state.items.find((item) => item.id === newItem.id);
			state.totalQuantity++;
			if (!existingItem) {
				state.items.push({
					id: newItem.id,
					title: newItem.title,
					price: newItem.price,
					quantity: 1,
					totalPrice: newItem.price,
				});
			} else {
				existingItem.quantity++;
				existingItem.totalPrice = existingItem.totalPrice + newItem.price;
			}
		},
		removeItemFromCart(state, action) {
			const id = action.payload;
			const existingItem = state.items.find((item) => item.id === id);
			state.totalQuantity--;

			if (existingItem.quantity === 1) {
				state.items = state.items.filter((item) => item.id !== id);
			} else {
				existingItem.quantity--;
				existingItem.totalPrice -= existingItem.price;
			}
		},
	}
});

export const sendCartData = (cart) => {
	return async (dispatch) => {
		dispatch(uiActions.setNotification({
			status: 'pending',
			title: 'Sending...',
			message: 'Sending cart data.',
		}));

		const sendRequest = async () => {
			const response = await fetch(url, {
				method: 'PUT',
				body: JSON.stringify(cart),
			});

			if (response.status !== 200) {
				throw new Error('Sending cart date failed.');
			}
		}

		try {
			await sendRequest();

			dispatch(uiActions.setNotification({
				status: 'success',
				title: 'Success!',
				message: 'Sent cart data successfully.',
			}));
		} catch (error) {
			dispatch(uiActions.setNotification({
				status: 'error',
				title: 'Error!',
				message: 'Faild sending cart data.',
			}));
		}
	};
}



export const cartActions = cartSlice.actions;
export default cartSlice;