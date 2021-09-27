import { configureStore, createSlice } from '@reduxjs/toolkit';

class Item {
	constructor(id, title, price, nums) {
		this.id = id;
		this.title = title;
		this.price = price;
		this.nums = nums;
	}
}

const initialState = {
	items: [],
	isCartVisible: false,
}

const shoppingCartSlice = createSlice({
	name: 'shoppingCart',
	initialState: initialState,
	reducers: {
		addToCart(state, action) {
			let isContained = false;
			let index = 0;
			if (state.items.length !== 0) {
				for (const item in state.items) {
					if (item.id === action.payload.id) {
						isContained = true;
						break ;
					}
					index++;
				}
			}

			if (isContained) {
				state.items[index].nums++;
			} else {
				const newItem = new Item(
					action.payload.id,
					action.payload.title,
					action.payload.price,
					1,
				);
				state.items.push(newItem);
			}
		},
		incrementItemNums(state, action) {
			state.items.map((item) => item.id === action.payload ? item.nums += 1 : item.nums);
		},
		decrementItemNums(state, action) {
			state.items.map((item) => item.id === action.payload ? item.nums -= 1 : item.nums);
		},
		toggleMyCart(state) {
			state.isCartVisible = !state.isCartVisible;
		}
	}
});

const store = configureStore({
	reducer: {
		cart: shoppingCartSlice.reducer,
	}
});

export const cartActions = shoppingCartSlice.actions;
export default store;
