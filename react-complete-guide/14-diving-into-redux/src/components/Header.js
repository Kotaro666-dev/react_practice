import { authActions } from '../store';
import { useSelector, useDispatch } from 'react-redux';

import classes from './Header.module.css';
import { Fragment } from 'react';

const Header = () => {
	const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
	const dispatch = useDispatch();

	const logoutHandler = () => {
		dispatch(authActions.logout());
	}

	return (
		<header className={classes.header}>
			<h1>Redux Auth</h1>
			<nav>
				<ul>
					{isAuthenticated &&
						<Fragment>
							<li>
								<a href='/'>My Products</a>
							</li>
							<li>
								<a href='/'>My Sales</a>
							</li>
							<li>
								<button onClick={logoutHandler}>Logout</button>
							</li>
						</Fragment>
					}
				</ul>
			</nav>
		</header>
	);
};

export default Header;
