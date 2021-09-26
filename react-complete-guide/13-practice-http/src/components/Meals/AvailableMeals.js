import React, { useEffect, useState, useCallback } from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const url = 'https://react-http-8a8f0-default-rtdb.firebaseio.com/meals.json';

const AvailableMeals = () => {
	const [meals, setMeals] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState(null);

	useEffect(() => {
		const fetchMeals = async () => {
			const response = await fetch(url);
			if (response.status !== 200) {
				throw new Error('Something went wrong!');
			}
			const responseData = await response.json();

			const meals = [];
			for (const key in responseData) {
				meals.push({
					id: key,
					name: responseData[key].name,
					description: responseData[key].description,
					price: responseData[key].price,
				});
			}
			setMeals(meals);
		}

		const fetchApi = async () => {
			setIsLoading(true);
			setErrorMessage(null);

			try {
				await fetchMeals();
			} catch (error) {
				setErrorMessage(error.message);
			}
			setIsLoading(false);
		};

		fetchApi();
		return () => {};
	}, []);


	const mealsList = meals.map((meal) => (
		<MealItem
			key={meal.id}
			id={meal.id}
			name={meal.name}
			description={meal.description}
			price={meal.price}
		/>
	));

	const getContent = () => {
		if (isLoading) {
			return (
				<section className={classes.loading}>
					<p>Loading...</p>
				</section>
			);
		} else if (errorMessage) {
			return (
				<section className={classes['error-message']}>
					<p>{errorMessage}</p>
				</section>
			);
		} else if (mealsList.length > 0) {
			return (
				<section className={classes.meals}>
					<Card>
						<ul>{mealsList}</ul>
					</Card>
				</section>
			);
		}
		return <p>Found no movies.</p>;
	};

	const content = getContent();

	return (
		<React.Fragment>
			{content}
		</React.Fragment>
	);
};

export default AvailableMeals;
