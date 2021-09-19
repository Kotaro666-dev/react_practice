import React from "react";
import CartIcon from "../Cart/CartIcon";

import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
	return (
		<button className={classes.button}>
			<span className={classes.icon}><CartIcon/></span>
			<span>{props.children}</span>
			<span className={classes.badge}>{props.itemCount}</span>
		</button>
	);
};

export default HeaderCartButton;