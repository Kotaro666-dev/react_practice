import React, { useContext } from "react";

import classes from './Header.module.css';
import mealImage from '../../assets/images/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";
import cartContext from "../../store/cart-context";

const Header = (props) => {
	const context = useContext(cartContext);

	return (
		<React.Fragment>
			<header className={classes.header}>
				<h1>React Meals</h1>
				<HeaderCartButton onClick={props.onShowCart}>Your Cart</HeaderCartButton>
			</header>
			<div className={classes.main_image}>
				<img src={mealImage} alt="meal" />;
			</div>
		</React.Fragment>
	);
};

export default Header;