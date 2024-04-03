import { createSlice } from '@reduxjs/toolkit';

export type TasksState = {
  entities: Task[];
};

const initialState: TasksState = {
  entities: [],
};

const TasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
});
