import classes from './MainNavigation.module.css';

const MainNavigation = () => {
	return (
		<header className={classes.header}>
			<h1 className={classes.logo}>Greate Quotes</h1>
			<nav className={classes.nav}>
				<ul>
					<li>All Quotes</li>
					<li>Add a Quote</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;