import MainNavigation from "../components/layout/MainNavigation"

import Layout from '../components/layout/Layout';
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import CommentsList from "../components/comments/CommentsList";

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

const QuoteDetail = (props) => {
	return (
		<section>
			<MainNavigation />
			<Layout>
				<HighlightedQuote author='Kotaro' text='Test1' />
				<Comments />
				{DUMMY_COMMENTS.length === 0 && <p>No comments were added yet!!</p>}
				{DUMMY_COMMENTS.length !== 0 && <CommentsList comments={DUMMY_COMMENTS} />}
			</Layout>
		</section>

	);
};

export default QuoteDetail;