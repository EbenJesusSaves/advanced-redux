import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export type TasksState = {
  entities: Task[];
};

type DraftTask = RequiredOnly<Task, 'title'>;

const createTask = (draftTask: DraftTask) => {
  return { id: nanoid(), ...draftTask };
};

const initialState: TasksState = {
  entities: [],
};

const TasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const task = createTask(action.payload);
      state.entities.unshift(task);
    },
    removeTask: (state, action: PayloadAction<DraftTask>) => {
      const task: Task[] = state.entities.filter(
        (task) => task.id !== action.payload.id,
      );
      state.entities = task;
    },
  },
});

export const { addTask, removeTask } = TasksSlice.actions;
export default TasksSlice.reducer;
