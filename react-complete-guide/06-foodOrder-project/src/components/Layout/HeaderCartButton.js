import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
	const [isButtonHighlighted, setIsButtonHighlighted] = useState(false);
	const context = useContext(CartContext);

	const numberOfCartItems = context.items.reduce((currenNumber, item) => {
		return currenNumber + item.amount;
	}, 0);

	const buttonClasses = `${classes.button} ${isButtonHighlighted ? classes.bump : ''}`;

	useEffect(() => {
		if (context.totalAmount === 0) {
			return;
		}
		setIsButtonHighlighted(true);

		const timer = setTimeout(() => {
			setIsButtonHighlighted(false);
		}, 300);

		return (() => {
			clearTimeout(timer);
		});
	}, [context.items]);

	return (
		<button className={buttonClasses} onClick={props.onClick}>
			<span className={classes.icon}><CartIcon/></span>
			<span>{props.children}</span>
			<span className={classes.badge}>{numberOfCartItems}</span>
		</button>
	);
};

export default HeaderCartButton;