import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

const url = 'https://react-http-8a8f0-default-rtdb.firebaseio.com/cart.json';

export const fetchCartData = () => {
	return async (dispatch) => {
		const fetchData = async () => {
			const response = await fetch(url);

			if (response.status !== 200) {
				throw new Error('Could not fetch cart data.');
			}

			if (response == null) {
				return [];
			}

			const data = await response.json();

			return data;
		}

		try {
			const cartData = await fetchData();
			dispatch(cartActions.replaceCart(cartData));
		} catch (error) {
			dispatch(uiActions.setNotification({
				status: 'error',
				title: 'Error!',
				message: 'Faild fetching cart data.',
			}));
		}
 	};
};

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
