import React from "react";

import classes from './AvailableMeals.module.css';
import dummy_meals from './dummy-meals'
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card"

const AvailableMeals = () => {
	const mealsList = dummy_meals.map((meal) => {
		return <MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price}/>
	});


	return (
		<section className={classes.meals}>
			<Card>
				<ul className={classes.ul}>
					{mealsList}
				</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;