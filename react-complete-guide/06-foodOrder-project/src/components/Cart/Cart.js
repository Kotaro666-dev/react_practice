import React, { useContext }from 'react';

import Modal from "../UI/Modal"
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
	const context = useContext(CartContext);

	const totalAmount = `$${context.totalAmount.toFixed(2)}`;
	const hasItems = context.items.length > 0;

	const cartItemAddHandler = (item) => {

	};

	const cartItemRemoveHandler = (id) => {

	};

	const cartItems = <ul className={classes['cart-items' ]}>{context.items.map((item) => {
		return (
			<CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onAdd={cartItemAddHandler.bind(null, item)} onRemove={cartItemRemoveHandler.bind(null, item.id)} />
		)
	})}</ul>;

	return (
		<Modal onClose={props.onCloseCart}>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			<div className={classes.actions}>
				<button className={classes['button---alt']} onClick={props.onCloseCart}>Close</button>
				{hasItems && <button className={classes.button}>Order</button>}
			</div>
		</Modal>
	);
};

export default Cart;