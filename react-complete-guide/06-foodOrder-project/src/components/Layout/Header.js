import React from "react";

import classes from './Header.module.css';
import mealImage from '../../assets/images/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
	return (
		<React.Fragment>
			<header className={classes.header}>
				<h1>React Meals</h1>
				<HeaderCartButton itemCount='0'>Your Cart</HeaderCartButton>
			</header>
			<div className={classes.main_image}>
				<img src={mealImage} alt="meal" />;
			</div>
		</React.Fragment>
	);
};

export default Header;