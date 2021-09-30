import { Fragment, useEffect } from "react";
import { useParams, Route } from "react-router";
import { Link , useRouteMatch } from "react-router-dom";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import CommentsList from "../components/comments/CommentsList";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const DUMMY_COMMENTS = [
	{
		id: 'c1',
		text: 'TEST 1',
	},
	{
		id: 'c2',
		text: 'TEST 2',
	}
];

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
			{DUMMY_COMMENTS.length === 0 && <p>No comments were added yet!!</p>}
			{DUMMY_COMMENTS.length !== 0 && <CommentsList comments={DUMMY_COMMENTS} />}
		</Fragment>
	);
};

export default QuoteDetail;