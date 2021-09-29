import { Route, Switch} from 'react-router-dom'

import Welcome from './Pages/Welcome'
import Products from './Pages/Products'
import MainHeader from './Components/MainHeader';
import ProductDetail from './Pages/ProductDetail';

function App() {
	return (
		<div>
			<MainHeader />
			<main>
				<Switch>
					<Route path="/welcome">
						<Welcome />
					</Route>
					<Route path="/products" exact>
						<Products />
					</Route>
					<Route path="/products/:productId" exact>
						<ProductDetail />
					</Route>
				</Switch>
			</main>
		</div>
	);
}

export default App;

// / => Component A
// /products => Component B
// /products-product-detail/a-book