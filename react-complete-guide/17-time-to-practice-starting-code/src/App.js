import { Route, Switch, Redirect} from 'react-router-dom';
import AllQuotes from './Pages/AllQuotes';
import NewQuote from './Pages/NewQuote';
import QuoteDetail from './Pages/QuoteDetail';


function App() {
	return (
		<div>
			<Switch>
				<Route path="/" exact>
					<Redirect to="/quotes"/>
				</Route>
				<Route path="/new-quote">
					<NewQuote />
				</Route>
				<Route path="/quotes" exact>
					<AllQuotes />
				</Route>
				<Route path="/quotes/:q1">
					<QuoteDetail />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
