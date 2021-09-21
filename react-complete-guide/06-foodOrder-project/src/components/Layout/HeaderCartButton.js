import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
	const context = useContext(CartContext);

	const numberOfCartItems = context.items.reduce((currenNumber, item) => {
		return currenNumber + item.amount;
	}, 0);

	return (
		<button className={classes.button} onClick={props.onClick}>
			<span className={classes.icon}><CartIcon/></span>
			<span>{props.children}</span>
			<span className={classes.badge}>{numberOfCartItems}</span>
		</button>
	);
};

export default HeaderCartButton;