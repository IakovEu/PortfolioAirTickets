import { createSlice } from '@reduxjs/toolkit';

export type ButtonKeys = 'btn1' | 'btn2' | 'btn3';

export const buttonSlice = createSlice({
	name: 'button',
	initialState: {
		btn1: true,
		btn2: false,
		btn3: false,
	},
	reducers: {
		changeBtn: (state, action) => {
			for (const btn in state) {
				const btnKey: ButtonKeys = ('btn' + action.payload) as ButtonKeys;
				state[btn as ButtonKeys] = btnKey === btn;
			}
		},
	},
});

export const { changeBtn } = buttonSlice.actions;
