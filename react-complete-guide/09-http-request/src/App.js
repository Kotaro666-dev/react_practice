import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

const url = 'https://swapi.dev/api/films/';

function App() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchMovieHandler = useCallback(async () => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch(url);
			if (response.status !== 200) {
				throw new Error('Something went wrong!');
			}
			const data = await response.json();
			const transformedMovies = data.results.map((movieData) => {
				return {
					id: movieData.episode_id,
					title: movieData.title,
					openingText: movieData.opening_crawl,
					releaseDate: movieData.release_date,
				};
			});
			setMovies(transformedMovies);
		} catch (error) {
			setError(error.message);
		}
		setIsLoading(false);
	}, []);

	useEffect(() => {
		fetchMovieHandler();
		return (() => {});
	}, [fetchMovieHandler]);

	// const fetchMovieHandler = async () => {
	// 	fetch(url).then(response => {
	// 		return response.json();
	// 	})
	// 	.then(data => {
	// 		const transformedMovies = data.results.map((movieData) => {
	// 			return {
	// 				id: movieData.episode_id,
	// 				title: movieData.title,
	// 				openingText: movieData.opening_crawl,
	// 				releaseDate: movieData.release_date,
	// 			};
	// 		});
	// 		setMovies(transformedMovies);
	// 	});
	// };

	let content = <p>Found no movies.</p>;

	if (movies.length > 0) {
		content = <MoviesList movies={movies} />;
	}

	if (error) {
		content = <p>{error}</p>;
	}

	if (isLoading) {
		content = <p>Loading...</p>;
	}

	return (
		<React.Fragment>
			<section>
			<button onClick={fetchMovieHandler}>Fetch Movies</button>
			</section>
			<section>
				{content}
			</section>
		</React.Fragment>
	);
}

export default App;
