import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import classes from './MainNavigation.module.css';
import { authActions } from '../../store/auth-slice';

const MainNavigation = () => {
	const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
	const dispatch = useDispatch();

	const lougoutHandler = () => {
		dispatch(authActions.logout());
	}

	return (
		<header className={classes.header}>
			<Link to='/'>
				<div className={classes.logo}>React Auth</div>
			</Link>
			<nav>
				<ul>
					{!isLoggedIn &&
						<li>
							<Link to='/auth'>Login</Link>
						</li>
					}
					{isLoggedIn &&
						<li>
							<Link to='/profile'>Profile</Link>
						</li>
					}
					{isLoggedIn &&
						<li>
							<button onClick={lougoutHandler}>Logout</button>
						</li>
					}
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
