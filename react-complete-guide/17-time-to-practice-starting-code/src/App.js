import { Route, Switch, Redirect} from 'react-router-dom';
import AllQuotes from './Pages/AllQuotes';
import NewQuote from './Pages/NewQuote';


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
				<Route path="/quotes">
					<AllQuotes />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
