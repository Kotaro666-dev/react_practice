import {configureStore} from '@reduxjs/toolkit';

import todoReducer from './todo-reducer';

const store = configureStore({
  reducer: todoReducer,
});

export default store;
