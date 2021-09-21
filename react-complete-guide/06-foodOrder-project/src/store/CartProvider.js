import React, { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
	items: [],
	totalAmount: 0,
}

const cartReducer = (prevState, action) => {
	if (action.type === 'ADD') {
		const newTotalAmount = prevState.totalAmount + action.item.price * action.item.amount;
		const existingCartItemIndex = prevState.items.findIndex(item => item.id === action.item.id);
		const existingCartItem = prevState.items[existingCartItemIndex];

		if (existingCartItem) {
			const newItem = {
				...existingCartItem,
				amount: existingCartItem.amount + action.item.amount,
			}
			const newItems = [...prevState.items];
			newItems[existingCartItemIndex] = newItem;
			return {
				items: newItems,
				totalAmount: newTotalAmount,
			};
		} else {
			const newItems = prevState.items.concat(action.item);
			return {
				items: newItems,
				totalAmount: newTotalAmount,
			};
		}
	}
	if (action.type === 'REMOVE') {

	}
	return defaultCartState;
}


const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

	const addItemToCartHandler = (item) => {
		dispatchCartAction({type: 'ADD', item: item});
	};

	const removeItemfromCardHandler = (id) => {
		dispatchCartAction({type: 'REMOVE', id: id});
	};

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemfromCardHandler,
	}

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;