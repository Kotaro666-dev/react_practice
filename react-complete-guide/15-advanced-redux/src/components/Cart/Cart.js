import { Fragment } from 'react';
import { useSelector } from 'react-redux';


import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
	const cartItems = useSelector(state => state.cart.items);

	const cartItemsList = <Fragment>{
		cartItems.map((item) => {
			return (
				<CartItem
				item={{ title: item.title, quantity: item.nums, total: item.nums * item.price, price: item.price }}
			/>
			)
		})
	}</Fragment>;

	return (
		<Card className={classes.cart}>
			<h2>Your Shopping Cart</h2>
			<ul>
				{cartItemsList}
			</ul>
		</Card>
	);
};

export default Cart;
