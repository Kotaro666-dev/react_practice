import { Fragment } from "react";

import QuoteList from "../components/quotes/QuoteList";
import NoQuotesFound from '../components/quotes/NoQuotesFound';

const DUMMY_QUOTES = [
	{
		id: 'q1',
		author: 'Kotaro',
		text: 'My first quote',
	},
	{
		id: 'q2',
		author: 'Kotaro',
		text: 'My second quote',
	},
];


const AllQuotes = () => {
	return (
		<Fragment>
			{DUMMY_QUOTES.length !== 0 && <QuoteList quotes={DUMMY_QUOTES}/>}
			{DUMMY_QUOTES.length === 0 && <NoQuotesFound />}
		</Fragment>
	);
};

export default AllQuotes;