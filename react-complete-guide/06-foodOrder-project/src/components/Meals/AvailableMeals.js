import React from "react";

import classes from './AvailableMeals.module.css';
import dummy_meals from './dummy-meals'

const AvailableMeals = () => {
	const mealsList = dummy_meals.map((meal) => <li>{meal.name}</li>);


	return (
		<section className={classes.meals}>
			<ul className={classes.ul}>
				{mealsList}
			</ul>
		</section>
	);
};

export default AvailableMeals;