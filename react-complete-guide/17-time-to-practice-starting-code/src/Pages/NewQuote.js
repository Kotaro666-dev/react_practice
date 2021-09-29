import QuoteFrom from '../components/quotes/QuoteForm';
import { Fragment } from "react";


const NewQuote = () => {
	const addQuoteHandler = (quoteData) => {
		console.log(quoteData);
	}

	return (
		<Fragment>
			<QuoteFrom onAddQuote={addQuoteHandler}/>
		</Fragment>
	);
};

export default NewQuote;