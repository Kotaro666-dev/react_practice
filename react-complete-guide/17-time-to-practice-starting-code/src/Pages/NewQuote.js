import { useHistory } from 'react-router';

import QuoteFrom from '../components/quotes/QuoteForm';
import { Fragment } from "react";


const NewQuote = () => {
	const history = useHistory();

	const addQuoteHandler = (quoteData) => {
		console.log(quoteData);

		history.push("/quotes");
	}

	return (
		<Fragment>
			<QuoteFrom onAddQuote={addQuoteHandler}/>
		</Fragment>
	);
};

export default NewQuote;