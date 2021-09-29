import { Link } from 'react-router-dom'

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
	return (
		<header className={classes.header}>
			<h1 className={classes.logo}>Greate Quotes</h1>
			<nav className={classes.nav}>
				<ul>
					<li>
						<Link activeClassName={classes.active} to="/quotes" >
							All Quotes
						</Link>
					</li>
					<li>
						<Link activeClassName={classes.active} to="/new-quote">
							Add a Quote
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;