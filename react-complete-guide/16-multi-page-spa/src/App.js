import { Route } from 'react-router-dom'

import Welcome from './Pages/Welcome'
import Products from './Pages/Products'

function App() {
	return (
		<div>
			<Route path="/welcome">
				<Welcome />
			</Route>
			<Route path="/products">
				<Products />
			</Route>
		</div>
	);
}

export default App;

// / => Component A
// /products => Component B