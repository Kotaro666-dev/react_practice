import { Fragment } from "react";
import { useParams, Route} from "react-router";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import CommentsList from "../components/comments/CommentsList";

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

	const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

	if (!quote) {
		return (
			<p>No quote found!</p>
		);
	}

	return (
		<Fragment>
			<HighlightedQuote author={quote.author} text={quote.text} />
			<Route path={`/quotes/${params.quoteId}/comments`}>
				<Comments />
			</Route>
			{DUMMY_COMMENTS.length === 0 && <p>No comments were added yet!!</p>}
			{DUMMY_COMMENTS.length !== 0 && <CommentsList comments={DUMMY_COMMENTS} />}
		</Fragment>
	);
};

export default QuoteDetail;