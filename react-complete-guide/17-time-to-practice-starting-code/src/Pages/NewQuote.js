import MainNavigation from "../components/layout/MainNavigation"

import Layout from '../components/layout/Layout';
import QuoteFrom from '../components/quotes/QuoteForm';


const NewQuote = () => {
	return (
		<section>
			<MainNavigation />
			<Layout>
				<QuoteFrom />
			</Layout>
		</section>
	);
};

export default NewQuote;