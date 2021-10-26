import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type Todo = {
  id: number;
  title: string;
  isDone: boolean;
};

const initialState: Todo[] = [];

const TodoSlice = createSlice({
  name: 'Todo',
  initialState: initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => [...state, action.payload],
    updateTodo: (state, action: PayloadAction<number>) => {
      const index = state.findIndex(item => item.id === action.payload);
      state[index].isDone = !state[index].isDone;
    },
  },
});

export const {addTodo, updateTodo} = TodoSlice.actions;
export default TodoSlice.reducer;
