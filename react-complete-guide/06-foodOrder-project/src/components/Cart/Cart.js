import React, { useContext }from 'react';

import Modal from "../UI/Modal"
import classes from './Cart.module.css';
import cartContext from '../../store/cart-context';

const Cart = (props) => {
	const context = useContext(cartContext);

	const cartItems = <ul className={classes['cart-items' ]}>{[{id: 'c1', name: 'Sushi', amount: 2, price: 12.99}].map((item) => {
		return (
			<li>{item.name}</li>
		)
	})}</ul>;

	return (
		<Modal onClose={props.onCloseCart}>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{context.totalAmount}</span>
			</div>
			<div className={classes.actions}>
				<button className={classes['button---alt']} onClick={props.onCloseCart}>Close</button>
				<button className={classes.button}>Order</button>
			</div>
		</Modal>
	);
};

export default Cart;