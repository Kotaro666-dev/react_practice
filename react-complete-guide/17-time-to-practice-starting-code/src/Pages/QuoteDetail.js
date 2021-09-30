import { Fragment, useEffect } from "react";
import { useParams, Route } from "react-router";
import { Link , useRouteMatch } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
	const params = useParams();
	const match = useRouteMatch();
	const { sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote, true);

	const { quoteId } = params;

	useEffect(() => {
		sendRequest(quoteId);
	}, [sendRequest, quoteId]);

	console.log(loadedQuote);

	if (status === 'pending') {
		return (
			<div className="centered">
				<LoadingSpinner />
			</div>
		);
	}

	if (error) {
		return (
			<p className="centered focused">
				{error}
			</p>
		);
	}

	if (!loadedQuote.text) {
		return <p>No quote found.</p>
	}

	return (
		<Fragment>
			<HighlightedQuote author={loadedQuote.author} text={loadedQuote.text} />
			<Route path={match.path} exact>
				<div className="centered">
					<Link className='btn--flat' to={`${match.url}/comments`}>
						Load Comments
					</Link>
				</div>
			</Route>
			<Route path={`${match.path}/comments`}>
				<Comments />
			</Route>
		</Fragment>
	);
};

export default QuoteDetail;