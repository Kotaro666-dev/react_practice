import { useEffect } from 'react';
import { useHistory } from 'react-router';

import QuoteFrom from '../components/quotes/QuoteForm';
import { Fragment } from "react";
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';

const NewQuote = () => {
	const { sendRequest, status } = useHttp(addQuote);
	const history = useHistory();

	useEffect(() => {
		if (status === 'completed') {
			history.push("/quotes");
		}
	}, [status, history]);

	const addQuoteHandler = (quoteData) => {
		sendRequest(quoteData);
	}

	return (
		<Fragment>
			<QuoteFrom isLoading={status === 'pending'} onAddQuote={addQuoteHandler}/>
		</Fragment>
	);
};

export default NewQuote;