import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit'

interface Task {
  id: string;
  name: string;
}

const initialState: Task[] = [];

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{name: string}>) => {
      const task: Task = {
        id: nanoid(),
        name: action.payload.name
      }
      state.push(task);
    },
    deleteTask: (state, action: PayloadAction<{id: string}>) => {
      return state.filter(item => item.id !== action.payload.id);
    }
  }
})

export const {addTask, deleteTask} = todoSlice.actions;
export default todoSlice.reducer;


