import React, { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
	const [isCartShown, setIsCartShown] = useState(false);

	const showCartHandler = () => {
		setIsCartShown(true);
	};

	const hideCartHandler = () => {
		setIsCartShown(false);
	};

	return (
		<React.Fragment>
			{isCartShown && <Cart onCloseCart={hideCartHandler} />}
			<Header onShowCart={showCartHandler} onHideCart={hideCartHandler} />
			<main>
				<Meals />
			</main>
		</React.Fragment>
	);
}

export default App;
