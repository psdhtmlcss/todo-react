import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Task } from '../types/types';
import { nanoid } from '@reduxjs/toolkit';

const initialState: Task[] = [];

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{title: string}>) => {
      const task = {
        id: nanoid(),
        title: action.payload.title,
        userId: nanoid(),
        completed: false
      }
      state.push(task);
    },
    deleteTask: (state, action: PayloadAction<{id: number | string}>) => {
      return state.filter(item => item.id !== action.payload.id);
    }
  }
})

export const {addTask, deleteTask} = todoSlice.actions;
export default todoSlice.reducer;


