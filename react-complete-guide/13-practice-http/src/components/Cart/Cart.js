import React, { useContext, useState } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import Checkout from './Checkout';

const url = 'https://react-http-8a8f0-default-rtdb.firebaseio.com/order.json';

const Cart = (props) => {
	const cartCtx = useContext(CartContext);
	const [isCheckout, setIsCheckout] = useState(false);
	const [isLoarding, setIsLoarding] = useState(false);
	const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
	const hasItems = cartCtx.items.length > 0;

	const cartItemRemoveHandler = (id) => {
		cartCtx.removeItem(id);
	};

	const cartItemAddHandler = (item) => {
		cartCtx.addItem(item);
	};

	const onClickOrderHandler = () => {
		setIsCheckout(true);
	}

	const submitOrderHandler = async (userData) => {
		const orderData = {
			userData: userData,
			orderItems: cartCtx.items,
			totalAmount: totalAmount,
		}

		try {
			setIsLoarding(true);
			const response = await fetch(url, {
								method: 'POST',
								body: JSON.stringify(orderData),
								headers: {
									'Content-Type': 'application/json'
								},
							}
						);
			setIsLoarding(false);
			if (response.status !== 200) {
				throw new Error ('Send request failed');
			}
			setIsSubmitSuccess(true);
			cartCtx.clearCart();
		} catch (error) {
			console.log(error.message);
		}
	}

	const cartItems = (
		<ul className={classes['cart-items']}>
			{cartCtx.items.map((item) => (
				<CartItem
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
					onRemove={cartItemRemoveHandler.bind(null, item.id)}
					onAdd={cartItemAddHandler.bind(null, item)}
				/>
			))}
		</ul>
	);

	const modalActions = (
		<div className={classes.actions}>
			<button className={classes['button--alt']} onClick={props.onClose}>
				Close
			</button>
			{
				hasItems &&
					<button className={classes.button} onClick={onClickOrderHandler}>
						Order
					</button>
			}
		</div>
	);

	const cartModalContent = (
		<React.Fragment>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			{isCheckout && !isLoarding && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose}/>}
			{!isCheckout && modalActions}
		</React.Fragment>
	);

	const submittingOrderModalContent = <p>Sending order data...</p>;

	const completeSubmittingOrderModalContent = (
		<React.Fragment>
			<p>Your order successfully sent!</p>
			<div className={classes.actions}>
				<button className={classes.button} onClick={props.onClose}>
					Close
				</button>
			</div>
		</React.Fragment>
	);

	return (
		<Modal onClose={props.onClose}>
			{!isLoarding && !isSubmitSuccess && cartModalContent}
			{isLoarding && submittingOrderModalContent}
			{!isLoarding && isSubmitSuccess && completeSubmittingOrderModalContent}
		</Modal>
  );
};

export default Cart;
