import { configureStore } from '@reduxjs/toolkit';
import { checkboxSlice } from './checkboxSlice';
import { radioSlice } from './radioSlice';
import { buttonSlice } from './buttonSlice';
import { ticketSlice } from './ticketSlice';

export const store = configureStore({
	reducer: {
		checkbox: checkboxSlice.reducer,
		radio: radioSlice.reducer,
		button: buttonSlice.reducer,
		ticket: ticketSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
