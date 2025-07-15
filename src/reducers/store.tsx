import { configureStore } from '@reduxjs/toolkit';
import { checkboxSlice } from './checkboxSlice';
import { radioSlice } from './radioSlice';

export const store = configureStore({
	reducer: {
		checkbox: checkboxSlice.reducer,
		radio: radioSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
