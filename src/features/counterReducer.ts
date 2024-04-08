import { createAction } from '@reduxjs/toolkit';

type CounterState = { count: number };
type CounterAction =
  | { type: 'INCREMENT' | 'DECREMENT'; payload: number }
  | { type: 'RESET' };

createAction('INCREMENT', (amount: number) => {
  return { payload: amount };
});
