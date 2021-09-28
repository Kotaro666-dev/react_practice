import { Route } from 'react-router-dom'

import Welcome from './Pages/Welcome'
import Products from './Pages/Products'
import MainHeader from './Components/MainHeader';

function App() {
	return (
		<div>
			<MainHeader />
			<main>
				<Route path="/welcome">
					<Welcome />
				</Route>
				<Route path="/products">
					<Products />
				</Route>
			</main>
		</div>
	);
}

export default App;

// / => Component A
// /products => Component B