import cartContext from "./cart-context";

const CartProvider = (props) => {
	const addItemToCartHandler = (item) => {

	};

	const removeItemfromCardHandler = (id) => {

	};


	const cartContext = {
		item: [],
		totalAmount: 0,
		addItem: addItemToCartHandler,
		removeItem: removeItemfromCardHandler,
	}

	return (
		<cartContext.Provider value={cartContext}>
			{props.children}
		</cartContext.Provider>
	);
};

export default CartProvider;