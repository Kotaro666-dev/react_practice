import classes from './QuoteItem.module.css';

import { NavLink } from 'react-router-dom';

const QuoteItem = (props) => {
	return (
		<li className={classes.item}>
			<figure>
				<blockquote>
					<p>{props.text}</p>
				</blockquote>
				<figcaption>{props.author}</figcaption>
			</figure>
			<NavLink className='btn' to="/quotes/:q1">
				View Fullscreen
			</NavLink>
		</li>
	);
};

export default QuoteItem;
