import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store';

import classes from './CartButton.module.css';

const CartButton = (props) => {
	const dispatch = useDispatch();
	const items = useSelector(state => state.cart.items);

	const itemsLength = items.length;

	const onClickCartButtonHandler = () => {
		dispatch(cartActions.toggleMyCart());
	}

	return (
		<button className={classes.button} onClick={onClickCartButtonHandler}>
			<span>My Cart</span>
			<span className={classes.badge}>{itemsLength}</span>
		</button>
	);
};

export default CartButton;
