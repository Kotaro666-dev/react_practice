import {configureStore} from '@reduxjs/toolkit';
import {useSelector as rawUseSelector, TypedUseSelectorHook} from 'react-redux';
import {useDispatch} from 'react-redux';

import todoReducer from './todo-reducer';

export type Todo = {
  id: number;
  title: string;
  isDone: boolean;
};

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
