import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Notification from './components/UI/Notification';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { uiActions } from './store/ui-slice';

const url = 'https://react-http-8a8f0-default-rtdb.firebaseio.com/cart.json';

let isInitial = true;

function App() {
	const isCartVisible = useSelector(state => state.ui.isCartVisible);
	const cart = useSelector(state => state.cart);
	const notification = useSelector(state => state.ui.notification);
	const dispatch = useDispatch();

	useEffect(() => {
		const sendCartDate = async () => {
			dispatch(uiActions.setNotification({
				status: 'pending',
				title: 'Sending...',
				message: 'Sending cart data.',
			}));
			const response = await fetch(url, {
				method: 'PUT',
				body: JSON.stringify(cart),
			});

			if (response.status !== 200) {
				throw new Error('Sending cart date failed.');
			}

			dispatch(uiActions.setNotification({
				status: 'success',
				title: 'Success!',
				message: 'Sent cart data successfully.',
			}));
		}

		if (isInitial) {
			isInitial = false;
			return;
		}

		sendCartDate().catch((error) => {
			dispatch(uiActions.setNotification({
				status: 'error',
				title: 'Error!',
				message: 'Faild sending cart data.',
			}));
		});
	},[cart, dispatch]);

	return (
		<Fragment>
			{notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
			<Layout>
				{isCartVisible && <Cart />}
				<Products />
			</Layout>
		</Fragment>
	);
}

export default App;
